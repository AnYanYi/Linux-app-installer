// Homebrew script - brew

import { generateAsciiHeader, generateSharedUtils, escapeShellString, type PackageInfo } from './shared';

export function generateHomebrewScript(packages: PackageInfo[]): string {
    return generateAsciiHeader('Homebrew', packages.length) + generateSharedUtils(packages.length) + `
is_installed() { brew list --formula "$1" &>/dev/null || brew list --cask "$1" &>/dev/null; }

install_pkg() {
    local name=$1 pkg=$2 type=$3
    CURRENT=$((CURRENT + 1))
    
    if is_installed "$pkg"; then
        skip "$name"
        SKIPPED+=("$name")
        return 0
    fi
    
    show_progress $CURRENT $TOTAL "$name"
    local start=$(date +%s)
    
    local output
    if [ "$type" = "cask" ]; then
        output=$(with_retry brew install --cask "$pkg" 2>&1)
    else
        output=$(with_retry brew install "$pkg" 2>&1)
    fi
    
    if [ $? -eq 0 ]; then
        local elapsed=$(($(date +%s) - start))
        update_avg_time $elapsed
        printf "\\r\\033[K"
        timing "$name" "$elapsed"
        SUCCEEDED+=("$name")
    else
        printf "\\r\\033[K\${RED}✗\${NC} %s\\n" "$name"
        if echo "$output" | grep -q "No available formula\\|No available cask"; then
            echo -e "    \${DIM}Not available in Homebrew\${NC}"
        fi
        FAILED+=("$name")
    fi
}

# ─────────────────────────────────────────────────────────────────────────────

command -v brew &>/dev/null || { error "Homebrew not found. Install from https://brew.sh"; exit 1; }

info "Updating Homebrew..."
with_retry brew update >/dev/null && success "Updated" || warn "Update failed"

echo
info "Installing $TOTAL packages"
echo

${packages.map(({ app, pkg, cask }) => {
    const type = cask ? 'cask' : 'formula';
    return `install_pkg "${escapeShellString(app.name)}" "${pkg}" "${type}"`;
}).join('\n')}

print_summary
echo
info "Restart your shell for new commands."
`;
}
