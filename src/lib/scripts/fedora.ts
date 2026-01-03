// Fedora script - dnf with RPM Fusion auto-enable

import { generateAsciiHeader, generateSharedUtils, escapeShellString, type PackageInfo } from './shared';

export function generateFedoraScript(packages: PackageInfo[]): string {
    const rpmFusionPkgs = ['steam', 'vlc', 'ffmpeg', 'obs-studio'];
    const needsRpmFusion = packages.some(p => rpmFusionPkgs.includes(p.pkg));

    return generateAsciiHeader('Fedora', packages.length) + generateSharedUtils(packages.length) + `
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
    if output=$(with_retry sudo dnf install -y "$pkg"); then
        local elapsed=$(($(date +%s) - start))
        update_avg_time $elapsed
        printf "\\r\\033[K"
        timing "$name" "$elapsed"
        SUCCEEDED+=("$name")
    else
        printf "\\r\\033[K\${RED}✗\${NC} %s\\n" "$name"
        if echo "$output" | grep -q "No match"; then
            echo -e "    \${DIM}Package not found\${NC}"
        fi
        FAILED+=("$name")
    fi
}

# ─────────────────────────────────────────────────────────────────────────────

[ "$EUID" -eq 0 ] && { error "Run as regular user, not root."; exit 1; }
command -v dnf &>/dev/null || { error "dnf not found"; exit 1; }

${needsRpmFusion ? `
if ! dnf repolist 2>/dev/null | grep -q rpmfusion; then
    info "Enabling RPM Fusion..."
    sudo dnf install -y \\
        "https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm" \\
        "https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm" \\
        >/dev/null 2>&1 && success "RPM Fusion enabled"
fi
` : ''}

echo
info "Installing $TOTAL packages"
echo

${packages.map(({ app, pkg }) => `install_pkg "${escapeShellString(app.name)}" "${pkg}"`).join('\n')}

print_summary
`;
}
