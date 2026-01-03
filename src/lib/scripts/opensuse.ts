// openSUSE script - zypper

import { generateAsciiHeader, generateSharedUtils, escapeShellString, type PackageInfo } from './shared';

export function generateOpenSUSEScript(packages: PackageInfo[]): string {
    return generateAsciiHeader('openSUSE', packages.length) + generateSharedUtils(packages.length) + `
is_installed() { rpm -q "$1" &>/dev/null; }

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
    if output=$(with_retry sudo zypper --non-interactive install --auto-agree-with-licenses "$pkg"); then
        local elapsed=$(($(date +%s) - start))
        update_avg_time $elapsed
        printf "\\r\\033[K"
        timing "$name" "$elapsed"
        SUCCEEDED+=("$name")
    else
        printf "\\r\\033[K\${RED}✗\${NC} %s\\n" "$name"
        FAILED+=("$name")
    fi
}

# ─────────────────────────────────────────────────────────────────────────────

[ "$EUID" -eq 0 ] && { error "Run as regular user, not root."; exit 1; }
command -v zypper &>/dev/null || { error "zypper not found"; exit 1; }

while [ -f /var/run/zypp.pid ]; do
    warn "Waiting for zypper..."
    sleep 2
done

info "Refreshing repos..."
with_retry sudo zypper --non-interactive refresh >/dev/null && success "Refreshed" || warn "Refresh failed"

echo
info "Installing $TOTAL packages"
echo

${packages.map(({ app, pkg }) => `install_pkg "${escapeShellString(app.name)}" "${pkg}"`).join('\n')}

print_summary
`;
}
