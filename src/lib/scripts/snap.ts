// Snap script

import { generateAsciiHeader, generateSharedUtils, escapeShellString, type PackageInfo } from './shared';

export function generateSnapScript(packages: PackageInfo[]): string {
    return generateAsciiHeader('Snap', packages.length) + generateSharedUtils(packages.length) + `
is_installed() {
    local snap_name=$(echo "$1" | awk '{print $1}')
    snap list 2>/dev/null | grep -q "^$snap_name "
}

install_pkg() {
    local name=$1 pkg=$2
    CURRENT=$((CURRENT + 1))
    
    if is_installed "$pkg"; then
        skip "$name"
        SKIPPED+=("$name")
        return 0
    fi
    
    show_progress $CURRENT $TOTAL "$name"
    local start=$(date +%s)
    
    local output
    if output=$(with_retry sudo snap install $pkg); then
        local elapsed=$(($(date +%s) - start))
        update_avg_time $elapsed
        printf "\\r\\033[K"
        timing "$name" "$elapsed"
        SUCCEEDED+=("$name")
    else
        printf "\\r\\033[K\${RED}✗\${NC} %s\\n" "$name"
        if echo "$output" | grep -q "not found"; then
            echo -e "    \${DIM}Snap not found\${NC}"
        fi
        FAILED+=("$name")
    fi
}

# ─────────────────────────────────────────────────────────────────────────────

command -v snap &>/dev/null || { 
    error "Snap not installed"
    info "Install: sudo apt/dnf/pacman install snapd"
    exit 1
}

if command -v systemctl &>/dev/null && ! systemctl is-active --quiet snapd; then
    info "Starting snapd..."
    sudo systemctl enable --now snapd.socket
    sudo systemctl start snapd
    sleep 2
    success "snapd started"
fi

echo
info "Installing $TOTAL packages"
echo

${packages.map(({ app, pkg }) => `install_pkg "${escapeShellString(app.name)}" "${pkg}"`).join('\n')}

print_summary
`;
}
