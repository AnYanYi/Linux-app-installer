// Ubuntu script - apt-get with dependency auto-fix

import { generateAsciiHeader, generateSharedUtils, escapeShellString, type PackageInfo } from './shared';

export function generateUbuntuScript(packages: PackageInfo[]): string {
    return generateAsciiHeader('Ubuntu', packages.length) + generateSharedUtils(packages.length) + `
is_installed() { dpkg -l "$1" 2>/dev/null | grep -q "^ii"; }

# Auto-fix broken dependencies
fix_deps() {
    if sudo apt-get --fix-broken install -y >/dev/null 2>&1; then
        success "Dependencies fixed"
        return 0
    fi
    return 1
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
    if output=$(with_retry sudo apt-get install -y "$pkg"); then
        local elapsed=$(($(date +%s) - start))
        update_avg_time $elapsed
        printf "\\r\\033[K"
        timing "$name" "$elapsed"
        SUCCEEDED+=("$name")
    else
        printf "\\r\\033[K\${RED}✗\${NC} %s\\n" "$name"
        if echo "$output" | grep -q "Unable to locate"; then
            echo -e "    \${DIM}Package not found\${NC}"
        elif echo "$output" | grep -q "unmet dependencies"; then
            echo -e "    \${DIM}Fixing dependencies...\${NC}"
            if fix_deps; then
                # Retry once after fixing deps
                if sudo apt-get install -y "$pkg" >/dev/null 2>&1; then
                    timing "$name" "$(($(date +%s) - start))"
                    SUCCEEDED+=("$name")
                    return 0
                fi
            fi
        fi
        FAILED+=("$name")
    fi
}

# ─────────────────────────────────────────────────────────────────────────────
#  Pre-flight
# ─────────────────────────────────────────────────────────────────────────────

[ "$EUID" -eq 0 ] && { error "Run as regular user, not root."; exit 1; }

# Wait for apt lock
while fuser /var/lib/dpkg/lock-frontend >/dev/null 2>&1; do
    warn "Waiting for package manager..."
    sleep 2
done

info "Updating package lists..."
with_retry sudo apt-get update -qq >/dev/null && success "Updated" || warn "Update failed, continuing..."

# ─────────────────────────────────────────────────────────────────────────────
#  Installation
# ─────────────────────────────────────────────────────────────────────────────

echo
info "Installing $TOTAL packages"
echo

${packages.map(({ app, pkg }) => `install_pkg "${escapeShellString(app.name)}" "${pkg}"`).join('\n')}

print_summary
`;
}
