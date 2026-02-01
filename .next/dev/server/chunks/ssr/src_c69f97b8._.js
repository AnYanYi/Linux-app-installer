module.exports = [
"[project]/src/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Types
__turbopack_context__.s([
    "apps",
    ()=>apps,
    "categories",
    ()=>categories,
    "distros",
    ()=>distros,
    "getAppsByCategory",
    ()=>getAppsByCategory,
    "isAppAvailable",
    ()=>isAppAvailable
]);
// Icon helpers using Iconify API for comprehensive icon coverage
// Adding ?color=hex to colorize monochrome icons
const icon = (set, name, color)=>`https://api.iconify.design/${set}/${name}.svg${color ? `?color=${encodeURIComponent(color)}` : ''}`;
const si = (name, color)=>icon('simple-icons', name, color); // Simple Icons (brands)
const lo = (name)=>icon('logos', name); // Logos (already colorful)
const vs = (name)=>icon('vscode-icons', name); // VS Code Icons (colorful file types)
const mdi = (name, color)=>icon('mdi', name, color); // Material Design Icons
const distros = [
    {
        id: 'ubuntu',
        name: 'Ubuntu',
        iconUrl: si('ubuntu', '#E95420'),
        color: '#E95420',
        installPrefix: 'sudo apt install -y'
    },
    {
        id: 'debian',
        name: 'Debian',
        iconUrl: si('debian', '#A81D33'),
        color: '#A81D33',
        installPrefix: 'sudo apt install -y'
    },
    {
        id: 'arch',
        name: 'Arch',
        iconUrl: si('archlinux', '#1793D1'),
        color: '#1793D1',
        installPrefix: 'sudo pacman -S --needed --noconfirm'
    },
    {
        id: 'fedora',
        name: 'Fedora',
        iconUrl: si('fedora', '#51A2DA'),
        color: '#51A2DA',
        installPrefix: 'sudo dnf install -y'
    },
    {
        id: 'opensuse',
        name: 'OpenSUSE',
        iconUrl: si('opensuse', '#73BA25'),
        color: '#73BA25',
        installPrefix: 'sudo zypper install -y'
    },
    {
        id: 'nix',
        name: 'Nix',
        iconUrl: si('nixos', '#5277C3'),
        color: '#5277C3',
        installPrefix: 'nix-env -iA nixpkgs.'
    },
    {
        id: 'flatpak',
        name: 'Flatpak',
        iconUrl: si('flatpak', '#4A90D9'),
        color: '#4A90D9',
        installPrefix: 'flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo && flatpak install flathub -y'
    },
    {
        id: 'snap',
        name: 'Snap',
        iconUrl: si('snapcraft', '#82BEA0'),
        color: '#82BEA0',
        installPrefix: 'sudo snap install'
    }
];
const apps = [
    // WEB BROWSERS
    {
        id: 'firefox',
        name: 'Firefox',
        description: 'Privacy-focused open-source browser by Mozilla',
        category: '网页浏览器',
        iconUrl: si('firefox', '#FF7139'),
        targets: {
            ubuntu: 'firefox',
            debian: 'firefox-esr',
            arch: 'firefox',
            fedora: 'firefox',
            opensuse: 'MozillaFirefox',
            nix: 'firefox',
            flatpak: 'org.mozilla.firefox',
            snap: 'firefox'
        }
    },
    {
        id: 'chromium',
        name: 'Chromium',
        description: 'Open-source browser that powers Google Chrome',
        category: '网页浏览器',
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Chromium_Logo.svg',
        targets: {
            ubuntu: 'chromium-browser',
            debian: 'chromium',
            arch: 'chromium',
            fedora: 'chromium',
            opensuse: 'chromium',
            nix: 'chromium',
            flatpak: 'org.chromium.Chromium',
            snap: 'chromium'
        }
    },
    {
        id: 'brave',
        name: 'Brave',
        description: 'Privacy browser with built-in ad/tracker blocker',
        category: '网页浏览器',
        iconUrl: si('brave', '#FB542B'),
        targets: {
            arch: 'brave-bin',
            opensuse: 'brave-browser',
            nix: 'brave',
            flatpak: 'com.brave.Browser',
            snap: 'brave'
        },
        unavailableReason: 'Not in official repos. Use Flatpak/Snap or follow instructions at [brave.com/linux](https://brave.com/linux/).'
    },
    {
        id: 'librewolf',
        name: 'LibreWolf',
        description: 'Privacy-hardened Firefox fork with telemetry removed',
        category: '网页浏览器',
        iconUrl: si('firefoxbrowser', '#0588D1'),
        targets: {
            arch: 'librewolf-bin',
            opensuse: 'librewolf',
            nix: 'librewolf',
            flatpak: 'io.gitlab.librewolf-community'
        },
        unavailableReason: 'Not available in official repos. Use [Flatpak](https://flathub.org/en/apps/io.gitlab.librewolf-community) or follow instructions at [librewolf.net/installation](https://librewolf.net/installation/).'
    },
    {
        id: 'tor',
        name: 'Tor Browser',
        description: 'Anonymous browsing via the Tor network',
        category: '网页浏览器',
        iconUrl: si('torbrowser', '#7D4698'),
        targets: {
            ubuntu: 'torbrowser-launcher',
            debian: 'torbrowser-launcher',
            arch: 'torbrowser-launcher',
            fedora: 'torbrowser-launcher',
            opensuse: 'torbrowser-launcher',
            nix: 'tor-browser-bundle-bin',
            flatpak: 'org.torproject.torbrowser-launcher'
        },
        unavailableReason: 'Not available as Snap. Download from [torproject.org](https://www.torproject.org/download/).'
    },
    {
        id: 'chrome',
        name: 'Google Chrome',
        description: 'Most popular web browser by Google',
        category: '网页浏览器',
        iconUrl: lo('chrome'),
        targets: {
            ubuntu: 'google-chrome-stable',
            debian: 'google-chrome-stable',
            arch: 'google-chrome',
            fedora: 'google-chrome-stable',
            opensuse: 'google-chrome-stable',
            nix: 'google-chrome',
            flatpak: 'com.google.Chrome'
        },
        unavailableReason: 'Not available as Snap. Download from [google.com/chrome](https://www.google.com/chrome/) or use Flatpak.'
    },
    {
        id: 'zen',
        name: 'Zen Browser',
        description: 'Privacy-focused Firefox fork',
        category: '网页浏览器',
        iconUrl: si('zenbrowser', '#FF7139'),
        targets: {
            arch: 'zen-browser-bin',
            flatpak: 'app.zen_browser.zen'
        },
        unavailableReason: 'Not in most official repos. Use [Flatpak](https://flathub.org/apps/app.zen_browser.zen) or download from [zen-browser.app](https://zen-browser.app).'
    },
    {
        id: 'helium',
        name: 'Helium',
        description: 'Privacy-focused ungoogled-chromium browser',
        category: '网页浏览器',
        iconUrl: si('googlechrome', '#00D4FF'),
        targets: {
            arch: 'helium-browser-bin'
        },
        unavailableReason: 'Only available as AppImage or via AUR. Download from [helium.computer](https://helium.computer/).'
    },
    {
        id: 'vivaldi',
        name: 'Vivaldi',
        description: 'Highly customizable browser for power users',
        category: '网页浏览器',
        iconUrl: si('vivaldi', '#EF3939'),
        targets: {
            arch: 'vivaldi',
            nix: 'vivaldi',
            flatpak: 'com.vivaldi.Vivaldi',
            snap: 'vivaldi'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/apps/com.vivaldi.Vivaldi)/[Snap](https://snapcraft.io/vivaldi) or download from [vivaldi.com](https://vivaldi.com/download/).'
    },
    // COMMUNICATION
    {
        id: 'discord',
        name: 'Discord',
        description: 'Popular voice, video, and text chat platform',
        category: '通讯软件',
        iconUrl: si('discord', '#5865F2'),
        targets: {
            arch: 'discord',
            opensuse: 'discord',
            nix: 'discord',
            flatpak: 'com.discordapp.Discord',
            snap: 'discord'
        },
        unavailableReason: 'Not in official repos. Install via [Flatpak](https://flathub.org/en/apps/com.discordapp.Discord) or download from [discord.com/download](https://discord.com/download).'
    },
    {
        id: 'vesktop',
        name: 'Vesktop',
        description: 'Discord client with Vencord mods built-in',
        category: '通讯软件',
        iconUrl: 'https://avatars.githubusercontent.com/u/113042587?s=200&v=4',
        targets: {
            arch: 'vesktop-bin',
            nix: 'vesktop',
            flatpak: 'dev.vencord.Vesktop'
        },
        unavailableReason: 'Not available in official repos. Check it on [Flatpak](https://flathub.org/en/apps/dev.vencord.Vesktop) or Download from [vesktop.dev/install/linux](https://vesktop.dev/install/linux/).'
    },
    {
        id: 'telegram',
        name: 'Telegram',
        description: 'Fast cloud-based messaging with file sharing',
        category: '通讯软件',
        iconUrl: si('telegram', '#26A5E4'),
        targets: {
            ubuntu: 'telegram-desktop',
            debian: 'telegram-desktop',
            arch: 'telegram-desktop',
            fedora: 'telegram-desktop',
            opensuse: 'telegram-desktop',
            nix: 'telegram-desktop',
            flatpak: 'org.telegram.desktop',
            snap: 'telegram-desktop'
        }
    },
    {
        id: 'signal',
        name: 'Signal',
        description: 'Secure end-to-end encrypted messaging app',
        category: '通讯软件',
        iconUrl: si('signal', '#3A76F0'),
        targets: {
            arch: 'signal-desktop',
            opensuse: 'signal-desktop',
            nix: 'signal-desktop',
            flatpak: 'org.signal.Signal',
            snap: 'signal-desktop'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/en/apps/org.signal.Signal)/[Snap](https://snapcraft.io/signal-desktop) or follow instructions at [signal.org/download/linux](https://signal.org/download/linux/).'
    },
    {
        id: 'slack',
        name: 'Slack',
        description: 'Team collaboration and business messaging',
        category: '通讯软件',
        iconUrl: si('slack', '#4A154B'),
        targets: {
            arch: 'slack-desktop',
            nix: 'slack',
            flatpak: 'com.slack.Slack',
            snap: 'slack'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/en/apps/com.slack.Slack)/[Snap](https://snapcraft.io/slack) or download from [slack.com/downloads/linux](https://slack.com/downloads/linux).'
    },
    {
        id: 'zoom',
        name: 'Zoom',
        description: 'Popular video conferencing and meetings',
        category: '通讯软件',
        iconUrl: si('zoom', '#0B5CFF'),
        targets: {
            arch: 'zoom',
            nix: 'zoom-us',
            flatpak: 'us.zoom.Zoom',
            snap: 'zoom-client'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/en/apps/us.zoom.Zoom)/[Snap](https://snapcraft.io/zoom-client) or download from [zoom.us/download/linux](https://zoom.us/download/linux).'
    },
    {
        id: 'thunderbird',
        name: 'Thunderbird',
        description: 'Free email client by Mozilla with calendar',
        category: '通讯软件',
        iconUrl: si('thunderbird', '#0A84FF'),
        targets: {
            ubuntu: 'thunderbird',
            debian: 'thunderbird',
            arch: 'thunderbird',
            fedora: 'thunderbird',
            opensuse: 'MozillaThunderbird',
            nix: 'thunderbird',
            flatpak: 'org.mozilla.Thunderbird',
            snap: 'thunderbird'
        }
    },
    {
        id: 'element',
        name: 'Element',
        description: 'Decentralized Matrix chat client with E2E encryption',
        category: '通讯软件',
        iconUrl: si('element', '#0DBD8B'),
        targets: {
            arch: 'element-desktop',
            opensuse: 'element-desktop',
            nix: 'element-desktop',
            flatpak: 'im.riot.Riot',
            snap: 'element-desktop'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/en/apps/im.riot.Riot)/[Snap](https://snapcraft.io/element-desktop) or follow instructions at [element.io/download#linux](https://element.io/en/download#linux).'
    },
    // DEV LANGUAGES
    {
        id: 'python3',
        name: 'Python 3',
        description: 'Popular beginner-friendly programming language',
        category: '开发：编程语言',
        iconUrl: si('python', '#3776AB'),
        targets: {
            ubuntu: 'python3',
            debian: 'python3',
            arch: 'python',
            fedora: 'python3',
            opensuse: 'python3',
            nix: 'python3'
        },
        unavailableReason: 'Python 3 is a system package and not available via Flatpak or Snap.'
    },
    {
        id: 'nodejs',
        name: 'Node.js',
        description: 'Server-side JavaScript runtime environment',
        category: '开发：编程语言',
        iconUrl: si('nodedotjs', '#5FA04E'),
        targets: {
            ubuntu: 'nodejs',
            debian: 'nodejs',
            arch: 'nodejs',
            fedora: 'nodejs',
            opensuse: 'nodejs',
            nix: 'nodejs',
            snap: 'node --classic'
        },
        unavailableReason: 'Node.js is not available as a Flatpak or Snap.'
    },
    {
        id: 'go',
        name: 'Go',
        description: 'Fast compiled programming language by Google',
        category: '开发：编程语言',
        iconUrl: si('go', '#00ADD8'),
        targets: {
            ubuntu: 'golang',
            debian: 'golang',
            arch: 'go',
            fedora: 'golang',
            opensuse: 'go',
            nix: 'go',
            snap: 'go --classic'
        },
        unavailableReason: 'Go is not available as a Flatpak package.'
    },
    {
        id: 'rust',
        name: 'Rust',
        description: 'Memory-safe systems programming language',
        category: '开发：编程语言',
        iconUrl: si('rust', '#F74C00'),
        targets: {
            arch: 'rustup',
            fedora: 'rustup',
            opensuse: 'rustup',
            nix: 'rustup',
            snap: 'rustup --classic'
        },
        unavailableReason: 'Install via [rustup.rs](https://rustup.rs) on Ubuntu and Debian.'
    },
    {
        id: 'ruby',
        name: 'Ruby',
        description: 'Dynamic language known for elegant syntax',
        category: '开发：编程语言',
        iconUrl: si('ruby', '#CC342D'),
        targets: {
            ubuntu: 'ruby',
            debian: 'ruby',
            arch: 'ruby',
            fedora: 'ruby',
            opensuse: 'ruby',
            nix: 'ruby',
            snap: 'ruby --classic'
        },
        unavailableReason: 'Ruby is a system package and not available via Flatpak or Snap.'
    },
    {
        id: 'php',
        name: 'PHP',
        description: 'Popular web server-side scripting language',
        category: '开发：编程语言',
        iconUrl: si('php', '#777BB4'),
        targets: {
            ubuntu: 'php',
            debian: 'php',
            arch: 'php',
            fedora: 'php',
            opensuse: 'php8',
            nix: 'php'
        },
        unavailableReason: 'PHP is a system package and not available via Flatpak or Snap.'
    },
    {
        id: 'openjdk',
        name: 'OpenJDK',
        description: 'Open-source Java Development Kit',
        category: '开发：编程语言',
        iconUrl: si('openjdk', '#437291'),
        targets: {
            ubuntu: 'openjdk-21-jdk',
            debian: 'openjdk-17-jdk',
            arch: 'jdk-openjdk',
            fedora: 'java-21-openjdk',
            opensuse: 'java-21-openjdk',
            nix: 'openjdk'
        },
        unavailableReason: 'OpenJDK is a system package and not available via Flatpak or Snap.'
    },
    {
        id: 'deno',
        name: 'Deno',
        description: 'Secure TypeScript/JavaScript runtime by Node creator',
        category: '开发：编程语言',
        iconUrl: si('deno', '#70FFAF'),
        targets: {
            arch: 'deno',
            opensuse: 'deno',
            nix: 'deno'
        },
        unavailableReason: 'Install via `curl -fsSL https://deno.land/install.sh | sh` on other distros.'
    },
    {
        id: 'bun',
        name: 'Bun',
        description: 'Ultra-fast JavaScript runtime and bundler',
        category: '开发：编程语言',
        iconUrl: icon('logos', 'bun'),
        targets: {
            arch: 'bun-bin',
            nix: 'bun'
        },
        unavailableReason: 'Install via `curl -fsSL https://bun.sh/install.sh | bash` on other distros.'
    },
    // DEV EDITORS
    {
        id: 'vscode',
        name: 'VS Code',
        description: 'Most popular extensible code editor by Microsoft',
        category: '开发：编辑器',
        iconUrl: lo('visual-studio-code'),
        targets: {
            arch: 'code',
            nix: 'vscode',
            flatpak: 'com.visualstudio.code',
            snap: 'code --classic'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/en/apps/com.visualstudio.code)/[Snap](https://snapcraft.io/code) or download from [code.visualstudio.com](https://code.visualstudio.com/Download).'
    },
    {
        id: 'vscodium',
        name: 'VSCodium',
        description: 'Community-built VS Code without Microsoft telemetry',
        category: '开发：编辑器',
        iconUrl: si('vscodium', '#2F80ED'),
        targets: {
            arch: 'vscodium-bin',
            nix: 'vscodium',
            flatpak: 'com.vscodium.codium',
            snap: 'codium --classic'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/en/apps/com.vscodium.codium)/[Snap](https://snapcraft.io/codium) or follow instructions at [vscodium.com](https://vscodium.com/#install).'
    },
    {
        id: 'neovim',
        name: 'Neovim',
        description: 'Modernized Vim with better extensibility',
        category: '开发：编辑器',
        iconUrl: si('neovim', '#57A143'),
        targets: {
            ubuntu: 'neovim',
            debian: 'neovim',
            arch: 'neovim',
            fedora: 'neovim',
            opensuse: 'neovim',
            nix: 'neovim',
            flatpak: 'com.neovim.Neovim',
            snap: 'nvim --classic'
        }
    },
    {
        id: 'helix',
        name: 'Helix',
        description: 'Modal editor with LSP and tree-sitter built-in',
        category: '开发：编辑器',
        iconUrl: mdi('dna', '#4E2F7F'),
        targets: {
            ubuntu: 'helix',
            arch: 'helix',
            fedora: 'helix',
            opensuse: 'helix',
            nix: 'helix',
            flatpak: 'com.helix-editor.Helix',
            snap: 'helix --classic'
        }
    },
    {
        id: "micro",
        name: "Micro",
        description: "Easy-to-use terminal text editor like nano",
        category: "开发：编辑器",
        iconUrl: si("microeditor", "#2E3192"),
        targets: {
            arch: "micro",
            ubuntu: "micro",
            debian: "micro",
            fedora: "micro",
            opensuse: "micro-editor",
            nix: "micro-editor",
            flatpak: "io.github.zyedidia.micro",
            snap: "micro --classic"
        }
    },
    {
        id: 'zed',
        name: 'Zed',
        description: 'High-performance editor with real-time collaboration',
        category: '开发：编辑器',
        iconUrl: si('zedindustries', '#084CCF'),
        targets: {
            arch: 'zed',
            fedora: 'zed',
            nix: 'zed-editor',
            flatpak: 'dev.zed.Zed'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/en/apps/dev.zed.Zed) or see [zed.dev/docs/linux](https://zed.dev/docs/linux#other-ways-to-install-zed-on-linux) for other methods.'
    },
    {
        id: 'sublime',
        name: 'Sublime Text',
        description: 'Lightning-fast proprietary text editor',
        category: '开发：编辑器',
        iconUrl: si('sublimetext', '#FF9800'),
        targets: {
            arch: 'sublime-text-4',
            nix: 'sublime-text',
            flatpak: 'com.sublimetext.three',
            snap: 'sublime-text --classic'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/en/apps/com.sublimetext.three)/[Snap](https://snapcraft.io/sublime-text) or follow instructions at [sublimetext.com/docs/linux_repositories](https://www.sublimetext.com/docs/linux_repositories.html).'
    },
    {
        id: 'arduino',
        name: 'Arduino IDE',
        description: 'IDE for Arduino microcontroller development',
        category: '开发：编辑器',
        iconUrl: si('arduino', '#00878F'),
        targets: {
            ubuntu: 'arduino',
            debian: 'arduino',
            arch: 'arduino',
            fedora: 'arduino',
            nix: 'arduino-ide',
            flatpak: 'cc.arduino.IDE2',
            snap: 'arduino'
        },
        unavailableReason: 'Arduino IDE is not in official openSUSE repos. Use [Flatpak](https://flathub.org/en/apps/cc.arduino.IDE2) or [Snap](https://snapcraft.io/arduino) instead.'
    },
    {
        id: 'cursor',
        name: 'Cursor',
        description: 'AI-powered code editor based on VS Code',
        category: '开发：编辑器',
        iconUrl: si('cursor', '#232020ff'),
        targets: {
            arch: 'cursor-bin',
            nix: 'code-cursor'
        },
        unavailableReason: 'Only available via [AUR](https://aur.archlinux.org/packages/cursor-bin) or Nix. Download from [cursor.com/download](https://cursor.com/download).'
    },
    {
        id: 'kate',
        name: 'Kate',
        description: 'Feature-rich text editor by KDE with syntax highlighting',
        category: '开发：编辑器',
        iconUrl: si('kde', '#1D99F3'),
        targets: {
            ubuntu: 'kate',
            debian: 'kate',
            arch: 'kate',
            fedora: 'kate',
            opensuse: 'kate',
            nix: 'kdePackages.kate',
            flatpak: 'org.kde.kate',
            snap: 'kate --classic'
        }
    },
    // DEV TOOLS
    {
        id: 'git',
        name: 'Git',
        description: 'Industry-standard distributed version control',
        category: '开发：工具',
        iconUrl: si('git', '#F05032'),
        targets: {
            ubuntu: 'git',
            debian: 'git',
            arch: 'git',
            fedora: 'git',
            opensuse: 'git',
            nix: 'git'
        },
        unavailableReason: 'Git is a system package and not available via Flatpak or Snap.'
    },
    {
        id: 'gitlfs',
        name: 'Git LFS',
        description: 'Git extension for versioning large files',
        category: '开发：工具',
        iconUrl: si('git', '#F05032'),
        targets: {
            ubuntu: 'git-lfs',
            debian: 'git-lfs',
            arch: 'git-lfs',
            fedora: 'git-lfs',
            opensuse: 'git-lfs',
            nix: 'git-lfs'
        },
        unavailableReason: 'Git LFS is a system package and not available via Flatpak or Snap.'
    },
    {
        id: 'lazygit',
        name: 'LazyGit',
        description: 'Simple terminal UI for git commands',
        category: '开发：工具',
        iconUrl: si('git', '#F05032'),
        targets: {
            ubuntu: 'lazygit',
            debian: 'lazygit',
            arch: 'lazygit',
            fedora: 'lazygit',
            opensuse: 'lazygit',
            nix: 'lazygit'
        },
        unavailableReason: 'LazyGit is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'docker',
        name: 'Docker',
        description: 'Most popular container platform for app deployment',
        category: '开发：工具',
        iconUrl: si('docker', '#2496ED'),
        targets: {
            ubuntu: 'docker.io',
            debian: 'docker.io',
            arch: 'docker',
            fedora: 'docker',
            opensuse: 'docker',
            nix: 'docker',
            snap: 'docker'
        },
        unavailableReason: 'Docker is a system service and not available as a Flatpak.'
    },
    {
        id: 'podman',
        name: 'Podman',
        description: 'Rootless container engine, Docker alternative',
        category: '开发：工具',
        iconUrl: si('podman', '#892CA0'),
        targets: {
            ubuntu: 'podman',
            debian: 'podman',
            arch: 'podman',
            fedora: 'podman',
            opensuse: 'podman',
            nix: 'podman'
        },
        unavailableReason: 'Podman is a system package and not available via Flatpak or Snap.'
    },
    {
        id: 'kubectl',
        name: 'kubectl',
        description: 'Command-line tool for Kubernetes clusters',
        category: '开发：工具',
        iconUrl: si('kubernetes', '#326CE5'),
        targets: {
            arch: 'kubectl',
            fedora: 'kubernetes-client',
            opensuse: 'kubectl',
            nix: 'kubectl',
            snap: 'kubectl --classic'
        },
        unavailableReason: 'kubectl is not in official Ubuntu or Debian repos. Use Snap or install via [kubernetes.io](https://kubernetes.io/docs/tasks/tools/).'
    },
    {
        id: 'vagrant',
        name: 'Vagrant',
        description: 'Build and manage portable dev environments',
        category: '开发：工具',
        iconUrl: si('vagrant', '#1868F2'),
        targets: {
            ubuntu: 'vagrant',
            debian: 'vagrant',
            arch: 'vagrant',
            fedora: 'vagrant',
            opensuse: 'vagrant',
            nix: 'vagrant'
        },
        unavailableReason: 'Vagrant is a system package and not available via Flatpak or Snap.'
    },
    {
        id: 'virtualbox',
        name: 'VirtualBox',
        description: 'Free cross-platform virtual machine manager',
        category: '开发：工具',
        iconUrl: si('virtualbox', '#183A61'),
        targets: {
            ubuntu: 'virtualbox',
            debian: 'virtualbox',
            arch: 'virtualbox',
            fedora: 'VirtualBox',
            opensuse: 'virtualbox',
            nix: 'virtualbox'
        },
        unavailableReason: 'VirtualBox requires kernel modules and is not available via Flatpak or Snap.'
    },
    {
        id: 'gnomeboxes',
        name: 'GNOME Boxes',
        description: 'Simple virtual machine app for GNOME',
        category: '开发：工具',
        iconUrl: si('gnome', '#4A86CF'),
        targets: {
            ubuntu: 'gnome-boxes',
            debian: 'gnome-boxes',
            arch: 'gnome-boxes',
            fedora: 'gnome-boxes',
            opensuse: 'gnome-boxes',
            nix: 'gnome-boxes',
            flatpak: 'org.gnome.Boxes'
        },
        unavailableReason: 'GNOME Boxes is not available as a Snap package.'
    },
    {
        id: 'dbeaver',
        name: 'DBeaver',
        description: 'Universal database management tool',
        category: '开发：工具',
        iconUrl: si('dbeaver', '#382923'),
        targets: {
            arch: 'dbeaver',
            nix: 'dbeaver-bin',
            flatpak: 'io.dbeaver.DBeaverCommunity'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/en/apps/io.dbeaver.DBeaverCommunity) or download from [dbeaver.io/download](https://dbeaver.io/download/).'
    },
    {
        id: 'meld',
        name: 'Meld',
        description: 'Visual diff and merge tool for files',
        category: '开发：工具',
        iconUrl: 'https://meldmerge.org/images/meld.svg',
        targets: {
            ubuntu: 'meld',
            debian: 'meld',
            arch: 'meld',
            fedora: 'meld',
            opensuse: 'meld',
            nix: 'meld',
            flatpak: 'org.gnome.meld'
        },
        unavailableReason: 'Meld is not available as a Snap package.'
    },
    {
        id: 'wireshark',
        name: 'Wireshark',
        description: 'Network protocol analyzer and packet capture',
        category: '开发：工具',
        iconUrl: si('wireshark', '#1679A7'),
        targets: {
            ubuntu: 'wireshark',
            debian: 'wireshark',
            arch: 'wireshark-qt',
            fedora: 'wireshark',
            opensuse: 'wireshark',
            nix: 'wireshark',
            flatpak: 'org.wireshark.Wireshark'
        },
        unavailableReason: 'Wireshark is not available as a Snap package.'
    },
    {
        id: 'postman',
        name: 'Postman',
        description: 'Popular API testing and development platform',
        category: '开发：工具',
        iconUrl: si('postman', '#FF6C37'),
        targets: {
            arch: 'postman-bin',
            nix: 'postman',
            flatpak: 'com.getpostman.Postman',
            snap: 'postman'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/en/apps/com.getpostman.Postman)/[Snap](https://snapcraft.io/postman) or download from [postman.com/downloads](https://www.postman.com/downloads/).'
    },
    {
        id: 'bruno',
        name: 'Bruno',
        description: 'Offline-first open-source API client',
        category: '开发：工具',
        iconUrl: mdi('api', '#F4A62A'),
        targets: {
            arch: 'bruno-bin',
            nix: 'bruno',
            flatpak: 'com.usebruno.Bruno',
            snap: 'bruno'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/apps/com.usebruno.Bruno)/[Snap](https://snapcraft.io/bruno) or download from [usebruno.com](https://www.usebruno.com/downloads).'
    },
    {
        id: 'hoppscotch',
        name: 'Hoppscotch',
        description: 'Open-source API development ecosystem',
        category: '开发：工具',
        iconUrl: si('hoppscotch', '#47C0A7'),
        targets: {
            arch: 'hoppscotch-bin',
            nix: 'hoppscotch'
        },
        unavailableReason: 'Use [AUR](https://aur.archlinux.org/packages/hoppscotch-bin) or download from [hoppscotch.io](https://hoppscotch.io/download).'
    },
    {
        id: 'virtmanager',
        name: 'Virt Manager',
        description: 'Desktop app for managing KVM virtual machines',
        category: '开发：工具',
        iconUrl: si('qemu', '#FF6600'),
        targets: {
            ubuntu: 'virt-manager',
            debian: 'virt-manager',
            arch: 'virt-manager',
            fedora: 'virt-manager',
            opensuse: 'virt-manager',
            nix: 'virt-manager'
        },
        unavailableReason: 'Virt Manager requires system access and is not available via Flatpak or Snap.'
    },
    {
        id: 'imhex',
        name: 'ImHex',
        description: 'Feature-rich hex editor for reverse engineering',
        category: '开发：工具',
        iconUrl: mdi('hexadecimal', '#4FC1E8'),
        targets: {
            arch: 'imhex-bin',
            fedora: 'imhex',
            nix: 'imhex',
            flatpak: 'net.werwolv.ImHex'
        },
        unavailableReason: 'Not in most repos. Use [Flatpak](https://flathub.org/apps/net.werwolv.ImHex) or download from [imhex.werwolv.net](https://imhex.werwolv.net/).'
    },
    {
        id: 'cmake',
        name: 'CMake',
        description: 'Cross-platform build system generator',
        category: '开发：工具',
        iconUrl: vs('file-type-cmake'),
        targets: {
            ubuntu: 'cmake',
            debian: 'cmake',
            arch: 'cmake',
            fedora: 'cmake',
            opensuse: 'cmake',
            nix: 'cmake',
            snap: 'cmake --classic'
        },
        unavailableReason: 'CMake is not available as a Flatpak package.'
    },
    // TERMINAL
    {
        id: 'zsh',
        name: 'Zsh',
        description: 'Powerful shell with advanced completion features',
        category: '终端',
        iconUrl: si('zsh', '#F15A24'),
        targets: {
            ubuntu: 'zsh',
            debian: 'zsh',
            arch: 'zsh',
            fedora: 'zsh',
            opensuse: 'zsh',
            nix: 'zsh'
        },
        unavailableReason: 'Zsh is a system shell and not available via Flatpak or Snap.'
    },
    {
        id: 'ohmyzsh',
        name: 'Oh My Zsh',
        description: 'Zsh configuration framework with plugins/themes',
        category: '终端',
        iconUrl: si('zsh', '#F15A24'),
        targets: {},
        unavailableReason: 'Install via `sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`. See [ohmyzsh wiki](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH).'
    },
    {
        id: 'fish',
        name: 'Fish',
        description: 'Smart and user-friendly interactive shell',
        category: '终端',
        iconUrl: vs('file-type-shell'),
        targets: {
            ubuntu: 'fish',
            debian: 'fish',
            arch: 'fish',
            fedora: 'fish',
            opensuse: 'fish',
            nix: 'fish'
        },
        unavailableReason: 'Fish is a system shell and not available via Flatpak or Snap.'
    },
    {
        id: 'starship',
        name: 'Starship',
        description: 'Cross-shell customizable command prompt',
        category: '终端',
        iconUrl: si('starship', '#DD0B78'),
        targets: {
            ubuntu: 'starship',
            debian: 'starship',
            arch: 'starship',
            opensuse: 'starship',
            nix: 'starship'
        },
        unavailableReason: 'Not in Fedora repos. Install via `curl -sS https://starship.rs/install.sh | sh` or see [starship.rs](https://starship.rs/).'
    },
    {
        id: 'alacritty',
        name: 'Alacritty',
        description: 'Blazing fast GPU-accelerated terminal emulator',
        category: '终端',
        iconUrl: si('alacritty', '#F46D01'),
        targets: {
            ubuntu: 'alacritty',
            debian: 'alacritty',
            arch: 'alacritty',
            fedora: 'alacritty',
            opensuse: 'alacritty',
            nix: 'alacritty',
            snap: 'alacritty --classic'
        },
        unavailableReason: 'Alacritty is not available as a Flatpak package.'
    },
    {
        id: 'kitty',
        name: 'Kitty',
        description: 'Fast GPU-based terminal with advanced features',
        category: '终端',
        iconUrl: mdi('cat', '#ea5e5e'),
        targets: {
            ubuntu: 'kitty',
            debian: 'kitty',
            arch: 'kitty',
            fedora: 'kitty',
            opensuse: 'kitty',
            nix: 'kitty'
        },
        unavailableReason: 'Kitty is not available via Flatpak or Snap.'
    },
    {
        id: 'wezterm',
        name: 'WezTerm',
        description: 'GPU-accelerated terminal with Lua configuration',
        category: '终端',
        iconUrl: si('wezterm', '#4E49EE'),
        targets: {
            arch: 'wezterm',
            opensuse: 'wezterm',
            nix: 'wezterm',
            flatpak: 'org.wezfurlong.wezterm'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/en/apps/org.wezfurlong.wezterm) or follow instructions at [wezfurlong.org/wezterm/install](https://wezfurlong.org/wezterm/install/linux.html).'
    },
    {
        id: 'foot',
        name: 'Foot',
        description: 'Lightweight Wayland-native terminal emulator',
        category: '终端',
        iconUrl: si('wayland', '#FFBC00'),
        targets: {
            ubuntu: 'foot',
            debian: 'foot',
            arch: 'foot',
            fedora: 'foot',
            opensuse: 'foot',
            nix: 'foot'
        },
        unavailableReason: 'Foot is a Wayland-only terminal and not available via Flatpak or Snap.'
    },
    {
        id: 'ghostty',
        name: 'Ghostty',
        description: 'Native GPU-accelerated terminal by Mitchell Hashimoto',
        category: '终端',
        iconUrl: mdi('ghost-outline', '#6E56CF'),
        targets: {
            arch: 'ghostty',
            nix: 'ghostty'
        },
        unavailableReason: 'Not in most repos. See [official binaries](https://ghostty.org/docs/install/binary#linux-(official)) or build from source.'
    },
    // CLI TOOLS
    {
        id: 'btop',
        name: 'btop',
        description: 'Beautiful terminal resource monitor with graphs',
        category: '命令行工具',
        iconUrl: mdi('monitor-dashboard', '#FF6B6B'),
        targets: {
            ubuntu: 'btop',
            debian: 'btop',
            arch: 'btop',
            fedora: 'btop',
            opensuse: 'btop',
            nix: 'btop'
        },
        unavailableReason: 'btop is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'htop',
        name: 'htop',
        description: 'Interactive process viewer and system monitor',
        category: '命令行工具',
        iconUrl: mdi('chart-bar', '#4CE026'),
        targets: {
            ubuntu: 'htop',
            debian: 'htop',
            arch: 'htop',
            fedora: 'htop',
            opensuse: 'htop',
            nix: 'htop',
            snap: 'htop'
        },
        unavailableReason: 'htop is a CLI tool and not available as a Flatpak.'
    },
    {
        id: 'fastfetch',
        name: 'fastfetch',
        description: 'Fast neofetch-like system info tool',
        category: '命令行工具',
        iconUrl: mdi('console', '#57F287'),
        targets: {
            arch: 'fastfetch',
            fedora: 'fastfetch',
            opensuse: 'fastfetch',
            nix: 'fastfetch'
        },
        unavailableReason: 'Not in Ubuntu/Debian repos. Install from [github.com/fastfetch-cli/fastfetch](https://github.com/fastfetch-cli/fastfetch/releases).'
    },
    {
        id: 'neofetch',
        name: 'neofetch',
        description: 'Display system info with ASCII distro logo',
        category: '命令行工具',
        iconUrl: si('linux', '#FCC624'),
        targets: {
            ubuntu: 'neofetch',
            debian: 'neofetch',
            arch: 'neofetch',
            opensuse: 'neofetch',
            nix: 'neofetch'
        },
        unavailableReason: 'Archived project; removed from Fedora. CLI-only (no Flatpak/Snap).'
    },
    {
        id: 'eza',
        name: 'eza',
        description: 'Modern ls replacement with colors and icons',
        category: '命令行工具',
        iconUrl: mdi('format-list-bulleted', '#F9E64F'),
        targets: {
            ubuntu: 'eza',
            debian: 'eza',
            arch: 'eza',
            opensuse: 'eza',
            nix: 'eza'
        },
        unavailableReason: 'Unmaintained on Fedora; removed from repos. CLI-only (no Flatpak/Snap).'
    },
    {
        id: 'bat',
        name: 'bat',
        description: 'Cat clone with syntax highlighting and git integration',
        category: '命令行工具',
        iconUrl: mdi('file-code-outline', '#A6E22E'),
        targets: {
            ubuntu: 'bat',
            debian: 'bat',
            arch: 'bat',
            fedora: 'bat',
            opensuse: 'bat',
            nix: 'bat'
        },
        unavailableReason: 'bat is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'fzf',
        name: 'fzf',
        description: 'Lightning-fast command-line fuzzy finder',
        category: '命令行工具',
        iconUrl: mdi('magnify', '#FF0055'),
        targets: {
            ubuntu: 'fzf',
            debian: 'fzf',
            arch: 'fzf',
            fedora: 'fzf',
            opensuse: 'fzf',
            nix: 'fzf'
        },
        unavailableReason: 'fzf is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'ripgrep',
        name: 'ripgrep',
        description: 'Ultra-fast recursive search respecting .gitignore',
        category: '命令行工具',
        iconUrl: mdi('text-search', '#C0C0C0'),
        targets: {
            ubuntu: 'ripgrep',
            debian: 'ripgrep',
            arch: 'ripgrep',
            fedora: 'ripgrep',
            opensuse: 'ripgrep',
            nix: 'ripgrep'
        },
        unavailableReason: 'ripgrep is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'zoxide',
        name: 'zoxide',
        description: 'Smart cd that learns your habits',
        category: '命令行工具',
        iconUrl: mdi('folder-move-outline', '#FF9F43'),
        targets: {
            ubuntu: 'zoxide',
            debian: 'zoxide',
            arch: 'zoxide',
            fedora: 'zoxide',
            opensuse: 'zoxide',
            nix: 'zoxide'
        },
        unavailableReason: 'zoxide is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'tldr',
        name: 'tldr',
        description: 'Simplified community-driven man pages',
        category: '命令行工具',
        iconUrl: mdi('book-open-page-variant-outline', '#2D9CDB'),
        targets: {
            ubuntu: 'tldr',
            debian: 'tldr',
            arch: 'tldr',
            fedora: 'tldr',
            nix: 'tldr'
        },
        unavailableReason: 'tldr is a CLI tool and not available on openSUSE, Flatpak, or Snap.'
    },
    {
        id: 'wget',
        name: 'wget',
        description: 'Command-line file downloader for HTTP/FTP',
        category: '命令行工具',
        iconUrl: mdi('download', '#3FA75E'),
        targets: {
            ubuntu: 'wget',
            debian: 'wget',
            arch: 'wget',
            fedora: 'wget',
            opensuse: 'wget',
            nix: 'wget'
        },
        unavailableReason: 'wget is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'curl',
        name: 'curl',
        description: 'Command-line tool for transferring data via URLs',
        category: '命令行工具',
        iconUrl: si('curl', '#073551'),
        targets: {
            ubuntu: 'curl',
            debian: 'curl',
            arch: 'curl',
            fedora: 'curl',
            opensuse: 'curl',
            nix: 'curl'
        },
        unavailableReason: 'curl is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'aria2',
        name: 'aria2',
        description: 'Multi-protocol, multi-source download accelerator',
        category: '命令行工具',
        iconUrl: mdi('download-multiple', '#F94144'),
        targets: {
            ubuntu: 'aria2',
            debian: 'aria2',
            arch: 'aria2',
            fedora: 'aria2',
            opensuse: 'aria2',
            nix: 'aria2'
        },
        unavailableReason: 'aria2 is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'yazi',
        name: 'yazi',
        description: 'Blazing fast terminal file manager in Rust',
        category: '命令行工具',
        iconUrl: mdi('folder-table-outline', '#F3B329'),
        targets: {
            arch: 'yazi',
            opensuse: 'yazi',
            nix: 'yazi'
        },
        unavailableReason: 'Not in most repos. Install via [cargo](https://crates.io/crates/yazi) or download from [github.com/sxyazi/yazi](https://github.com/sxyazi/yazi/releases).'
    },
    {
        id: 'ranger',
        name: 'ranger',
        description: 'Vim-inspired terminal file manager with previews',
        category: '命令行工具',
        iconUrl: mdi('folder-key-outline', '#FFFFFF'),
        targets: {
            ubuntu: 'ranger',
            debian: 'ranger',
            arch: 'ranger',
            fedora: 'ranger',
            opensuse: 'ranger',
            nix: 'ranger'
        },
        unavailableReason: 'ranger is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'ncdu',
        name: 'ncdu',
        description: 'NCurses-based disk usage analyzer',
        category: '命令行工具',
        iconUrl: mdi('chart-arc', '#00ADEE'),
        targets: {
            ubuntu: 'ncdu',
            debian: 'ncdu',
            arch: 'ncdu',
            fedora: 'ncdu',
            opensuse: 'ncdu',
            nix: 'ncdu'
        },
        unavailableReason: 'ncdu is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'fd',
        name: 'fd',
        description: 'Simple, fast alternative to find command',
        category: '命令行工具',
        iconUrl: mdi('file-search-outline', '#56BE89'),
        targets: {
            ubuntu: 'fd-find',
            debian: 'fd-find',
            arch: 'fd',
            fedora: 'fd-find',
            opensuse: 'fd',
            nix: 'fd'
        },
        unavailableReason: 'fd is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'tmux',
        name: 'tmux',
        description: 'Terminal session manager and multiplexer',
        category: '命令行工具',
        iconUrl: si('tmux', '#1BB91F'),
        targets: {
            ubuntu: 'tmux',
            debian: 'tmux',
            arch: 'tmux',
            fedora: 'tmux',
            opensuse: 'tmux',
            nix: 'tmux'
        },
        unavailableReason: 'tmux is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'zellij',
        name: 'Zellij',
        description: 'Modern terminal multiplexer with layout system',
        category: '终端',
        iconUrl: mdi('view-split-vertical', '#A48CF4'),
        targets: {
            ubuntu: 'zellij',
            arch: 'zellij',
            fedora: 'zellij',
            opensuse: 'zellij',
            nix: 'zellij'
        },
        unavailableReason: 'Not in Debian repos. Install via `cargo install zellij` or see [zellij.dev](https://zellij.dev/documentation/installation.html).'
    },
    {
        id: 'superfile',
        name: 'Superfile',
        description: 'Modern terminal file manager with TUI',
        category: '命令行工具',
        iconUrl: mdi('folder-multiple', '#FFD93D'),
        targets: {
            arch: 'superfile',
            nix: 'superfile'
        },
        unavailableReason: 'Install via `go install` or see [superfile.dev](https://superfile.dev/getting-started/installation/).'
    },
    {
        id: 'rsync',
        name: 'rsync',
        description: 'Fast incremental file transfer and sync tool',
        category: '命令行工具',
        iconUrl: mdi('sync', '#2ECC71'),
        targets: {
            ubuntu: 'rsync',
            debian: 'rsync',
            arch: 'rsync',
            fedora: 'rsync',
            opensuse: 'rsync',
            nix: 'rsync'
        },
        unavailableReason: 'rsync is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'uv',
        name: 'uv',
        description: 'Fast Python package manager',
        category: '开发：编程语言',
        iconUrl: si('astral', '#5C4EE5'),
        targets: {
            arch: 'uv',
            nix: 'uv'
        },
        unavailableReason: 'Install via `curl -LsSf https://astral.sh/uv/install.sh | sh`. See [installation guide](https://docs.astral.sh/uv/getting-started/installation/).'
    },
    // MEDIA
    {
        id: 'vlc',
        name: 'VLC',
        description: 'Universal media player that plays any format',
        category: '媒体播放',
        iconUrl: si('vlcmediaplayer', '#FF8800'),
        targets: {
            ubuntu: 'vlc',
            debian: 'vlc',
            arch: 'vlc',
            fedora: 'vlc',
            opensuse: 'vlc',
            nix: 'vlc',
            flatpak: 'org.videolan.VLC',
            snap: 'vlc'
        }
    },
    {
        id: 'mpv',
        name: 'mpv',
        description: 'Lightweight and highly configurable media player',
        category: '媒体播放',
        iconUrl: si('mpv', '#691F69'),
        targets: {
            ubuntu: 'mpv',
            debian: 'mpv',
            arch: 'mpv',
            fedora: 'mpv',
            opensuse: 'mpv',
            nix: 'mpv',
            flatpak: 'io.mpv.Mpv',
            snap: 'mpv'
        }
    },
    {
        id: 'celluloid',
        name: 'Celluloid',
        description: 'Simple GTK frontend for the mpv player',
        category: '媒体播放',
        iconUrl: si('gnome', '#4A86CF'),
        targets: {
            ubuntu: 'celluloid',
            debian: 'celluloid',
            arch: 'celluloid',
            fedora: 'celluloid',
            opensuse: 'celluloid',
            nix: 'celluloid',
            flatpak: 'io.github.celluloid_player.Celluloid'
        },
        unavailableReason: 'Celluloid is not available as a Snap package.'
    },
    {
        id: 'strawberry',
        name: 'Strawberry',
        description: 'Music player for local audio collection',
        category: '媒体播放',
        iconUrl: 'https://www.strawberrymusicplayer.org/pictures/strawberry64.png',
        targets: {
            ubuntu: 'strawberry',
            debian: 'strawberry',
            arch: 'strawberry',
            fedora: 'strawberry',
            opensuse: 'strawberry',
            nix: 'strawberry',
            flatpak: 'org.strawberrymusicplayer.strawberry'
        },
        unavailableReason: 'Strawberry is not available as a Snap package.'
    },
    {
        id: 'spotify',
        name: 'Spotify',
        description: 'Popular music streaming service',
        category: '媒体播放',
        iconUrl: si('spotify', '#1DB954'),
        targets: {
            arch: 'spotify',
            nix: 'spotify',
            flatpak: 'com.spotify.Client',
            snap: 'spotify'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/apps/details/com.spotify.Client) or [Snap](https://snapcraft.io/spotify) or follow instructions at [spotify.com/download/linux](https://www.spotify.com/download/linux/).'
    },
    {
        id: 'audacity',
        name: 'Audacity',
        description: 'Free open-source audio editor and recorder',
        category: '媒体播放',
        iconUrl: si('audacity', '#0000CC'),
        targets: {
            ubuntu: 'audacity',
            debian: 'audacity',
            arch: 'audacity',
            fedora: 'audacity',
            opensuse: 'audacity',
            nix: 'audacity',
            flatpak: 'org.audacityteam.Audacity',
            snap: 'audacity'
        }
    },
    {
        id: 'kdenlive',
        name: 'Kdenlive',
        description: 'Powerful open-source video editor by KDE',
        category: '媒体播放',
        iconUrl: si('kdenlive', '#527EB2'),
        targets: {
            ubuntu: 'kdenlive',
            debian: 'kdenlive',
            arch: 'kdenlive',
            fedora: 'kdenlive',
            opensuse: 'kdenlive',
            nix: 'kdenlive',
            flatpak: 'org.kde.kdenlive',
            snap: 'kdenlive'
        }
    },
    {
        id: 'obs',
        name: 'OBS Studio',
        description: 'Industry-standard streaming and recording software',
        category: '媒体播放',
        iconUrl: si('obsstudio', '#A3A3A3'),
        targets: {
            ubuntu: 'obs-studio',
            debian: 'obs-studio',
            arch: 'obs-studio',
            fedora: 'obs-studio',
            opensuse: 'obs-studio',
            nix: 'obs-studio',
            flatpak: 'com.obsproject.Studio',
            snap: 'obs-studio'
        }
    },
    {
        id: 'ffmpeg',
        name: 'FFmpeg',
        description: 'Swiss army knife of video/audio processing',
        category: '媒体播放',
        iconUrl: si('ffmpeg', '#007808'),
        targets: {
            ubuntu: 'ffmpeg',
            debian: 'ffmpeg',
            arch: 'ffmpeg',
            fedora: 'ffmpeg',
            opensuse: 'ffmpeg',
            nix: 'ffmpeg'
        },
        unavailableReason: 'FFmpeg is a system library and not available via Flatpak or Snap.'
    },
    {
        id: 'handbrake',
        name: 'HandBrake',
        description: 'Open-source video transcoder for any format',
        category: '媒体播放',
        iconUrl: mdi('video-vintage', '#F83262'),
        targets: {
            ubuntu: 'handbrake',
            debian: 'handbrake',
            arch: 'handbrake',
            opensuse: 'handbrake',
            nix: 'handbrake',
            flatpak: 'fr.handbrake.ghb',
            snap: 'handbrake-jz'
        },
        unavailableReason: 'HandBrake is not in official Fedora repos. Use [Flatpak](https://flathub.org/apps/details/fr.handbrake.ghb) or [Snap](https://snapcraft.io/handbrake-jz) instead.'
    },
    {
        id: 'stremio',
        name: 'Stremio',
        description: 'Modern media center with streaming addons',
        category: '媒体播放',
        iconUrl: si('stremio', '#8A5AAB'),
        targets: {
            arch: 'stremio',
            flatpak: 'com.stremio.Stremio'
        },
        unavailableReason: 'Only available via [AUR](https://aur.archlinux.org/packages/stremio) or [Flatpak](https://flathub.org/apps/details/com.stremio.Stremio), see [stremio.com/downloads](https://www.stremio.com/downloads) for more info.'
    },
    {
        id: 'kodi',
        name: 'Kodi',
        description: 'Open-source home theater and media center',
        category: '媒体播放',
        iconUrl: si('kodi', '#17B2E7'),
        targets: {
            ubuntu: 'kodi',
            debian: 'kodi',
            arch: 'kodi',
            fedora: 'kodi',
            opensuse: 'kodi',
            nix: 'kodi',
            flatpak: 'tv.kodi.Kodi',
            snap: 'kodi'
        }
    },
    {
        id: 'haruna',
        name: 'Haruna',
        description: 'Modern Qt/QML video player powered by mpv',
        category: '媒体播放',
        iconUrl: si('hevy', '#A3A3A3'),
        targets: {
            ubuntu: 'haruna',
            debian: 'haruna',
            arch: 'haruna',
            fedora: 'haruna',
            opensuse: 'haruna',
            nix: 'haruna',
            flatpak: 'org.kde.haruna',
            snap: 'haruna'
        }
    },
    {
        id: 'shortwave',
        name: 'Shortwave',
        description: 'Listen to internet radio stations worldwide',
        category: '媒体播放',
        iconUrl: si('playerfm', '#478ECC'),
        targets: {
            ubuntu: 'shortwave',
            debian: 'shortwave',
            arch: 'shortwave',
            fedora: 'shortwave',
            opensuse: 'shortwave',
            nix: 'shortwave',
            flatpak: 'de.haeckerfelix.Shortwave',
            snap: 'shortwave'
        }
    },
    // CREATIVE
    {
        id: 'blender',
        name: 'Blender',
        description: 'Industry-grade 3D creation suite',
        category: '创意设计',
        iconUrl: si('blender', '#E87D0D'),
        targets: {
            ubuntu: 'blender',
            debian: 'blender',
            arch: 'blender',
            fedora: 'blender',
            opensuse: 'blender',
            nix: 'blender',
            flatpak: 'org.blender.Blender',
            snap: 'blender --classic'
        }
    },
    {
        id: 'gimp',
        name: 'GIMP',
        description: 'Powerful free image editor, Photoshop alternative',
        category: '创意设计',
        iconUrl: si('gimp', '#5C5543'),
        targets: {
            ubuntu: 'gimp',
            debian: 'gimp',
            arch: 'gimp',
            fedora: 'gimp',
            opensuse: 'gimp',
            nix: 'gimp',
            flatpak: 'org.gimp.GIMP',
            snap: 'gimp'
        }
    },
    {
        id: 'inkscape',
        name: 'Inkscape',
        description: 'Professional vector graphics editor',
        category: '创意设计',
        iconUrl: 'https://media.inkscape.org/static/images/inkscape-logo.svg',
        targets: {
            ubuntu: 'inkscape',
            debian: 'inkscape',
            arch: 'inkscape',
            fedora: 'inkscape',
            opensuse: 'inkscape',
            nix: 'inkscape',
            flatpak: 'org.inkscape.Inkscape',
            snap: 'inkscape'
        }
    },
    {
        id: 'krita',
        name: 'Krita',
        description: 'Professional digital painting application',
        category: '创意设计',
        iconUrl: si('krita', '#337FCC'),
        targets: {
            ubuntu: 'krita',
            debian: 'krita',
            arch: 'krita',
            fedora: 'krita',
            opensuse: 'krita',
            nix: 'krita',
            flatpak: 'org.kde.krita',
            snap: 'krita'
        }
    },
    {
        id: 'darktable',
        name: 'Darktable',
        description: 'Professional photography workflow application',
        category: '创意设计',
        iconUrl: 'https://www.svgrepo.com/show/378112/darktable.svg',
        targets: {
            ubuntu: 'darktable',
            debian: 'darktable',
            arch: 'darktable',
            fedora: 'darktable',
            opensuse: 'darktable',
            nix: 'darktable',
            flatpak: 'org.darktable.Darktable',
            snap: 'darktable'
        }
    },
    {
        id: 'freecad',
        name: 'FreeCAD',
        description: 'Open-source parametric 3D CAD modeler',
        category: '创意设计',
        iconUrl: si('freecad', '#CB333B'),
        targets: {
            ubuntu: 'freecad',
            debian: 'freecad',
            arch: 'freecad',
            fedora: 'freecad',
            opensuse: 'freecad',
            nix: 'freecad',
            flatpak: 'org.freecad.FreeCAD',
            snap: 'freecad'
        }
    },
    {
        id: 'kicad',
        name: 'KiCad',
        description: 'Professional PCB and schematic design suite',
        category: '创意设计',
        iconUrl: si('kicad', '#314CB6'),
        targets: {
            ubuntu: 'kicad',
            debian: 'kicad',
            arch: 'kicad',
            fedora: 'kicad',
            opensuse: 'kicad',
            nix: 'kicad',
            flatpak: 'org.kicad.KiCad',
            snap: 'kicad'
        }
    },
    {
        id: 'cura',
        name: 'UltiMaker Cura',
        description: 'Popular 3D printer slicing application',
        category: '创意设计',
        iconUrl: 'https://dl.flathub.org/media/com/ultimaker/cura.desktop/9eeed6dfd5a5ec2c8e5c8917012db5ad/icons/128x128/com.ultimaker.cura.desktop.png',
        targets: {
            ubuntu: 'cura',
            debian: 'cura',
            arch: 'cura',
            fedora: 'cura',
            opensuse: 'cura',
            nix: 'cura',
            flatpak: 'com.ultimaker.cura',
            snap: 'cura-slicer'
        }
    },
    {
        id: 'orcaslicer',
        name: 'OrcaSlicer',
        description: 'Advanced 3D printer slicer based on BambuStudio',
        category: '创意设计',
        iconUrl: mdi('printer-3d-nozzle', '#00AE42'),
        targets: {
            arch: 'orcaslicer-bin',
            nix: 'orcaslicer',
            flatpak: 'net.orcaslicer.OrcaSlicer'
        },
        unavailableReason: 'Use [Flatpak](https://flathub.org/apps/net.orcaslicer.OrcaSlicer) or AppImage from [GitHub](https://github.com/SoftFever/OrcaSlicer/releases).'
    },
    {
        id: 'davinci-resolve',
        name: 'DaVinci Resolve',
        description: 'Professional video editing, color grading, and VFX software',
        category: '创意设计',
        iconUrl: si('davinciresolve', '#E52222'),
        targets: {
            arch: 'davinci-resolve',
            nix: 'davinci-resolve'
        },
        unavailableReason: 'Not in most official repos. Use [AUR](https://aur.archlinux.org/packages/davinci-resolve) or download from [blackmagicdesign.com](https://www.blackmagicdesign.com/products/davinciresolve).'
    },
    // GAMING
    {
        id: 'steam',
        name: 'Steam',
        description: 'Largest PC gaming platform and store',
        category: '游戏',
        iconUrl: si('steam', '#00ADEE'),
        targets: {
            ubuntu: 'steam',
            debian: 'steam-installer',
            arch: 'steam',
            fedora: 'steam',
            opensuse: 'steam',
            nix: 'steam',
            flatpak: 'com.valvesoftware.Steam',
            snap: 'steam'
        }
    },
    {
        id: 'lutris',
        name: 'Lutris',
        description: 'Open gaming platform for all your games',
        category: '游戏',
        iconUrl: si('lutris', '#FF8F00'),
        targets: {
            ubuntu: 'lutris',
            debian: 'lutris',
            arch: 'lutris',
            fedora: 'lutris',
            opensuse: 'lutris',
            nix: 'lutris',
            flatpak: 'net.lutris.Lutris'
        },
        unavailableReason: 'Lutris is not available as a Snap package.'
    },
    {
        id: 'heroic',
        name: 'Heroic',
        description: 'Open-source Epic Games and GOG launcher',
        category: '游戏',
        iconUrl: si('heroicgameslauncher', '#7B62E8'),
        targets: {
            arch: 'heroic-games-launcher-bin',
            nix: 'heroic',
            flatpak: 'com.heroicgameslauncher.hgl'
        },
        unavailableReason: 'Only available via [AUR](https://aur.archlinux.org/packages/heroic-games-launcher-bin) or [Flatpak](https://flathub.org/apps/details/com.heroicgameslauncher.hgl). see [heroicgameslauncher.com](https://heroicgameslauncher.com/downloads) for more info.'
    },
    {
        id: 'prism',
        name: 'Prism Launcher',
        description: 'Open-source Minecraft launcher with mod support',
        category: '游戏',
        iconUrl: 'https://raw.githubusercontent.com/PrismLauncher/PrismLauncher/develop/program_info/org.prismlauncher.PrismLauncher.logo.svg',
        targets: {
            arch: 'prismlauncher',
            nix: 'prismlauncher',
            flatpak: 'org.prismlauncher.PrismLauncher'
        },
        unavailableReason: 'Only available via [AUR](https://aur.archlinux.org/packages/prismlauncher) or [Flatpak](https://flathub.org/apps/details/org.prismlauncher.PrismLauncher). see [prismlauncher.org](https://prismlauncher.org/download/) for more info.'
    },
    {
        id: 'retroarch',
        name: 'RetroArch',
        description: 'All-in-one emulator frontend for retro gaming',
        category: '游戏',
        iconUrl: si('retroarch', '#A0A0A0'),
        targets: {
            ubuntu: 'retroarch',
            debian: 'retroarch',
            arch: 'retroarch',
            fedora: 'retroarch',
            opensuse: 'retroarch',
            nix: 'retroarch',
            flatpak: 'org.libretro.RetroArch',
            snap: 'retroarch'
        }
    },
    {
        id: 'mangohud',
        name: 'MangoHud',
        description: 'Vulkan/OpenGL overlay for monitoring FPS and hardware',
        category: '游戏',
        iconUrl: si('gamejolt', '#FF9900'),
        targets: {
            ubuntu: 'mangohud',
            debian: 'mangohud',
            arch: 'mangohud',
            fedora: 'mangohud',
            opensuse: 'mangohud',
            nix: 'mangohud'
        },
        unavailableReason: 'MangoHud is a system overlay and not available via Flatpak or Snap.'
    },
    {
        id: 'gamemode',
        name: 'GameMode',
        description: 'Optimizes Linux system performance for gaming',
        category: '游戏',
        iconUrl: 'https://www.svgrepo.com/show/411187/game.svg',
        targets: {
            ubuntu: 'gamemode',
            debian: 'gamemode',
            arch: 'gamemode',
            fedora: 'gamemode',
            opensuse: 'gamemode',
            nix: 'gamemode'
        },
        unavailableReason: 'GameMode is a system service and not available via Flatpak or Snap.'
    },
    {
        id: 'protonup',
        name: 'ProtonUp-Qt',
        description: 'Install and manage Proton-GE for Steam games',
        category: '游戏',
        iconUrl: si('protondb', '#8B0000'),
        targets: {
            arch: 'protonup-qt-bin',
            nix: 'protonup-qt',
            flatpak: 'net.davidotek.pupgui2'
        },
        unavailableReason: 'Only available via [AUR](https://aur.archlinux.org/packages/protonup-qt-bin) or [Flatpak](https://flathub.org/apps/net.davidotek.pupgui2).'
    },
    {
        id: 'antimicrox',
        name: 'AntiMicroX',
        description: 'Map gamepad buttons to keyboard/mouse actions',
        category: '游戏',
        iconUrl: mdi('controller', '#007BFF'),
        targets: {
            ubuntu: 'antimicrox',
            debian: 'antimicrox',
            arch: 'antimicrox',
            fedora: 'antimicrox',
            opensuse: 'antimicrox',
            nix: 'antimicrox',
            flatpak: 'io.github.antimicrox.antimicrox'
        },
        unavailableReason: 'Not available as a Snap package.'
    },
    {
        id: 'goverlay',
        name: 'GOverlay',
        description: 'GUI for MangoHud, vkBasalt, and ReplaySorcery',
        category: '游戏',
        iconUrl: mdi('dock-window', '#6366F1'),
        targets: {
            ubuntu: 'goverlay',
            debian: 'goverlay',
            arch: 'goverlay',
            fedora: 'goverlay',
            opensuse: 'goverlay',
            nix: 'goverlay',
            flatpak: 'io.github.benjamimgois.goverlay'
        },
        unavailableReason: 'Not available as a Snap package.'
    },
    // OFFICE
    {
        id: 'libreoffice',
        name: 'LibreOffice',
        description: 'Full-featured open-source office suite',
        category: '办公软件',
        iconUrl: si('libreoffice', '#0369A1'),
        targets: {
            ubuntu: 'libreoffice',
            debian: 'libreoffice',
            arch: 'libreoffice-fresh',
            fedora: 'libreoffice',
            opensuse: 'libreoffice',
            nix: 'libreoffice',
            flatpak: 'org.libreoffice.LibreOffice',
            snap: 'libreoffice'
        }
    },
    {
        id: 'onlyoffice',
        name: 'OnlyOffice',
        description: 'Modern office suite with MS Office compatibility',
        category: '办公软件',
        iconUrl: si('onlyoffice', '#FF6F3D'),
        targets: {
            arch: 'onlyoffice-bin',
            nix: 'onlyoffice-bin',
            flatpak: 'org.onlyoffice.desktopeditors',
            snap: 'onlyoffice-desktopeditors'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/apps/details/org.onlyoffice.desktopeditors) or [Snap](https://snapcraft.io/onlyoffice-desktopeditors) or download from [onlyoffice.com/desktop](https://www.onlyoffice.com/desktop.aspx).'
    },
    {
        id: 'obsidian',
        name: 'Obsidian',
        description: 'Popular Markdown-based knowledge management app',
        category: '办公软件',
        iconUrl: si('obsidian', '#7C3AED'),
        targets: {
            arch: 'obsidian',
            nix: 'obsidian',
            flatpak: 'md.obsidian.Obsidian',
            snap: 'obsidian --classic'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/apps/details/md.obsidian.Obsidian) or [Snap](https://snapcraft.io/obsidian) or download from [obsidian.md/download](https://obsidian.md/download).'
    },
    {
        id: 'logseq',
        name: 'Logseq',
        description: 'Open-source outliner for knowledge management',
        category: '办公软件',
        iconUrl: si('logseq', '#06D5D5'),
        targets: {
            arch: 'logseq-desktop-bin',
            nix: 'logseq',
            flatpak: 'com.logseq.Logseq',
            snap: 'logseq'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/apps/details/com.logseq.Logseq) or [Snap](https://snapcraft.io/logseq) or download from [logseq.com](https://logseq.com/downloads).'
    },
    {
        id: 'joplin',
        name: 'Joplin',
        description: 'Open-source note-taking with sync and encryption',
        category: '办公软件',
        iconUrl: si('joplin', '#1471B7'),
        targets: {
            arch: 'joplin-appimage',
            nix: 'joplin-desktop',
            flatpak: 'net.cozic.joplin_desktop',
            snap: 'joplin-desktop'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/apps/details/net.cozic.joplin_desktop) or [Snap](https://snapcraft.io/joplin-desktop) or install from [joplinapp.org](https://joplinapp.org/help/install/).'
    },
    {
        id: 'okular',
        name: 'Okular',
        description: 'Universal document viewer by KDE',
        category: '办公软件',
        iconUrl: si('kde', '#338BDB'),
        targets: {
            ubuntu: 'okular',
            debian: 'okular',
            arch: 'okular',
            fedora: 'okular',
            opensuse: 'okular',
            nix: 'okular',
            flatpak: 'org.kde.okular',
            snap: 'okular'
        }
    },
    {
        id: 'zathura',
        name: 'Zathura',
        description: 'Vim-style minimal PDF/document viewer',
        category: '办公软件',
        iconUrl: 'https://raw.githubusercontent.com/TrixieUA/MoreWaita-copr-trixieua/e5bed029d63d4c14f1aba811152f3f0bf473a4bc/scalable/apps/zathura.svg',
        targets: {
            ubuntu: 'zathura',
            debian: 'zathura',
            arch: 'zathura',
            fedora: 'zathura',
            opensuse: 'zathura',
            nix: 'zathura'
        },
        unavailableReason: 'Zathura is not available via Flatpak or Snap.'
    },
    {
        id: 'calibre',
        name: 'Calibre',
        description: 'Complete e-book library management solution',
        category: '办公软件',
        iconUrl: si('calibreweb', '#ECA315'),
        targets: {
            ubuntu: 'calibre',
            debian: 'calibre',
            arch: 'calibre',
            fedora: 'calibre',
            opensuse: 'calibre',
            nix: 'calibre',
            flatpak: 'com.calibre_ebook.calibre'
        },
        unavailableReason: 'Calibre is not available as a Snap package.'
    },
    {
        id: 'xournalpp',
        name: 'Xournal++',
        description: 'Handwriting and PDF annotation app',
        category: '办公软件',
        iconUrl: vs('file-type-pdf2'),
        targets: {
            ubuntu: 'xournalpp',
            debian: 'xournalpp',
            arch: 'xournalpp',
            fedora: 'xournalpp',
            opensuse: 'xournalpp',
            nix: 'xournalpp',
            flatpak: 'com.github.xournalpp.xournalpp'
        },
        unavailableReason: 'Xournal++ is not available as a Snap package.'
    },
    {
        id: 'zotero',
        name: 'Zotero',
        description: 'Research reference manager and citation tool',
        category: '办公软件',
        iconUrl: si('zotero', '#CC2936'),
        targets: {
            arch: 'zotero-bin',
            opensuse: 'zotero',
            nix: 'zotero',
            flatpak: 'org.zotero.Zotero',
            snap: 'zotero-snap'
        },
        unavailableReason: 'Not in official Ubuntu/Debian repos. Use [Flatpak](https://flathub.org/apps/org.zotero.Zotero)/[Snap](https://snapcraft.io/zotero-snap) or download from [zotero.org](https://www.zotero.org/download/).'
    },
    {
        id: 'trilium',
        name: 'Trilium Notes',
        description: 'Hierarchical note-taking app with powerful features',
        category: '办公软件',
        iconUrl: si('trilium', '#51A52D'),
        targets: {
            arch: 'trilium-bin',
            nix: 'trilium-desktop',
            flatpak: 'com.github.zadam.trilium'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/apps/com.github.zadam.trilium) or download from [github.com/zadam/trilium](https://github.com/zadam/trilium/releases).'
    },
    // VPN & NETWORK
    {
        id: 'protonvpn',
        name: 'Proton VPN',
        description: 'Secure VPN by the makers of ProtonMail',
        category: 'VPN 与网络',
        iconUrl: si('protonvpn', '#6D4AFF'),
        targets: {
            arch: 'proton-vpn-gtk-app',
            nix: 'protonvpn-gui',
            flatpak: 'com.protonvpn.www'
        },
        unavailableReason: 'Not in official repos. Use Flatpak or follow instructions at [protonvpn.com/support/linux-vpn-setup](https://protonvpn.com/support/linux-vpn-setup/).'
    },
    {
        id: 'mullvad',
        name: 'Mullvad VPN',
        description: 'Privacy-focused VPN with no-logging policy',
        category: 'VPN 与网络',
        iconUrl: si('mullvad', '#44AD4D'),
        targets: {
            arch: 'mullvad-vpn-bin',
            nix: 'mullvad-vpn'
        },
        unavailableReason: 'Not in official repos. Use [AUR](https://aur.archlinux.org/packages/mullvad-vpn-bin) or see [official install guide](https://mullvad.net/en/help/install-mullvad-app-linux).'
    },
    {
        id: 'tailscale',
        name: 'Tailscale',
        description: 'Zero-config mesh VPN using WireGuard',
        category: 'VPN 与网络',
        iconUrl: si('tailscale', '#797878'),
        targets: {
            ubuntu: 'tailscale',
            arch: 'tailscale',
            fedora: 'tailscale',
            opensuse: 'tailscale',
            nix: 'tailscale'
        },
        unavailableReason: 'Not in Debian repos. Follow instructions at [tailscale.com/download/linux](https://tailscale.com/download/linux).'
    },
    {
        id: 'wireguard',
        name: 'WireGuard',
        description: 'Fast, modern, secure VPN tunnel protocol',
        category: 'VPN 与网络',
        iconUrl: si('wireguard', '#88171A'),
        targets: {
            ubuntu: 'wireguard',
            debian: 'wireguard',
            arch: 'wireguard-tools',
            fedora: 'wireguard-tools',
            opensuse: 'wireguard-tools',
            nix: 'wireguard-tools'
        },
        unavailableReason: 'WireGuard is a kernel module and not available via Flatpak or Snap.'
    },
    {
        id: 'openvpn',
        name: 'OpenVPN',
        description: 'Full-featured SSL VPN solution',
        category: 'VPN 与网络',
        iconUrl: si('openvpn', '#EA7E20'),
        targets: {
            ubuntu: 'openvpn',
            debian: 'openvpn',
            arch: 'openvpn',
            fedora: 'openvpn',
            opensuse: 'openvpn',
            nix: 'openvpn'
        },
        unavailableReason: 'OpenVPN is a system package and not available via Flatpak or Snap.'
    },
    {
        id: 'nmap',
        name: 'Nmap',
        description: 'Network discovery and security auditing tool',
        category: 'VPN 与网络',
        iconUrl: 'https://raw.githubusercontent.com/bwks/vendor-icons-svg/702f2ac88acc71759ce623bc5000a596195e9db3/nmap-logo.svg',
        targets: {
            ubuntu: 'nmap',
            debian: 'nmap',
            arch: 'nmap',
            fedora: 'nmap',
            opensuse: 'nmap',
            nix: 'nmap'
        },
        unavailableReason: 'Nmap is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'openssh',
        name: 'OpenSSH',
        description: 'Secure remote login and file transfer via SSH',
        category: 'VPN 与网络',
        iconUrl: mdi('ssh', '#F5A623'),
        targets: {
            ubuntu: 'openssh-client',
            debian: 'openssh-client',
            arch: 'openssh',
            fedora: 'openssh-clients',
            opensuse: 'openssh',
            nix: 'openssh'
        },
        unavailableReason: 'OpenSSH is a system package and not available via Flatpak or Snap.'
    },
    // SECURITY
    {
        id: 'bitwarden',
        name: 'Bitwarden',
        description: 'Open-source password manager with cloud sync',
        category: '安全工具',
        iconUrl: si('bitwarden', '#175DDC'),
        targets: {
            arch: 'bitwarden',
            nix: 'bitwarden',
            flatpak: 'com.bitwarden.desktop',
            snap: 'bitwarden'
        },
        unavailableReason: 'Not in official repos. Use [Flatpak](https://flathub.org/apps/details/com.bitwarden.desktop) or [Snap](https://snapcraft.io/bitwarden) or download from [bitwarden.com/download](https://bitwarden.com/download/).'
    },
    {
        id: 'keepassxc',
        name: 'KeePassXC',
        description: 'Secure offline-first password manager',
        category: '安全工具',
        iconUrl: si('keepassxc', '#65B726'),
        targets: {
            ubuntu: 'keepassxc',
            debian: 'keepassxc',
            arch: 'keepassxc',
            fedora: 'keepassxc',
            opensuse: 'keepassxc',
            nix: 'keepassxc',
            flatpak: 'org.keepassxc.KeePassXC',
            snap: 'keepassxc'
        }
    },
    {
        id: 'veracrypt',
        name: 'VeraCrypt',
        description: 'Free disk encryption based on TrueCrypt',
        category: '安全工具',
        iconUrl: 'https://raw.githubusercontent.com/PapirusDevelopmentTeam/papirus-icon-theme/3390a630b535d1c1ccca04881b3959e262264116/Papirus/64x64/apps/veracrypt.svg',
        targets: {
            ubuntu: 'veracrypt',
            arch: 'veracrypt',
            fedora: 'veracrypt',
            opensuse: 'veracrypt',
            nix: 'veracrypt'
        },
        unavailableReason: 'Not in Debian repos. Download from [veracrypt.fr/en/Downloads](https://veracrypt.fr/en/Downloads.html).'
    },
    {
        id: 'gnupg',
        name: 'GnuPG',
        description: 'GNU Privacy Guard for encryption and signing',
        category: '安全工具',
        iconUrl: si('gnuprivacyguard', '#0093DD'),
        targets: {
            ubuntu: 'gnupg',
            debian: 'gnupg',
            arch: 'gnupg',
            fedora: 'gnupg2',
            opensuse: 'gnupg',
            nix: 'gnupg'
        },
        unavailableReason: 'GnuPG is a system package and not available via Flatpak or Snap.'
    },
    {
        id: 'firejail',
        name: 'Firejail',
        description: 'SUID sandbox for restricting app environments',
        category: '安全工具',
        iconUrl: 'https://linux.fi/w/images/1/1f/Firejail-logo.png',
        targets: {
            ubuntu: 'firejail',
            debian: 'firejail',
            arch: 'firejail',
            fedora: 'firejail',
            opensuse: 'firejail',
            nix: 'firejail'
        },
        unavailableReason: 'Firejail is a system security tool and not available via Flatpak or Snap.'
    },
    {
        id: 'clamav',
        name: 'ClamAV',
        description: 'Open-source antivirus engine for malware detection',
        category: '安全工具',
        iconUrl: 'https://raw.githubusercontent.com/ivangabriele/clamav-desktop/f60bfafdd23bb455f0468abe5f877d2b76eddfba/assets/icons/icon.svg',
        targets: {
            ubuntu: 'clamav',
            debian: 'clamav',
            arch: 'clamav',
            fedora: 'clamav',
            opensuse: 'clamav',
            nix: 'clamav'
        },
        unavailableReason: 'ClamAV is a system package and not available via Flatpak or Snap.'
    },
    // FILE SHARING
    {
        id: 'syncthing',
        name: 'Syncthing',
        description: 'Decentralized peer-to-peer file synchronization',
        category: '文件共享',
        iconUrl: si('syncthing', '#0CB7E4'),
        targets: {
            ubuntu: 'syncthing',
            debian: 'syncthing',
            arch: 'syncthing',
            fedora: 'syncthing',
            opensuse: 'syncthing',
            nix: 'syncthing',
            flatpak: 'me.kozec.syncthingtk'
        },
        unavailableReason: 'Syncthing GTK is available on [Flatpak](https://flathub.org/apps/me.kozec.syncthingtk). Not available as Snap.'
    },
    {
        id: 'qbittorrent',
        name: 'qBittorrent',
        description: 'Open-source BitTorrent client, uTorrent alternative',
        category: '文件共享',
        iconUrl: si('qbittorrent', '#2F67BA'),
        targets: {
            ubuntu: 'qbittorrent',
            debian: 'qbittorrent',
            arch: 'qbittorrent',
            fedora: 'qbittorrent',
            opensuse: 'qbittorrent',
            nix: 'qbittorrent',
            flatpak: 'org.qbittorrent.qBittorrent',
            snap: 'qbittorrent-desktop-tak'
        }
    },
    {
        id: 'transmission',
        name: 'Transmission',
        description: 'Lightweight BitTorrent client',
        category: '文件共享',
        iconUrl: si('transmission', '#D70000'),
        targets: {
            ubuntu: 'transmission',
            debian: 'transmission',
            arch: 'transmission-gtk',
            fedora: 'transmission',
            opensuse: 'transmission',
            nix: 'transmission_4-gtk',
            flatpak: 'com.transmissionbt.Transmission'
        },
        unavailableReason: 'Transmission is not available as a Snap package. Use [Flatpak](https://flathub.org/apps/com.transmissionbt.Transmission).'
    },
    {
        id: 'localsend',
        name: 'LocalSend',
        description: 'Cross-platform AirDrop alternative for local sharing',
        category: '文件共享',
        iconUrl: si('localsend', '#FCA73C'),
        targets: {
            arch: 'localsend-bin',
            nix: 'localsend',
            flatpak: 'org.localsend.localsend_app'
        },
        unavailableReason: 'Only available via [AUR](https://aur.archlinux.org/packages/localsend-bin) or [Flatpak](https://flathub.org/apps/org.localsend.localsend_app). Download from [localsend.org](https://localsend.org/download).'
    },
    {
        id: 'filezilla',
        name: 'FileZilla',
        description: 'Cross-platform FTP, FTPS and SFTP client',
        category: '文件共享',
        iconUrl: si('filezilla', '#BF0000'),
        targets: {
            ubuntu: 'filezilla',
            debian: 'filezilla',
            arch: 'filezilla',
            fedora: 'filezilla',
            opensuse: 'filezilla',
            nix: 'filezilla',
            flatpak: 'org.filezillaproject.Filezilla'
        },
        unavailableReason: 'FileZilla is not available as a Snap package.'
    },
    {
        id: 'nextcloud',
        name: 'Nextcloud',
        description: 'Self-hosted cloud storage sync client',
        category: '文件共享',
        iconUrl: si('nextcloud', '#0082C9'),
        targets: {
            ubuntu: 'nextcloud-desktop',
            debian: 'nextcloud-desktop',
            arch: 'nextcloud-client',
            fedora: 'nextcloud-client',
            opensuse: 'nextcloud-desktop',
            nix: 'nextcloud-client',
            flatpak: 'com.nextcloud.desktopclient.nextcloud',
            snap: 'nextcloud-desktop-client'
        }
    },
    {
        id: 'dropbox',
        name: 'Dropbox',
        description: 'Popular cloud file storage and sync service',
        category: '文件共享',
        iconUrl: si('dropbox', '#0061FF'),
        targets: {
            arch: 'dropbox',
            nix: 'dropbox',
            flatpak: 'com.dropbox.Client'
        },
        unavailableReason: 'Only available via [AUR](https://aur.archlinux.org/packages/dropbox) or [Flatpak](https://flathub.org/apps/com.dropbox.Client). See [dropbox.com/install-linux](https://www.dropbox.com/install-linux) for other methods.'
    },
    {
        id: 'abdownloadmanager',
        name: 'AB Download Manager',
        description: 'Modern download manager with browser integration',
        category: '文件共享',
        iconUrl: mdi('download-box', '#4CAF50'),
        targets: {
            arch: 'ab-download-manager-bin'
        },
        unavailableReason: 'Only available via [AUR](https://aur.archlinux.org/packages/ab-download-manager-bin). Download from [abdownloadmanager.com](https://abdownloadmanager.com/).'
    },
    {
        id: 'fdm',
        name: 'Free Download Manager',
        description: 'Feature-rich download manager with BitTorrent',
        category: '文件共享',
        iconUrl: mdi('progress-download', '#3481FE'),
        targets: {
            arch: 'freedownloadmanager-bin'
        },
        unavailableReason: 'Not in official repos. See [freedownloadmanager.org](https://www.freedownloadmanager.org/) for other methods.'
    },
    // SYSTEM
    {
        id: 'gparted',
        name: 'GParted',
        description: 'GNOME partition editor for disk management',
        category: '系统工具',
        iconUrl: si('gnome', '#E95420'),
        targets: {
            ubuntu: 'gparted',
            debian: 'gparted',
            arch: 'gparted',
            fedora: 'gparted',
            opensuse: 'gparted',
            nix: 'gparted'
        },
        unavailableReason: 'GParted requires root access and is not available via Flatpak or Snap.'
    },
    {
        id: 'kde-partition-manager',
        name: 'KDE Partition Manager',
        description: 'Utility for management of disk devices, partitions and file systems',
        category: '系统工具',
        iconUrl: si('kde', '#1D99F3'),
        targets: {
            ubuntu: 'partitionmanager',
            debian: 'partitionmanager',
            arch: 'partitionmanager',
            fedora: 'kde-partitionmanager',
            opensuse: 'partitionmanager',
            nix: 'partitionmanager',
            flatpak: 'org.kde.partitionmanager'
        },
        unavailableReason: 'Not available as a Snap package.'
    },
    {
        id: 'kdeconnect',
        name: 'KDE Connect',
        description: 'Connect your phone to your Linux desktop',
        category: '系统工具',
        iconUrl: si('kde', '#338BDB'),
        targets: {
            ubuntu: 'kdeconnect',
            debian: 'kdeconnect',
            arch: 'kdeconnect',
            fedora: 'kdeconnectd',
            opensuse: 'kdeconnect-kde',
            nix: 'kdeconnect'
        },
        unavailableReason: 'KDE Connect is not available via Flatpak or Snap.'
    },
    {
        id: 'timeshift',
        name: 'Timeshift',
        description: 'System snapshot and restore tool like Time Machine',
        category: '系统工具',
        iconUrl: mdi('backup-restore', '#D9534F'),
        targets: {
            ubuntu: 'timeshift',
            debian: 'timeshift',
            arch: 'timeshift',
            fedora: 'timeshift',
            opensuse: 'timeshift',
            nix: 'timeshift'
        },
        unavailableReason: 'Requires root filesystem access; not available as Flatpak or Snap.'
    },
    {
        id: 'bleachbit',
        name: 'BleachBit',
        description: 'Free disk space and maintain privacy',
        category: '系统工具',
        iconUrl: 'https://raw.githubusercontent.com/chocolatey-community/chocolatey-packages/782707302851e7935c4a5a3e48e27140c774fa78/icons/bleachbit.svg',
        targets: {
            ubuntu: 'bleachbit',
            debian: 'bleachbit',
            arch: 'bleachbit',
            fedora: 'bleachbit',
            opensuse: 'bleachbit',
            nix: 'bleachbit',
            flatpak: 'org.bleachbit.BleachBit'
        },
        unavailableReason: 'BleachBit is not available as a Snap package.'
    },
    {
        id: 'flameshot',
        name: 'Flameshot',
        description: 'Powerful screenshot tool with annotation',
        category: '系统工具',
        iconUrl: 'https://raw.githubusercontent.com/flameshot-org/flameshot/master/data/img/app/flameshot.svg',
        targets: {
            ubuntu: 'flameshot',
            debian: 'flameshot',
            arch: 'flameshot',
            fedora: 'flameshot',
            opensuse: 'flameshot',
            nix: 'flameshot',
            flatpak: 'org.flameshot.Flameshot'
        },
        unavailableReason: 'Flameshot is not available as a Snap package.'
    },
    {
        id: 'gnometweaks',
        name: 'GNOME Tweaks',
        description: 'Advanced settings and customization for GNOME',
        category: '系统工具',
        iconUrl: si('gnome', '#4A86CF'),
        targets: {
            ubuntu: 'gnome-tweaks',
            debian: 'gnome-tweaks',
            arch: 'gnome-tweaks',
            fedora: 'gnome-tweaks',
            opensuse: 'gnome-tweaks',
            nix: 'gnome-tweaks'
        },
        unavailableReason: 'GNOME Tweaks is not available via Flatpak or Snap.'
    },
    {
        id: 'dconf',
        name: 'dconf Editor',
        description: 'Low-level configuration editor for GNOME',
        category: '系统工具',
        iconUrl: si('gnome', '#4A86CF'),
        targets: {
            ubuntu: 'dconf-editor',
            debian: 'dconf-editor',
            arch: 'dconf-editor',
            fedora: 'dconf-editor',
            opensuse: 'dconf-editor',
            nix: 'dconf-editor'
        },
        unavailableReason: 'dconf Editor is not available via Flatpak or Snap.'
    },
    {
        id: 'borgbackup',
        name: 'BorgBackup',
        description: 'Deduplicating backup program with compression',
        category: '系统工具',
        iconUrl: si('borgbackup', '#00B041'),
        targets: {
            ubuntu: 'borgbackup',
            debian: 'borgbackup',
            arch: 'borg',
            fedora: 'borgbackup',
            opensuse: 'borgbackup',
            nix: 'borgbackup'
        },
        unavailableReason: 'BorgBackup is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'restic',
        name: 'Restic',
        description: 'Fast, secure, efficient backup program',
        category: '系统工具',
        iconUrl: mdi('cloud-sync', '#00B4AB'),
        targets: {
            ubuntu: 'restic',
            debian: 'restic',
            arch: 'restic',
            fedora: 'restic',
            opensuse: 'restic',
            nix: 'restic'
        },
        unavailableReason: 'Restic is a CLI tool and not available via Flatpak or Snap.'
    },
    {
        id: 'flatpaksupport',
        name: 'Flatpak',
        description: 'Universal app packaging and sandboxing framework',
        category: '系统工具',
        iconUrl: si('flatpak', '#4A90D9'),
        targets: {
            ubuntu: 'flatpak',
            debian: 'flatpak',
            arch: 'flatpak',
            fedora: 'flatpak',
            opensuse: 'flatpak',
            nix: 'flatpak'
        },
        unavailableReason: 'Flatpak is a system package manager and not available via Flatpak or Snap.'
    },
    {
        id: 'filelight',
        name: 'Filelight',
        description: 'Interactive disk usage visualization by KDE',
        category: '系统工具',
        iconUrl: si('kde', '#338BDB'),
        targets: {
            ubuntu: 'filelight',
            debian: 'filelight',
            arch: 'filelight',
            fedora: 'filelight',
            opensuse: 'filelight',
            nix: 'filelight',
            flatpak: 'org.kde.filelight',
            snap: 'filelight'
        }
    },
    {
        id: 'conky',
        name: 'Conky',
        description: 'Highly configurable desktop system monitor',
        category: '系统工具',
        iconUrl: mdi('monitor-dashboard', '#FFFFFF'),
        targets: {
            ubuntu: 'conky-all',
            debian: 'conky-all',
            arch: 'conky',
            fedora: 'conky',
            opensuse: 'conky',
            nix: 'conky'
        },
        unavailableReason: 'Conky is a system tool and not available via Flatpak or Snap.'
    }
];
const categories = [
    '网页浏览器',
    '通讯软件',
    '开发：编程语言',
    '开发：编辑器',
    '开发：工具',
    '终端',
    '命令行工具',
    '媒体播放',
    '创意设计',
    '游戏',
    '办公软件',
    'VPN 与网络',
    '安全工具',
    '文件共享',
    '系统工具'
];
const getAppsByCategory = (category)=>{
    return apps.filter((app)=>app.category === category);
};
const isAppAvailable = (app, distro)=>{
    return distro in app.targets;
}; // Note: For command generation, use useLinuxInit().generatedCommand or generateInstallScript()
}),
"[project]/src/lib/aur.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// AUR package detection - figures out if a package is from AUR or official repos
/** Patterns that indicate an AUR package (suffixes) */ __turbopack_context__.s([
    "AUR_PATTERNS",
    ()=>AUR_PATTERNS,
    "KNOWN_AUR_PACKAGES",
    ()=>KNOWN_AUR_PACKAGES,
    "isAurPackage",
    ()=>isAurPackage
]);
const AUR_PATTERNS = [
    '-bin',
    '-git',
    '-appimage'
];
const KNOWN_AUR_PACKAGES = new Set([
    // Browsers
    'google-chrome',
    'zen-browser-bin',
    'helium-browser-bin',
    // Communication
    'slack-desktop',
    'zoom',
    'vesktop-bin',
    // Dev Editors
    'sublime-text-4',
    'vscodium-bin',
    'cursor-bin',
    // Dev Tools
    'postman-bin',
    'bruno-bin',
    'hoppscotch-bin',
    // Dev Languages
    'bun-bin',
    // Media
    'spotify',
    'stremio',
    // Gaming
    'heroic-games-launcher-bin',
    'protonup-qt-bin',
    // Office
    'onlyoffice-bin',
    'logseq-desktop-bin',
    'joplin-appimage',
    // VPN
    'proton-vpn-gtk-app',
    'mullvad-vpn-bin',
    // File Sharing
    'localsend-bin',
    'dropbox',
    'ab-download-manager-bin',
    // Security
    'bitwarden',
    // Creative
    'orcaslicer-bin',
    // Browsers (additional)
    'brave-bin',
    'librewolf-bin'
]);
function isAurPackage(packageName) {
    if (KNOWN_AUR_PACKAGES.has(packageName)) {
        return true;
    }
    return AUR_PATTERNS.some((pattern)=>packageName.endsWith(pattern));
}
}),
"[project]/src/lib/configManager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Configuration management utilities
// Handles save/load/export/import of app selections
__turbopack_context__.s([
    "clearRecentConfigs",
    ()=>clearRecentConfigs,
    "copyToClipboard",
    ()=>copyToClipboard,
    "createConfig",
    ()=>createConfig,
    "decodeConfigFromUrl",
    ()=>decodeConfigFromUrl,
    "encodeConfigToUrl",
    ()=>encodeConfigToUrl,
    "exportConfig",
    ()=>exportConfig,
    "generateShareUrl",
    ()=>generateShareUrl,
    "getRecentConfigs",
    ()=>getRecentConfigs,
    "importConfig",
    ()=>importConfig,
    "saveToRecentConfigs",
    ()=>saveToRecentConfigs,
    "validateConfig",
    ()=>validateConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
;
const CONFIG_VERSION = '1.0';
const RECENT_CONFIGS_KEY = 'linuxinit_recent_configs';
const MAX_RECENT_CONFIGS = 5;
function createConfig(distro, selectedApps, name) {
    return {
        version: CONFIG_VERSION,
        distro,
        apps: Array.from(selectedApps),
        timestamp: Date.now(),
        name: name || `配置 ${new Date().toLocaleDateString('zh-CN')}`
    };
}
function validateConfig(config) {
    if (!config || typeof config !== 'object') return false;
    const c = config;
    // Check required fields
    if (!c.version || !c.distro || !Array.isArray(c.apps)) return false;
    // Validate distro
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distros"].some((d)=>d.id === c.distro)) return false;
    // Validate apps exist
    const validApps = c.apps.every((appId)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].some((a)=>a.id === appId));
    if (!validApps) return false;
    return true;
}
function exportConfig(config) {
    const json = JSON.stringify(config, null, 2);
    const blob = new Blob([
        json
    ], {
        type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `linux-apps-${config.distro}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function importConfig(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = (e)=>{
            try {
                const config = JSON.parse(e.target?.result);
                if (validateConfig(config)) {
                    resolve(config);
                } else {
                    reject(new Error('无效的配置文件格式'));
                }
            } catch (err) {
                reject(new Error('配置文件解析失败'));
            }
        };
        reader.onerror = ()=>reject(new Error('文件读取失败'));
        reader.readAsText(file);
    });
}
function encodeConfigToUrl(config) {
    const json = JSON.stringify({
        d: config.distro,
        a: config.apps
    });
    return btoa(encodeURIComponent(json));
}
function decodeConfigFromUrl(encoded) {
    try {
        const json = decodeURIComponent(atob(encoded));
        const data = JSON.parse(json);
        return {
            distro: data.d,
            apps: data.a,
            version: CONFIG_VERSION,
            timestamp: Date.now()
        };
    } catch (err) {
        console.error('Failed to decode config from URL:', err);
        return null;
    }
}
function generateShareUrl(config) {
    const encoded = encodeConfigToUrl(config);
    const url = new URL(window.location.href);
    url.searchParams.set('config', encoded);
    return url.toString();
}
function saveToRecentConfigs(config) {
    try {
        const recent = getRecentConfigs();
        // Add to front, remove duplicates by timestamp
        const updated = [
            config,
            ...recent.filter((c)=>c.timestamp !== config.timestamp)
        ].slice(0, MAX_RECENT_CONFIGS);
        localStorage.setItem(RECENT_CONFIGS_KEY, JSON.stringify(updated));
    } catch (err) {
        console.error('Failed to save recent config:', err);
    }
}
function getRecentConfigs() {
    try {
        const stored = localStorage.getItem(RECENT_CONFIGS_KEY);
        if (!stored) return [];
        const configs = JSON.parse(stored);
        return Array.isArray(configs) ? configs.filter(validateConfig) : [];
    } catch (err) {
        console.error('Failed to load recent configs:', err);
        return [];
    }
}
function clearRecentConfigs() {
    try {
        localStorage.removeItem(RECENT_CONFIGS_KEY);
    } catch (err) {
        console.error('Failed to clear recent configs:', err);
    }
}
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand('copy');
        document.body.removeChild(textarea);
        return success;
    }
}
}),
"[project]/src/hooks/useLinuxInit.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLinuxInit",
    ()=>useLinuxInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aur$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/aur.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/configManager.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const STORAGE_KEY_DISTRO = 'linuxinit_distro';
const STORAGE_KEY_APPS = 'linuxinit_apps';
const STORAGE_KEY_YAY = 'linuxinit_yay_installed';
const STORAGE_KEY_HELPER = 'linuxinit_selected_helper';
function useLinuxInit() {
    const [selectedDistro, setSelectedDistroState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('ubuntu');
    const [selectedApps, setSelectedApps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [hasYayInstalled, setHasYayInstalled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedHelper, setSelectedHelper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('yay');
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load saved preferences from localStorage or URL params
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            // First check for URL config parameter
            const urlParams = new URLSearchParams(window.location.search);
            const configParam = urlParams.get('config');
            let loadedDistro = null;
            let loadedApps = [];
            if (configParam) {
                // Load from URL parameter
                const urlConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeConfigFromUrl"])(configParam);
                if (urlConfig && urlConfig.distro && urlConfig.apps) {
                    loadedDistro = urlConfig.distro;
                    loadedApps = urlConfig.apps;
                }
            }
            // Fallback to localStorage if no URL config
            if (!loadedDistro) {
                const savedDistro = localStorage.getItem(STORAGE_KEY_DISTRO);
                const savedApps = localStorage.getItem(STORAGE_KEY_APPS);
                if (savedDistro && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distros"].some((d)=>d.id === savedDistro)) {
                    loadedDistro = savedDistro;
                }
                if (savedApps) {
                    loadedApps = JSON.parse(savedApps);
                }
            }
            // Apply loaded distro
            if (loadedDistro) {
                setSelectedDistroState(loadedDistro);
            }
            // Apply loaded apps (filter to valid ones)
            if (loadedApps.length > 0) {
                const validApps = loadedApps.filter((id)=>{
                    const app = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].find((a)=>a.id === id);
                    if (!app) return false;
                    const pkg = app.targets[loadedDistro || 'ubuntu'];
                    return pkg !== undefined && pkg !== null;
                });
                setSelectedApps(new Set(validApps));
            }
            // Load other preferences
            const savedYay = localStorage.getItem(STORAGE_KEY_YAY);
            const savedHelper = localStorage.getItem(STORAGE_KEY_HELPER);
            if (savedYay === 'true') {
                setHasYayInstalled(true);
            }
            if (savedHelper === 'paru') {
                setSelectedHelper('paru');
            }
        } catch (e) {
            // Ignore errors
            console.error('Error loading config:', e);
        }
        setHydrated(true);
    }, []);
    // Persist to localStorage when state changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hydrated) return;
        try {
            localStorage.setItem(STORAGE_KEY_DISTRO, selectedDistro);
            localStorage.setItem(STORAGE_KEY_APPS, JSON.stringify([
                ...selectedApps
            ]));
            localStorage.setItem(STORAGE_KEY_YAY, hasYayInstalled.toString());
            localStorage.setItem(STORAGE_KEY_HELPER, selectedHelper);
        } catch (e) {
        // Ignore localStorage errors
        }
    }, [
        selectedDistro,
        selectedApps,
        hasYayInstalled,
        selectedHelper,
        hydrated
    ]);
    // Compute AUR package info for Arch
    const aurPackageInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selectedDistro !== 'arch') {
            return {
                hasAur: false,
                packages: [],
                appNames: []
            };
        }
        const aurPkgs = [];
        const aurAppNames = [];
        selectedApps.forEach((appId)=>{
            const app = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].find((a)=>a.id === appId);
            if (app) {
                const pkg = app.targets['arch'];
                if (pkg && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aur$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAurPackage"])(pkg)) {
                    aurPkgs.push(pkg);
                    aurAppNames.push(app.name);
                }
            }
        });
        return {
            hasAur: aurPkgs.length > 0,
            packages: aurPkgs,
            appNames: aurAppNames
        };
    }, [
        selectedDistro,
        selectedApps
    ]);
    const isAppAvailable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((appId)=>{
        const app = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].find((a)=>a.id === appId);
        if (!app) return false;
        const packageName = app.targets[selectedDistro];
        return packageName !== undefined && packageName !== null;
    }, [
        selectedDistro
    ]);
    const getPackageName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((appId)=>{
        const app = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].find((a)=>a.id === appId);
        if (!app) return null;
        return app.targets[selectedDistro] ?? null;
    }, [
        selectedDistro
    ]);
    const setSelectedDistro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((distroId)=>{
        setSelectedDistroState(distroId);
        setSelectedApps((prevSelected)=>{
            const newSelected = new Set();
            prevSelected.forEach((appId)=>{
                const app = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].find((a)=>a.id === appId);
                if (app) {
                    const packageName = app.targets[distroId];
                    if (packageName !== undefined && packageName !== null) {
                        newSelected.add(appId);
                    }
                }
            });
            return newSelected;
        });
    }, []);
    const toggleApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((appId)=>{
        // Check availability inline to avoid stale closure
        const app = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].find((a)=>a.id === appId);
        if (!app) return;
        const pkg = app.targets[selectedDistro];
        if (pkg === undefined || pkg === null) return;
        setSelectedApps((prev)=>{
            const newSet = new Set(prev);
            if (newSet.has(appId)) {
                newSet.delete(appId);
            } else {
                newSet.add(appId);
            }
            return newSet;
        });
    }, [
        selectedDistro
    ]);
    const selectAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const allAvailable = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].filter((app)=>{
            const pkg = app.targets[selectedDistro];
            return pkg !== undefined && pkg !== null;
        }).map((app)=>app.id);
        setSelectedApps(new Set(allAvailable));
    }, [
        selectedDistro
    ]);
    const clearAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSelectedApps(new Set());
    }, []);
    const availableCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].filter((app)=>{
            const pkg = app.targets[selectedDistro];
            return pkg !== undefined && pkg !== null;
        }).length;
    }, [
        selectedDistro
    ]);
    const generatedCommand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selectedApps.size === 0) {
            return '# Select apps above to generate command';
        }
        const distro = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distros"].find((d)=>d.id === selectedDistro);
        if (!distro) return '';
        const packageNames = [];
        selectedApps.forEach((appId)=>{
            const app = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].find((a)=>a.id === appId);
            if (app) {
                const pkg = app.targets[selectedDistro];
                if (pkg) packageNames.push(pkg);
            }
        });
        if (packageNames.length === 0) return '# No packages selected';
        // Handle special cases for Nix and Snap
        if (selectedDistro === 'nix') {
            // Nix needs nixpkgs. prefix for each package
            return `${distro.installPrefix} ${packageNames.map((p)=>`nixpkgs.${p}`).join(' ')}`;
        }
        if (selectedDistro === 'snap') {
            // Snap needs separate commands for --classic packages
            if (packageNames.length === 1) {
                return `${distro.installPrefix} ${packageNames[0]}`;
            }
            // For multiple snap packages, we chain them with &&
            // Note: snap doesn't support installing multiple packages in one command like apt
            return packageNames.map((p)=>`sudo snap install ${p}`).join(' && ');
        }
        // Handle Arch Linux with AUR packages
        if (selectedDistro === 'arch' && aurPackageInfo.hasAur) {
            if (!hasYayInstalled) {
                // User doesn't have current helper installed - prepend installation
                const helperName = selectedHelper; // yay or paru
                // Common setup: sudo pacman -S --needed git base-devel
                // Then clone, make, install
                const installHelperCmd = `sudo pacman -S --needed git base-devel && git clone https://aur.archlinux.org/${helperName}.git /tmp/${helperName} && cd /tmp/${helperName} && makepkg -si --noconfirm && cd - && rm -rf /tmp/${helperName}`;
                // Install packages using the helper
                const installCmd = `${helperName} -S --needed --noconfirm ${packageNames.join(' ')}`;
                return `${installHelperCmd} && ${installCmd}`;
            } else {
                // User has helper installed - use it for ALL packages
                return `${selectedHelper} -S --needed --noconfirm ${packageNames.join(' ')}`;
            }
        }
        return `${distro.installPrefix} ${packageNames.join(' ')}`;
    }, [
        selectedDistro,
        selectedApps,
        aurPackageInfo.hasAur,
        hasYayInstalled,
        selectedHelper
    ]);
    return {
        selectedDistro,
        selectedApps,
        setSelectedDistro,
        toggleApp,
        selectAll,
        clearAll,
        isAppAvailable,
        getPackageName,
        generatedCommand,
        selectedCount: selectedApps.size,
        availableCount,
        // Arch/AUR specific
        hasYayInstalled,
        setHasYayInstalled,
        selectedHelper,
        setSelectedHelper,
        hasAurPackages: aurPackageInfo.hasAur,
        aurPackageNames: aurPackageInfo.packages,
        aurAppNames: aurPackageInfo.appNames,
        // Hydration state
        isHydrated: hydrated
    };
}
}),
"[project]/src/hooks/useDelayedTooltip.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDelayedTooltip",
    ()=>useDelayedTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useDelayedTooltip(delay = 600) {
    const [tooltip, setTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isHoveringTooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const keyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    // Cleanup timer on unmount to prevent memory leaks
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);
    const show = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((text, e)=>{
        const rect = e.currentTarget.getBoundingClientRect();
        // Position centered above the element
        keyRef.current += 1; // Increment key for fresh animation
        const newTooltip = {
            text,
            x: rect.left + rect.width / 2,
            y: rect.top - 12,
            width: rect.width,
            key: keyRef.current
        };
        if (timerRef.current) clearTimeout(timerRef.current);
        // Clear existing tooltip first to reset animation
        setTooltip(null);
        timerRef.current = setTimeout(()=>setTooltip(newTooltip), delay);
    }, [
        delay
    ]);
    const hide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (timerRef.current) clearTimeout(timerRef.current);
        // Delay hide to allow moving to tooltip (increased to 500ms for better usability)
        timerRef.current = setTimeout(()=>{
            if (!isHoveringTooltip.current) {
                setTooltip(null);
            }
        }, 500);
    }, []);
    const onTooltipEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        isHoveringTooltip.current = true;
        if (timerRef.current) clearTimeout(timerRef.current);
    }, []);
    const onTooltipLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        isHoveringTooltip.current = false;
        setTooltip(null);
    }, []);
    return {
        tooltip,
        show,
        hide,
        onTooltipEnter,
        onTooltipLeave
    };
}
}),
"[project]/src/hooks/useKeyboardNavigation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyboardNavigation",
    ()=>useKeyboardNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useKeyboardNavigation(navItems, onToggleCategory, onToggleApp) {
    const [focusPos, setFocusPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /** Clear focus (e.g., when clicking outside) */ const clearFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setFocusPos(null), []);
    /** Get the currently focused item */ const focusedItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!focusPos) return null;
        return navItems[focusPos.col]?.[focusPos.row] || null;
    }, [
        navItems,
        focusPos
    ]);
    /** Set focus position by item type and id */ const setFocusByItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((type, id)=>{
        for(let col = 0; col < navItems.length; col++){
            const colItems = navItems[col];
            for(let row = 0; row < colItems.length; row++){
                if (colItems[row].type === type && colItems[row].id === id) {
                    setFocusPos({
                        col,
                        row
                    });
                    return;
                }
            }
        }
    }, [
        navItems
    ]);
    /** Keyboard event handler */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            // Skip if typing in input
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
            // Skip if modifier keys are pressed (prevents conflicts with browser shortcuts like Ctrl+D)
            if (e.ctrlKey || e.altKey || e.metaKey) return;
            const key = e.key;
            // Space to toggle
            if (key === ' ') {
                e.preventDefault();
                if (focusPos) {
                    const item = navItems[focusPos.col]?.[focusPos.row];
                    if (item?.type === 'category') onToggleCategory(item.id);
                    else if (item?.type === 'app') onToggleApp(item.id);
                }
                return;
            }
            // Navigation keys (arrow keys + vim keys)
            if (![
                'ArrowDown',
                'ArrowUp',
                'ArrowLeft',
                'ArrowRight',
                'j',
                'k',
                'h',
                'l',
                'Escape'
            ].includes(key)) return;
            e.preventDefault();
            // Escape clears focus
            if (key === 'Escape') {
                setFocusPos(null);
                return;
            }
            // Navigate
            setFocusPos((prev)=>{
                if (!prev) return {
                    col: 0,
                    row: 0
                };
                let { col, row } = prev;
                const currentCol = navItems[col] || [];
                // Down / j
                if (key === 'ArrowDown' || key === 'j') {
                    row = Math.min(row + 1, currentCol.length - 1);
                } else if (key === 'ArrowUp' || key === 'k') {
                    row = Math.max(row - 1, 0);
                } else if (key === 'ArrowRight' || key === 'l') {
                    if (col < navItems.length - 1) {
                        col++;
                        row = Math.min(row, (navItems[col]?.length || 1) - 1);
                    }
                } else if (key === 'ArrowLeft' || key === 'h') {
                    if (col > 0) {
                        col--;
                        row = Math.min(row, (navItems[col]?.length || 1) - 1);
                    }
                }
                return {
                    col,
                    row
                };
            });
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        navItems,
        focusPos,
        onToggleCategory,
        onToggleApp
    ]);
    /* Scroll focused item into view instantly */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!focusPos) return;
        const item = navItems[focusPos.col]?.[focusPos.row];
        if (!item) return;
        const el = document.querySelector(`[data-nav-id="${item.type}:${item.id}"]`);
        if (!el) return;
        el.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'nearest'
        });
    }, [
        focusPos,
        navItems
    ]);
    return {
        focusPos,
        focusedItem,
        clearFocus,
        setFocusByItem
    };
}
}),
"[project]/src/hooks/useDebounce.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebounce",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useDebounce(value, delay = 300) {
    const [debouncedValue, setDebouncedValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
}
}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/src/lib/analytics.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Umami Analytics Utility
// https://umami.is/docs/track-events
__turbopack_context__.s([
    "EVENTS",
    ()=>EVENTS,
    "analytics",
    ()=>analytics,
    "track",
    ()=>track
]);
function track(eventName, eventData) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
const EVENTS = {
    // Distro Selection
    DISTRO_SELECTED: 'Distro Selected',
    // App Interactions
    APP_SELECTED: 'App Selected',
    APP_DESELECTED: 'App Deselected',
    // Command Actions
    COMMAND_COPIED: 'Command Copied',
    SCRIPT_DOWNLOADED: 'Script Downloaded',
    // Navigation
    GITHUB_CLICKED: 'GitHub Clicked',
    CONTRIBUTE_CLICKED: 'Contribute Clicked',
    // UI Interactions
    HELP_OPENED: 'How It Works Opened',
    HELP_CLOSED: 'How It Works Closed',
    THEME_CHANGED: 'Theme Changed',
    CATEGORY_EXPANDED: 'Category Expanded',
    CATEGORY_COLLAPSED: 'Category Collapsed'
};
const analytics = {
    distroSelected: (distro)=>{
        track(EVENTS.DISTRO_SELECTED, {
            distro
        });
    },
    appSelected: (app, category, distro)=>{
        track(EVENTS.APP_SELECTED, {
            app,
            category,
            distro
        });
    },
    appDeselected: (app, category, distro)=>{
        track(EVENTS.APP_DESELECTED, {
            app,
            category,
            distro
        });
    },
    commandCopied: (distro, appCount)=>{
        track(EVENTS.COMMAND_COPIED, {
            distro,
            apps: appCount
        });
    },
    scriptDownloaded: (distro, appCount)=>{
        track(EVENTS.SCRIPT_DOWNLOADED, {
            distro,
            apps: appCount
        });
    },
    githubClicked: ()=>{
        track(EVENTS.GITHUB_CLICKED);
    },
    contributeClicked: ()=>{
        track(EVENTS.CONTRIBUTE_CLICKED);
    },
    helpOpened: ()=>{
        track(EVENTS.HELP_OPENED);
    },
    helpClosed: ()=>{
        track(EVENTS.HELP_CLOSED);
    },
    themeChanged: (theme)=>{
        track(EVENTS.THEME_CHANGED, {
            theme
        });
    },
    categoryExpanded: (category)=>{
        track(EVENTS.CATEGORY_EXPANDED, {
            category
        });
    },
    categoryCollapsed: (category)=>{
        track(EVENTS.CATEGORY_COLLAPSED, {
            category
        });
    }
};
}),
"[project]/src/components/ui/theme-toggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTheme.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ThemeToggle({ className }) {
    const { theme, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Prevent hydration mismatch by only rendering after mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    const isDark = theme === "dark";
    // Render placeholder with same dimensions during SSR
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-20 h-10 p-1 rounded-full", "bg-[var(--bg-secondary)] border border-[var(--border-primary)]", className)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/theme-toggle.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex w-20 h-10 p-1 rounded-full cursor-pointer transition-[background-color,box-shadow] duration-300", "bg-[var(--bg-secondary)] border border-[var(--border-primary)]", className),
        onClick: ()=>{
            toggle();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analytics"].themeChanged(isDark ? 'light' : 'dark');
        },
        role: "button",
        tabIndex: 0,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex justify-center items-center w-8 h-8 rounded-full transition-transform duration-300", isDark ? "transform translate-x-0" : "transform translate-x-10", "bg-[var(--bg-tertiary)]"),
                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                        className: "w-5 h-5 text-[var(--text-primary)]",
                        strokeWidth: 1.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/theme-toggle.tsx",
                        lineNumber: 60,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                        className: "w-5 h-5 text-[var(--text-primary)]",
                        strokeWidth: 1.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/theme-toggle.tsx",
                        lineNumber: 65,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/theme-toggle.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex justify-center items-center w-8 h-8 rounded-full transition-transform duration-300", isDark ? "bg-transparent" : "transform -translate-x-10"),
                    children: isDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                        className: "w-5 h-5 text-[var(--text-muted)]",
                        strokeWidth: 1.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/theme-toggle.tsx",
                        lineNumber: 80,
                        columnNumber: 25
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                        className: "w-5 h-5 text-[var(--text-muted)]",
                        strokeWidth: 1.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/theme-toggle.tsx",
                        lineNumber: 85,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/theme-toggle.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/theme-toggle.tsx",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/theme-toggle.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/header/HowItWorks.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HowItWorks",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.js [app-ssr] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function HowItWorks() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isClosing, setIsClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Lock body scroll when modal is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return ()=>{
            document.body.style.overflow = '';
        };
    }, [
        isOpen
    ]);
    // Global keyboard shortcut: ? to toggle modal
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            // Ignore if typing in input
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
            // Skip if Ctrl/Alt/Meta are pressed (Shift is allowed for ?)
            if (e.ctrlKey || e.altKey || e.metaKey) return;
            if (e.key === '?' || e.shiftKey && e.key === '/') {
                e.preventDefault();
                if (isOpen) {
                    handleClose();
                } else {
                    handleOpen();
                }
            }
            // Close on Escape
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return ()=>document.removeEventListener('keydown', handleKeyDown);
    }, [
        isOpen
    ]);
    const handleOpen = ()=>{
        setIsClosing(false);
        setIsOpen(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analytics"].helpOpened();
    };
    const handleClose = ()=>{
        setIsClosing(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analytics"].helpClosed();
        // Wait for exit animation to finish
        setTimeout(()=>{
            setIsOpen(false);
            setIsClosing(false);
        }, 200);
    };
    const modal = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 backdrop-blur-sm z-[99998]",
                onClick: handleClose,
                style: {
                    animation: isClosing ? 'fadeOut 0.2s ease-out forwards' : 'fadeIn 0.25s ease-out'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/header/HowItWorks.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "how-it-works-title",
                className: "fixed bg-[var(--bg-secondary)] border border-[var(--border-primary)] shadow-2xl z-[99999]",
                style: {
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '20px',
                    width: '440px',
                    maxWidth: 'calc(100vw - 32px)',
                    maxHeight: 'min(80vh, 650px)',
                    display: 'flex',
                    flexDirection: 'column',
                    animation: isClosing ? 'modalSlideOut 0.2s ease-out forwards' : 'modalSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    overflow: 'hidden'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3 px-5 py-4 border-b border-[var(--border-primary)] shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl bg-[var(--accent)]/15 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                                            className: "w-5 h-5 text-[var(--accent)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header/HowItWorks.tsx",
                                            lineNumber: 114,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                        lineNumber: 113,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                id: "how-it-works-title",
                                                className: "text-lg font-semibold text-[var(--text-primary)]",
                                                children: "如何使用 Linux 应用安装器"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 117,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[var(--text-muted)]",
                                                children: "快速指南 & 键盘快捷键"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 118,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                        lineNumber: 116,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                lineNumber: 112,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[var(--bg-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/HowItWorks.tsx",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                lineNumber: 121,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-5 space-y-5",
                        style: {
                            scrollbarGutter: 'stable'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3",
                                        children: "快速开始"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                        lineNumber: 133,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--accent)] shrink-0",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-[var(--text-secondary)]",
                                                        children: "从下拉菜单选择您的发行版"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 135,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--accent)] shrink-0",
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-[var(--text-secondary)]",
                                                        children: "勾选您想要安装的应用"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 139,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--accent)] shrink-0",
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-[var(--text-secondary)]",
                                                        children: "复制命令或下载脚本"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 143,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-5 h-5 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[10px] font-bold text-[var(--accent)] shrink-0",
                                                        children: "4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-[var(--text-secondary)]",
                                                        children: [
                                                            "粘贴到终端 (",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "text-xs bg-[var(--bg-tertiary)] px-1 py-0.5 rounded",
                                                                children: "Ctrl+Shift+V"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 92
                                                            }, this),
                                                            ") 并运行"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 147,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                        lineNumber: 134,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                lineNumber: 132,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-3 border-t border-[var(--border-primary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3",
                                        children: "应用不可用？"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                        lineNumber: 156,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2.5 text-xs text-[var(--text-muted)] leading-relaxed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "灰色应用不在您的发行版仓库中。您可以："
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 158,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 ml-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--accent)]",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-[var(--text-secondary)]",
                                                                        children: "使用 Flatpak/Snap："
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                        lineNumber: 162,
                                                                        columnNumber: 43
                                                                    }, this),
                                                                    "在发行版选择器中切换到 Flatpak 或 Snap 以获取通用软件包"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--accent)]",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-[var(--text-secondary)]",
                                                                        children: "从网站下载："
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 43
                                                                    }, this),
                                                                    "访问应用官网下载 ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        className: "bg-[var(--bg-tertiary)] px-1 rounded",
                                                                        children: ".deb"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 116
                                                                    }, this),
                                                                    "、",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        className: "bg-[var(--bg-tertiary)] px-1 rounded",
                                                                        children: ".rpm"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 183
                                                                    }, this),
                                                                    " 或 ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        className: "bg-[var(--bg-tertiary)] px-1 rounded",
                                                                        children: ".AppImage"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                        lineNumber: 166,
                                                                        columnNumber: 252
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 166,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 164,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "flex gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[var(--accent)]",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 169,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-[var(--text-secondary)]",
                                                                        children: "悬停在 ⓘ 图标："
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                        lineNumber: 170,
                                                                        columnNumber: 43
                                                                    }, this),
                                                                    "某些不可用的应用会显示替代下载方式的链接"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 170,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 159,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                lineNumber: 155,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-3 border-t border-[var(--border-primary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3",
                                        children: "Arch Linux & AUR"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                        lineNumber: 178,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--text-muted)] leading-relaxed",
                                        children: [
                                            "某些 Arch 软件包位于 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                className: "text-[var(--text-secondary)]",
                                                children: "AUR"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 180,
                                                columnNumber: 43
                                            }, this),
                                            "（Arch 用户仓库）。 TuxMate 使用 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "bg-[var(--bg-tertiary)] px-1 rounded",
                                                children: "yay"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 181,
                                                columnNumber: 40
                                            }, this),
                                            " 或 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                className: "bg-[var(--bg-tertiary)] px-1 rounded",
                                                children: "paru"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 181,
                                                columnNumber: 108
                                            }, this),
                                            " 来安装它们。 选择 AUR 软件包时，弹窗会询问您使用哪个助手。您可以随时使用 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                className: "px-1 py-0.5 bg-[var(--bg-tertiary)] rounded text-[10px]",
                                                children: "1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 182,
                                                columnNumber: 62
                                            }, this),
                                            " (yay) 或 ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                className: "px-1 py-0.5 bg-[var(--bg-tertiary)] rounded text-[10px]",
                                                children: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 182,
                                                columnNumber: 151
                                            }, this),
                                            " (paru) 切换助手。"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                        lineNumber: 179,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                lineNumber: 177,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-3 border-t border-[var(--border-primary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3",
                                        children: "键盘快捷键"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                        lineNumber: 188,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono",
                                                        children: "↑↓←→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "导航"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 190,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono",
                                                        children: "hjkl"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "Vim 导航"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 194,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono",
                                                        children: "空格"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 199,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "切换选择"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 198,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono",
                                                        children: "/"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "搜索应用"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 202,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono",
                                                        children: "y"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "复制命令"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 206,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono",
                                                        children: "d"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "下载脚本"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 210,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono",
                                                        children: "c"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "清除选择"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 214,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono",
                                                        children: "t"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "切换主题"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 218,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono",
                                                        children: "Tab"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "打开预览"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 222,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono",
                                                        children: "Esc"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "关闭弹窗"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 226,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
                                                        className: "px-1.5 py-0.5 bg-[var(--bg-tertiary)] text-[var(--text-secondary)] rounded text-[10px] font-mono",
                                                        children: "?"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)]",
                                                        children: "此帮助"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 230,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                lineNumber: 187,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-3 border-t border-[var(--border-primary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-3",
                                        children: "专家提示"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                        lineNumber: 239,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-xs text-[var(--text-muted)] leading-relaxed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-emerald-500",
                                                        children: "💡"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-[var(--text-secondary)]",
                                                                children: "下载按钮"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 39
                                                            }, this),
                                                            "可生成完整的 Shell 脚本，包含进度跟踪、错误处理和总结报告"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 243,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 241,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-emerald-500",
                                                        children: "💡"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 246,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-[var(--text-secondary)]",
                                                                children: "运行脚本："
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 248,
                                                                columnNumber: 37
                                                            }, this),
                                                            ' ',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "bg-[var(--bg-tertiary)] px-1 rounded",
                                                                children: "chmod +x linux-installer-*.sh && ./linux-installer-*.sh"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 37
                                                            }, this),
                                                            " 或",
                                                            ' ',
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "bg-[var(--bg-tertiary)] px-1 rounded",
                                                                children: "bash linux-installer-*.sh"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 250,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 245,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-emerald-500",
                                                        children: "💡"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "您的选择会",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-[var(--text-secondary)]",
                                                                children: "自动保存"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 44
                                                            }, this),
                                                            "——随时回来修改您的设置"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 255,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 253,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-emerald-500",
                                                        children: "💡"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "运行 ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "bg-[var(--bg-tertiary)] px-1 rounded",
                                                                children: ".deb"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 42
                                                            }, this),
                                                            " 文件：",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "bg-[var(--bg-tertiary)] px-1 rounded",
                                                                children: "sudo dpkg -i file.deb"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 112
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 257,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-emerald-500",
                                                        children: "💡"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 262,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "运行 ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "bg-[var(--bg-tertiary)] px-1 rounded",
                                                                children: ".rpm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 42
                                                            }, this),
                                                            " 文件：",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                className: "bg-[var(--bg-tertiary)] px-1 rounded",
                                                                children: "sudo dnf install ./file.rpm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 112
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                                lineNumber: 261,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                                        lineNumber: 240,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/header/HowItWorks.tsx",
                                lineNumber: 238,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header/HowItWorks.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: triggerRef,
                onClick: handleOpen,
                className: `flex items-center gap-1.5 text-sm transition-[color,transform] duration-200 hover:scale-105 ${isOpen ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                        lineNumber: 279,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline whitespace-nowrap",
                        children: "如何使用？"
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/HowItWorks.tsx",
                        lineNumber: 280,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header/HowItWorks.tsx",
                lineNumber: 274,
                columnNumber: 13
            }, this),
            isOpen && mounted && typeof document !== 'undefined' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(modal, document.body)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/header/GitHubLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GitHubLink",
    ()=>GitHubLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function GitHubLink({ href = "https://github.com/AnYanYi/Linux-app-installer" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300",
        title: "在 GitHub 上查看",
        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analytics"].githubClicked(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                className: "w-4 h-4 transition-transform duration-300 group-hover:rotate-12"
            }, void 0, false, {
                fileName: "[project]/src/components/header/GitHubLink.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden sm:inline relative",
                children: [
                    "GitHub",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-0 left-0 w-0 h-px bg-[var(--text-muted)] transition-[width] duration-300 group-hover:w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/GitHubLink.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header/GitHubLink.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/header/GitHubLink.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/header/ContributeLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContributeLink",
    ()=>ContributeLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function ContributeLink({ href = "https://github.com/AnYanYi/Linux-app-installer/blob/main/CONTRIBUTING.md" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "在 GitHub 上贡献代码",
        className: "group flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors duration-300",
        onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analytics"].contributeClicked(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                className: "w-4 h-4 transition-[color,transform] duration-300 group-hover:text-rose-400 group-hover:scale-110"
            }, void 0, false, {
                fileName: "[project]/src/components/header/ContributeLink.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden sm:inline relative",
                children: [
                    "贡献代码",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-0 left-0 w-0 h-px bg-[var(--text-muted)] transition-[width] duration-300 group-hover:w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/ContributeLink.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header/ContributeLink.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/header/ContributeLink.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/header/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Header area components
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$HowItWorks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/HowItWorks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$GitHubLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/GitHubLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$ContributeLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/ContributeLink.tsx [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/src/components/distro/DistroIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DistroIcon",
    ()=>DistroIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function DistroIcon({ url, name, size = 20 }) {
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-full bg-[var(--accent)] flex items-center justify-center text-xs font-bold text-white",
            style: {
                width: size,
                height: size
            },
            children: name[0]
        }, void 0, false, {
            fileName: "[project]/src/components/distro/DistroIcon.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: url,
        alt: "",
        "aria-hidden": "true",
        width: size,
        height: size,
        className: "object-contain",
        style: {
            width: size,
            height: size
        },
        onError: ()=>setError(true)
    }, void 0, false, {
        fileName: "[project]/src/components/distro/DistroIcon.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/distro/DistroSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DistroSelector",
    ()=>DistroSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$distro$2f$DistroIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/distro/DistroIcon.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function DistroSelector({ selectedDistro, onSelect }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dropdownPos, setDropdownPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        right: 0
    });
    const currentDistro = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distros"].find((d)=>d.id === selectedDistro);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownPos({
                top: rect.bottom + 8,
                right: window.innerWidth - rect.right
            });
        }
    }, [
        isOpen
    ]);
    const handleOpen = ()=>{
        setIsOpen(!isOpen);
    };
    // Dropdown rendered via portal to body
    const dropdown = isOpen && mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsOpen(false),
                className: "backdrop-blur-[2px]",
                style: {
                    position: 'fixed',
                    inset: 0,
                    zIndex: 99998,
                    background: 'rgba(0,0,0,0.05)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/distro/DistroSelector.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "distro-dropdown bg-[var(--bg-secondary)] border border-[var(--border-primary)]",
                style: {
                    position: 'fixed',
                    top: dropdownPos.top,
                    right: dropdownPos.right,
                    zIndex: 99999,
                    borderRadius: '20px',
                    padding: '10px',
                    minWidth: '200px',
                    boxShadow: '0 20px 60px -10px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)',
                    transformOrigin: 'top right',
                    animation: 'distroDropdownOpen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-widest",
                            children: "选择发行版"
                        }, void 0, false, {
                            fileName: "[project]/src/components/distro/DistroSelector.tsx",
                            lineNumber: 74,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/distro/DistroSelector.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distros"].map((distro, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    onSelect(distro.id);
                                    setIsOpen(false);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analytics"].distroSelected(distro.name);
                                },
                                className: `group w-full flex items-center gap-3 py-2.5 px-3 rounded-xl border-none cursor-pointer text-left transition-[background-color,transform] duration-200 ${selectedDistro === distro.id ? 'bg-[var(--accent)]/10' : 'bg-transparent hover:bg-[var(--bg-hover)] hover:scale-[1.02]'}`,
                                style: {
                                    animation: `distroItemSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.04}s both`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-7 h-7 rounded-lg flex items-center justify-center transition-transform duration-200 ${selectedDistro === distro.id ? 'bg-[var(--accent)]/20 scale-110' : 'bg-[var(--bg-tertiary)] group-hover:scale-105'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$distro$2f$DistroIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DistroIcon"], {
                                            url: distro.iconUrl,
                                            name: distro.name,
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/distro/DistroSelector.tsx",
                                            lineNumber: 95,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/distro/DistroSelector.tsx",
                                        lineNumber: 91,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `flex-1 text-sm transition-colors ${selectedDistro === distro.id ? 'text-[var(--text-primary)] font-medium' : 'text-[var(--text-secondary)]'}`,
                                        children: distro.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/distro/DistroSelector.tsx",
                                        lineNumber: 97,
                                        columnNumber: 29
                                    }, this),
                                    selectedDistro === distro.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                            className: "w-3 h-3 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/distro/DistroSelector.tsx",
                                            lineNumber: 103,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/distro/DistroSelector.tsx",
                                        lineNumber: 102,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, distro.id, true, {
                                fileName: "[project]/src/components/distro/DistroSelector.tsx",
                                lineNumber: 80,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/distro/DistroSelector.tsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/distro/DistroSelector.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                onClick: handleOpen,
                "aria-haspopup": "listbox",
                "aria-expanded": isOpen,
                "aria-label": `Select distribution, current: ${currentDistro?.name}`,
                className: `group flex items-center gap-2.5 h-10 pl-2.5 pr-3.5 rounded-2xl border border-[var(--border-primary)] bg-[var(--bg-secondary)] transition-[background-color,box-shadow,border-color] duration-300 ${isOpen ? 'ring-2 ring-[var(--accent)]/30 border-[var(--accent)]/50' : 'hover:bg-[var(--bg-hover)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-6 h-6 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$distro$2f$DistroIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DistroIcon"], {
                            url: currentDistro?.iconUrl || '',
                            name: currentDistro?.name || '',
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/distro/DistroSelector.tsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/distro/DistroSelector.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-[var(--text-primary)] hidden sm:inline",
                        children: currentDistro?.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/distro/DistroSelector.tsx",
                        lineNumber: 126,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `w-3.5 h-3.5 text-[var(--text-muted)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/distro/DistroSelector.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/distro/DistroSelector.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this),
            mounted && typeof document !== 'undefined' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(dropdown, document.body)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/distro/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Distro picker components
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$distro$2f$DistroIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/distro/DistroIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$distro$2f$DistroSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/distro/DistroSelector.tsx [app-ssr] (ecmascript)");
;
;
}),
"[project]/src/components/app/AppIcon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppIcon",
    ()=>AppIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function AppIcon({ url, name }) {
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-4 h-4 rounded bg-[var(--accent)] flex items-center justify-center text-[10px] font-bold",
            children: name[0]
        }, void 0, false, {
            fileName: "[project]/src/components/app/AppIcon.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: url,
        alt: "",
        "aria-hidden": "true",
        width: 16,
        height: 16,
        className: "w-4 h-4 object-contain opacity-75",
        onError: ()=>setError(true),
        loading: "lazy"
    }, void 0, false, {
        fileName: "[project]/src/components/app/AppIcon.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/app/AppItem.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppItem",
    ()=>AppItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aur$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/aur.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$AppIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/app/AppIcon.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const AppItem = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(function AppItem({ app, isSelected, isAvailable, isFocused, selectedDistro, onToggle, onTooltipEnter, onTooltipLeave, onFocus }) {
    // Why isn't this app available? Tell the user.
    const getUnavailableText = ()=>{
        const distroName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distros"].find((d)=>d.id === selectedDistro)?.name || '';
        return app.unavailableReason || `Not available in ${distroName} repos`;
    };
    // Special styling for AUR packages (Arch users love their badges)
    const isAur = selectedDistro === 'arch' && app.targets?.arch && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aur$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAurPackage"])(app.targets.arch);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-nav-id": `app:${app.id}`,
        role: "checkbox",
        "aria-checked": isSelected,
        "aria-label": `${app.name}${!isAvailable ? ' (unavailable)' : ''}`,
        "aria-disabled": !isAvailable,
        className: `app-item w-full flex items-center gap-2.5 py-1.5 px-2 rounded-md outline-none transition-colors duration-150
        ${isFocused ? 'bg-[var(--bg-focus)]' : ''}
        ${!isAvailable ? 'opacity-40 grayscale-[30%]' : 'hover:bg-[var(--bg-hover)] cursor-pointer'}`,
        style: {
            transition: 'background-color 0.15s, color 0.5s'
        },
        onClick: (e)=>{
            e.stopPropagation();
            onFocus?.();
            if (isAvailable) {
                const willBeSelected = !isSelected;
                onToggle();
                const distroName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distros"].find((d)=>d.id === selectedDistro)?.name || selectedDistro;
                if (willBeSelected) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analytics"].appSelected(app.name, app.category, distroName);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analytics"].appDeselected(app.name, app.category, distroName);
                }
            }
        },
        onMouseEnter: (e)=>{
            // Show description tooltip for all apps (available and unavailable)
            onTooltipEnter(app.description, e);
        },
        onMouseLeave: ()=>{
            onTooltipLeave();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors duration-150
        ${isAur ? isSelected ? 'bg-[#1793d1] border-[#1793d1]' : 'border-[#1793d1]/50' : isSelected ? 'bg-[var(--text-secondary)] border-[var(--text-secondary)]' : 'border-[var(--border-secondary)]'}
        ${!isAvailable ? 'border-dashed' : ''}`,
                children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                    className: "w-2.5 h-2.5 text-[var(--bg-primary)]",
                    strokeWidth: 3
                }, void 0, false, {
                    fileName: "[project]/src/components/app/AppItem.tsx",
                    lineNumber: 83,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/app/AppItem.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$AppIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppIcon"], {
                url: app.iconUrl,
                name: app.name
            }, void 0, false, {
                fileName: "[project]/src/components/app/AppItem.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-baseline gap-1.5 min-w-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-sm truncate ${!isAvailable ? 'text-[var(--text-muted)]' : isSelected ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`,
                        style: {
                            transition: 'color 0.5s',
                            textRendering: 'geometricPrecision',
                            WebkitFontSmoothing: 'antialiased'
                        },
                        children: app.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/app/AppItem.tsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this),
                    isAur && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://api.iconify.design/simple-icons/archlinux.svg?color=%231793d1",
                        className: "ml-1.5 w-3 h-3 flex-shrink-0 opacity-80",
                        alt: "AUR",
                        title: "这是一个 AUR 软件包"
                    }, void 0, false, {
                        fileName: "[project]/src/components/app/AppItem.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/app/AppItem.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            !isAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative group flex-shrink-0 cursor-help",
                onMouseEnter: (e)=>{
                    e.stopPropagation();
                    onTooltipEnter(getUnavailableText(), e);
                },
                onMouseLeave: (e)=>{
                    e.stopPropagation();
                    onTooltipLeave();
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-4 h-4 text-[var(--text-muted)] hover:text-[var(--accent)] transition-[color,transform] duration-300 hover:rotate-[360deg] hover:scale-110",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.518 0-10-4.482-10-10s4.482-10 10-10 10 4.482 10 10-4.482 10-10 10zm-1-16h2v6h-2zm0 8h2v2h-2z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/app/AppItem.tsx",
                        lineNumber: 119,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/app/AppItem.tsx",
                    lineNumber: 113,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/app/AppItem.tsx",
                lineNumber: 108,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/app/AppItem.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
});
}),
"[project]/src/components/app/CategoryHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryHeader",
    ()=>CategoryHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
'use client';
;
;
function CategoryHeader({ category, isExpanded, isFocused, onToggle, selectedCount, onFocus }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        "data-nav-id": `category:${category}`,
        onClick: (e)=>{
            e.stopPropagation();
            onFocus?.();
            onToggle();
        },
        tabIndex: -1,
        "aria-expanded": isExpanded,
        "aria-label": `${category} category, ${selectedCount} apps selected`,
        className: `category-header w-full flex items-center gap-2 text-[11px] font-semibold text-[var(--text-muted)] 
        hover:text-[var(--text-secondary)] uppercase tracking-widest mb-2 pb-1.5 
        border-b border-[var(--border-primary)] transition-colors duration-150 px-0.5 outline-none
        ${isFocused ? 'bg-[var(--bg-focus)] text-[var(--text-secondary)]' : ''}`,
        style: {
            transition: 'color 0.5s, border-color 0.5s'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                className: `w-3 h-3 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`
            }, void 0, false, {
                fileName: "[project]/src/components/app/CategoryHeader.tsx",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "flex-1 text-left",
                children: category
            }, void 0, false, {
                fileName: "[project]/src/components/app/CategoryHeader.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            selectedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] bg-[var(--bg-tertiary)] text-[var(--text-secondary)] w-5 h-5 rounded-full flex items-center justify-center font-medium",
                style: {
                    transition: 'background-color 0.5s, color 0.5s'
                },
                children: selectedCount
            }, void 0, false, {
                fileName: "[project]/src/components/app/CategoryHeader.tsx",
                lineNumber: 37,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/app/CategoryHeader.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/app/CategorySection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategorySection",
    ()=>CategorySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$CategoryHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/app/CategoryHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$AppItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/app/AppItem.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function CategorySectionComponent({ category, categoryApps, selectedApps, isAppAvailable, selectedDistro, toggleApp, isExpanded, onToggleExpanded, focusedId, focusedType, onTooltipEnter, onTooltipLeave, categoryIndex, onCategoryFocus, onAppFocus }) {
    const selectedInCategory = categoryApps.filter((a)=>selectedApps.has(a.id)).length;
    const isCategoryFocused = focusedType === 'category' && focusedId === category;
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const prevAppCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(categoryApps.length);
    // Initial entrance animation - GPU optimized
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!sectionRef.current || hasAnimated.current) return;
        hasAnimated.current = true;
        const section = sectionRef.current;
        const header = section.querySelector('.category-header');
        const items = section.querySelectorAll('.app-item');
        // Use requestAnimationFrame for smoother initial setup
        requestAnimationFrame(()=>{
            // Initial state with GPU-accelerated transforms
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(header, {
                clipPath: 'inset(0 100% 0 0)'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(items, {
                y: -15,
                opacity: 0,
                force3D: true
            });
            // Staggered delay based on category index (reduced for faster feel)
            const delay = categoryIndex * 0.05;
            // Animate header with clip-path reveal
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(header, {
                clipPath: 'inset(0 0% 0 0)',
                duration: 0.6,
                ease: 'power2.out',
                delay: delay + 0.05
            });
            // Animate items with GPU-accelerated transforms
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(items, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.025,
                ease: 'power2.out',
                delay: delay + 0.1,
                force3D: true
            });
        });
    }, [
        categoryIndex
    ]);
    // When app count changes (after search clears), ensure all items are visible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (categoryApps.length !== prevAppCount.current && sectionRef.current) {
            const items = sectionRef.current.querySelectorAll('.app-item');
            // Reset any hidden items to visible
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(items, {
                y: 0,
                opacity: 1,
                clearProps: 'all'
            });
        }
        prevAppCount.current = categoryApps.length;
    }, [
        categoryApps.length
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: sectionRef,
        className: "mb-5 category-section",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$CategoryHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategoryHeader"], {
                category: category,
                isExpanded: isExpanded,
                isFocused: isCategoryFocused,
                onToggle: ()=>{
                    const willExpand = !isExpanded;
                    onToggleExpanded();
                    if (willExpand) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analytics"].categoryExpanded(category);
                    } else {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analytics"].categoryCollapsed(category);
                    }
                },
                selectedCount: selectedInCategory,
                onFocus: onCategoryFocus
            }, void 0, false, {
                fileName: "[project]/src/components/app/CategorySection.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `overflow-hidden transition-[max-height,opacity] duration-500 ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`,
                style: {
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'
                },
                children: categoryApps.map((app)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$AppItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppItem"], {
                        app: app,
                        isSelected: selectedApps.has(app.id),
                        isAvailable: isAppAvailable(app.id),
                        isFocused: focusedType === 'app' && focusedId === app.id,
                        selectedDistro: selectedDistro,
                        onToggle: ()=>toggleApp(app.id),
                        onTooltipEnter: onTooltipEnter,
                        onTooltipLeave: onTooltipLeave,
                        onFocus: ()=>onAppFocus?.(app.id)
                    }, app.id, false, {
                        fileName: "[project]/src/components/app/CategorySection.tsx",
                        lineNumber: 124,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/app/CategorySection.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/app/CategorySection.tsx",
        lineNumber: 102,
        columnNumber: 9
    }, this);
}
const CategorySection = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["memo"])(CategorySectionComponent, (prevProps, nextProps)=>{
    // Always re-render if app count changes
    if (prevProps.categoryApps.length !== nextProps.categoryApps.length) return false;
    // Check if app IDs are the same
    const prevIds = prevProps.categoryApps.map((a)=>a.id).join(',');
    const nextIds = nextProps.categoryApps.map((a)=>a.id).join(',');
    if (prevIds !== nextIds) return false;
    // Check other important props
    if (prevProps.category !== nextProps.category) return false;
    if (prevProps.isExpanded !== nextProps.isExpanded) return false;
    if (prevProps.selectedDistro !== nextProps.selectedDistro) return false;
    if (prevProps.focusedId !== nextProps.focusedId) return false;
    if (prevProps.focusedType !== nextProps.focusedType) return false;
    if (prevProps.categoryIndex !== nextProps.categoryIndex) return false;
    // Check if selection state changed for any app in this category
    for (const app of nextProps.categoryApps){
        if (prevProps.selectedApps.has(app.id) !== nextProps.selectedApps.has(app.id)) {
            return false;
        }
    }
    return true;
});
}),
"[project]/src/components/app/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// App components - icons, items, categories
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$AppIcon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/app/AppIcon.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$AppItem$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/app/AppItem.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$CategoryHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/app/CategoryHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$CategorySection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/app/CategorySection.tsx [app-ssr] (ecmascript)");
;
;
;
;
}),
"[project]/src/lib/scripts/shared.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Stuff shared across all distro script generators
__turbopack_context__.s([
    "escapeShellString",
    ()=>escapeShellString,
    "generateAsciiHeader",
    ()=>generateAsciiHeader,
    "generateSharedUtils",
    ()=>generateSharedUtils,
    "getSelectedPackages",
    ()=>getSelectedPackages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
;
function escapeShellString(str) {
    return str.replace(/\\/g, '\\\\') // Escape backslashes first
    .replace(/"/g, '\\"') // Escape double quotes
    .replace(/\$/g, '\\$') // Escape dollar signs
    .replace(/`/g, '\\`') // Escape backticks
    .replace(/!/g, '\\!'); // Escape history expansion
}
function getSelectedPackages(selectedAppIds, distroId) {
    return Array.from(selectedAppIds).map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].find((a)=>a.id === id)).filter((app)=>!!app && !!app.targets[distroId]).map((app)=>({
            app,
            pkg: app.targets[distroId]
        }));
}
function generateAsciiHeader(distroName, pkgCount) {
    const date = new Date().toISOString().split('T')[0];
    return `#!/bin/bash
#
#  ████████╗██╗   ██╗██╗  ██╗███╗   ███╗ █████╗ ████████╗███████╗
#  ╚══██╔══╝██║   ██║╚██╗██╔╝████╗ ████║██╔══██╗╚══██╔══╝██╔════╝
#     ██║   ██║   ██║ ╚███╔╝ ██╔████╔██║███████║   ██║   █████╗
#     ██║   ██║   ██║ ██╔██╗ ██║╚██╔╝██║██╔══██║   ██║   ██╔══╝
#     ██║   ╚██████╔╝██╔╝ ██╗██║ ╚═╝ ██║██║  ██║   ██║   ███████╗
#     ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝
#
#  Linux App Installer
#  https://github.com/AnYanYi/Linux-app-installer
#
#  Distribution: ${distroName}
#  Packages: ${pkgCount}
#  Generated: ${date}
#
# ─────────────────────────────────────────────────────────────────────────────

set -euo pipefail

`;
}
function generateSharedUtils(total) {
    return `# ─────────────────────────────────────────────────────────────────────────────
#  Colors & Utilities
# ─────────────────────────────────────────────────────────────────────────────

if [ -t 1 ]; then
    RED='\\033[0;31m' GREEN='\\033[0;32m' YELLOW='\\033[1;33m'
    BLUE='\\033[0;34m' CYAN='\\033[0;36m' BOLD='\\033[1m' DIM='\\033[2m' NC='\\033[0m'
else
    RED='' GREEN='' YELLOW='' BLUE='' CYAN='' BOLD='' DIM='' NC=''
fi

info()    { echo -e "\${BLUE}::\${NC} $1"; }
success() { echo -e "\${GREEN}✓\${NC} $1"; }
warn()    { echo -e "\${YELLOW}!\${NC} $1"; }
error()   { echo -e "\${RED}✗\${NC} $1" >&2; }
skip()    { echo -e "\${DIM}○\${NC} $1 \${DIM}(already installed)\${NC}"; }
timing()  { echo -e "\${GREEN}✓\${NC} $1 \${DIM}($2s)\${NC}"; }

# Graceful exit on Ctrl+C
trap 'printf "\\n"; warn "Installation cancelled by user"; print_summary; exit 130' INT

TOTAL=${total}
CURRENT=0
FAILED=()
SUCCEEDED=()
SKIPPED=()
INSTALL_TIMES=()
START_TIME=$(date +%s)
AVG_TIME=8  # Initial estimate: 8 seconds per package

show_progress() {
    local current=$1 total=$2 name=$3
    local percent=$((current * 100 / total))
    local filled=$((percent / 5))
    local empty=$((20 - filled))
    
    # Calculate ETA
    local remaining=$((total - current))
    local eta=$((remaining * AVG_TIME))
    local eta_str=""
    if [ $eta -ge 60 ]; then
        eta_str="~$((eta / 60))m"
    else
        eta_str="~\${eta}s"
    fi
    
    printf "\\r\\033[K[\${CYAN}"
    printf "%\${filled}s" | tr ' ' '█'
    printf "\${NC}"
    printf "%\${empty}s" | tr ' ' '░'
    printf "] %3d%% (%d/%d) \${BOLD}%s\${NC} \${DIM}%s left\${NC}" "$percent" "$current" "$total" "$name" "$eta_str"
}

# Update average install time
update_avg_time() {
    local new_time=$1
    if [ \${#INSTALL_TIMES[@]} -eq 0 ]; then
        AVG_TIME=$new_time
    else
        local sum=$new_time
        for t in "\${INSTALL_TIMES[@]}"; do
            sum=$((sum + t))
        done
        AVG_TIME=$((sum / (\${#INSTALL_TIMES[@]} + 1)))
    fi
    INSTALL_TIMES+=($new_time)
}

# Safe command executor (no eval)
run_cmd() {
    "$@" 2>&1
}

# Network retry wrapper - uses run_cmd for safety
with_retry() {
    local max_attempts=3
    local attempt=1
    local delay=5
    
    while [ $attempt -le $max_attempts ]; do
        if output=$(run_cmd "$@"); then
            echo "$output"
            return 0
        fi
        
        # Check for network errors
        if echo "$output" | grep -qiE "network|connection|timeout|unreachable|resolve"; then
            if [ $attempt -lt $max_attempts ]; then
                warn "Network error, retrying in \${delay}s... (attempt $attempt/$max_attempts)"
                sleep $delay
                delay=$((delay * 2))
                attempt=$((attempt + 1))
                continue
            fi
        fi
        
        echo "$output"
        return 1
    done
    return 1
}

print_summary() {
    local end_time=$(date +%s)
    local duration=$((end_time - START_TIME))
    local mins=$((duration / 60))
    local secs=$((duration % 60))
    
    echo
    echo "─────────────────────────────────────────────────────────────────────────────"
    local installed=\${#SUCCEEDED[@]}
    local skipped_count=\${#SKIPPED[@]}
    local failed_count=\${#FAILED[@]}
    
    if [ $failed_count -eq 0 ]; then
        if [ $skipped_count -gt 0 ]; then
            echo -e "\${GREEN}✓\${NC} Done! $installed installed, $skipped_count already installed \${DIM}(\${mins}m \${secs}s)\${NC}"
        else
            echo -e "\${GREEN}✓\${NC} All $TOTAL packages installed! \${DIM}(\${mins}m \${secs}s)\${NC}"
        fi
    else
        echo -e "\${YELLOW}!\${NC} $installed installed, $skipped_count skipped, $failed_count failed \${DIM}(\${mins}m \${secs}s)\${NC}"
        echo
        echo -e "\${RED}Failed:\${NC}"
        for pkg in "\${FAILED[@]}"; do
            echo "  • $pkg"
        done
    fi
    echo "─────────────────────────────────────────────────────────────────────────────"
}

`;
}
}),
"[project]/src/lib/scripts/ubuntu.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Ubuntu script - apt-get with dependency auto-fix
__turbopack_context__.s([
    "generateUbuntuScript",
    ()=>generateUbuntuScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/shared.ts [app-ssr] (ecmascript)");
;
function generateUbuntuScript(packages) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateAsciiHeader"])('Ubuntu', packages.length) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSharedUtils"])(packages.length) + `
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

${packages.map(({ app, pkg })=>`install_pkg "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeShellString"])(app.name)}" "${pkg}"`).join('\n')}

print_summary
`;
}
}),
"[project]/src/lib/scripts/debian.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Debian script - apt-get with dependency auto-fix
__turbopack_context__.s([
    "generateDebianScript",
    ()=>generateDebianScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/shared.ts [app-ssr] (ecmascript)");
;
function generateDebianScript(packages) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateAsciiHeader"])('Debian', packages.length) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSharedUtils"])(packages.length) + `
is_installed() { dpkg -l "$1" 2>/dev/null | grep -q "^ii"; }

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

[ "$EUID" -eq 0 ] && { error "Run as regular user, not root."; exit 1; }

while fuser /var/lib/dpkg/lock-frontend >/dev/null 2>&1; do
    warn "Waiting for package manager..."
    sleep 2
done

info "Updating package lists..."
with_retry sudo apt-get update -qq >/dev/null && success "Updated" || warn "Update failed, continuing..."

echo
info "Installing $TOTAL packages"
echo

${packages.map(({ app, pkg })=>`install_pkg "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeShellString"])(app.name)}" "${pkg}"`).join('\n')}

print_summary
`;
}
}),
"[project]/src/lib/scripts/arch.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Arch script - handles both pacman and AUR packages
__turbopack_context__.s([
    "generateArchScript",
    ()=>generateArchScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/shared.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aur$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/aur.ts [app-ssr] (ecmascript)");
;
;
function generateArchScript(packages, helper = 'yay') {
    const aurPackages = packages.filter((p)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aur$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAurPackage"])(p.pkg));
    const officialPackages = packages.filter((p)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aur$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAurPackage"])(p.pkg));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateAsciiHeader"])('Arch Linux', packages.length) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSharedUtils"])(packages.length) + `
is_installed() { pacman -Qi "$1" &>/dev/null; }

install_pacman() {
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
    if output=$(with_retry sudo pacman -S --needed --noconfirm "$pkg"); then
        local elapsed=$(($(date +%s) - start))
        update_avg_time $elapsed
        printf "\\r\\033[K"
        timing "$name" "$elapsed"
        SUCCEEDED+=("$name")
    else
        printf "\\r\\033[K\${RED}✗\${NC} %s\\n" "$name"
        if echo "$output" | grep -q "target not found"; then
            echo -e "    \${DIM}Package not found\${NC}"
        elif echo "$output" | grep -q "signature"; then
            echo -e "    \${DIM}GPG issue - try: sudo pacman-key --refresh-keys\${NC}"
        fi
        FAILED+=("$name")
    fi
}

install_aur() {
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
    if output=$(with_retry ${helper} -S --needed --noconfirm "$pkg"); then
        local elapsed=$(($(date +%s) - start))
        update_avg_time $elapsed
        printf "\\r\\033[K"
        timing "$name" "$elapsed"
        SUCCEEDED+=("$name")
    else
        printf "\\r\\033[K\${RED}✗\${NC} %s\\n" "$name"
        if echo "$output" | grep -q "target not found"; then
            echo -e "    \${DIM}Package not found in AUR\${NC}"
        fi
        FAILED+=("$name")
    fi
}

# ─────────────────────────────────────────────────────────────────────────────

[ "$EUID" -eq 0 ] && { error "Run as regular user, not root."; exit 1; }

while [ -f /var/lib/pacman/db.lck ]; do
    warn "Waiting for pacman lock..."
    sleep 2
done

info "Syncing databases..."
with_retry sudo pacman -Sy --noconfirm >/dev/null && success "Synced" || warn "Sync failed, continuing..."

${aurPackages.length > 0 ? `
if ! command -v ${helper} &>/dev/null; then
    warn "Installing ${helper} for AUR packages..."
    sudo pacman -S --needed --noconfirm git base-devel >/dev/null 2>&1
    tmp=$(mktemp -d)
    git clone https://aur.archlinux.org/${helper}.git "$tmp/${helper}" >/dev/null 2>&1
    (cd "$tmp/${helper}" && makepkg -si --noconfirm >/dev/null 2>&1)
    rm -rf "$tmp"
    command -v ${helper} &>/dev/null && success "${helper} installed" || warn "${helper} install failed"
fi
` : ''}

echo
info "Installing $TOTAL packages"
echo

${officialPackages.map(({ app, pkg })=>`install_pacman "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeShellString"])(app.name)}" "${pkg}"`).join('\n')}
${aurPackages.length > 0 ? `
if command -v ${helper} &>/dev/null; then
${aurPackages.map(({ app, pkg })=>`    install_aur "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeShellString"])(app.name)}" "${pkg}"`).join('\n')}
fi
` : ''}

print_summary
`;
}
}),
"[project]/src/lib/scripts/fedora.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Fedora script - dnf with RPM Fusion auto-enable
__turbopack_context__.s([
    "generateFedoraScript",
    ()=>generateFedoraScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/shared.ts [app-ssr] (ecmascript)");
;
function generateFedoraScript(packages) {
    const rpmFusionPkgs = [
        'steam',
        'vlc',
        'ffmpeg',
        'obs-studio'
    ];
    const needsRpmFusion = packages.some((p)=>rpmFusionPkgs.includes(p.pkg));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateAsciiHeader"])('Fedora', packages.length) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSharedUtils"])(packages.length) + `
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

${packages.map(({ app, pkg })=>`install_pkg "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeShellString"])(app.name)}" "${pkg}"`).join('\n')}

print_summary
`;
}
}),
"[project]/src/lib/scripts/opensuse.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// openSUSE script - zypper
__turbopack_context__.s([
    "generateOpenSUSEScript",
    ()=>generateOpenSUSEScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/shared.ts [app-ssr] (ecmascript)");
;
function generateOpenSUSEScript(packages) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateAsciiHeader"])('openSUSE', packages.length) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSharedUtils"])(packages.length) + `
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

${packages.map(({ app, pkg })=>`install_pkg "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeShellString"])(app.name)}" "${pkg}"`).join('\n')}

print_summary
`;
}
}),
"[project]/src/lib/scripts/nix.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Nix script - nix-env
__turbopack_context__.s([
    "generateNixScript",
    ()=>generateNixScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/shared.ts [app-ssr] (ecmascript)");
;
function generateNixScript(packages) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateAsciiHeader"])('Nix', packages.length) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSharedUtils"])(packages.length) + `
is_installed() { nix-env -q 2>/dev/null | grep -q "$1"; }

install_pkg() {
    local name=$1 attr=$2
    CURRENT=$((CURRENT + 1))
    
    if is_installed "$attr"; then
        skip "$name"
        SKIPPED+=("$name")
        return 0
    fi
    
    show_progress $CURRENT $TOTAL "$name"
    local start=$(date +%s)
    
    local output
    if output=$(with_retry nix-env -iA "nixpkgs.$attr"); then
        local elapsed=$(($(date +%s) - start))
        update_avg_time $elapsed
        printf "\\r\\033[K"
        timing "$name" "$elapsed"
        SUCCEEDED+=("$name")
    else
        printf "\\r\\033[K\${RED}✗\${NC} %s\\n" "$name"
        if echo "$output" | grep -q "attribute.*not found"; then
            echo -e "    \${DIM}Attribute not found\${NC}"
        fi
        FAILED+=("$name")
    fi
}

# ─────────────────────────────────────────────────────────────────────────────

command -v nix-env &>/dev/null || { error "nix-env not found"; exit 1; }

info "Updating channels..."
with_retry nix-channel --update >/dev/null && success "Updated" || warn "Update failed"

echo
info "Installing $TOTAL packages"
echo

${packages.map(({ app, pkg })=>`install_pkg "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeShellString"])(app.name)}" "${pkg}"`).join('\n')}

print_summary
echo
info "Restart your shell for new commands."
`;
}
}),
"[project]/src/lib/scripts/flatpak.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Flatpak script - parallel install when 3+ packages
__turbopack_context__.s([
    "generateFlatpakScript",
    ()=>generateFlatpakScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/shared.ts [app-ssr] (ecmascript)");
;
function generateFlatpakScript(packages) {
    const parallel = packages.length >= 3;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateAsciiHeader"])('Flatpak', packages.length) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSharedUtils"])(packages.length) + `
is_installed() { flatpak list --app 2>/dev/null | grep -q "$1"; }

${parallel ? `
# Parallel install for Flatpak
install_parallel() {
    local pids=()
    local names=()
    local start=$(date +%s)
    
    for pair in "$@"; do
        local name="\${pair%%|*}"
        local appid="\${pair##*|}"
        
        if is_installed "$appid"; then
            skip "$name"
            SKIPPED+=("$name")
            continue
        fi
        
        (flatpak install flathub -y "$appid" >/dev/null 2>&1) &
        pids+=($!)
        names+=("$name")
    done
    
    local total=\${#pids[@]}
    local done_count=0
    
    if [ $total -eq 0 ]; then
        return
    fi
    
    info "Installing $total apps in parallel..."
    
    for i in "\${!pids[@]}"; do
        wait \${pids[$i]}
        local status=$?
        done_count=$((done_count + 1))
        
        if [ $status -eq 0 ]; then
            SUCCEEDED+=("\${names[$i]}")
            success "\${names[$i]}"
        else
            FAILED+=("\${names[$i]}")
            error "\${names[$i]} failed"
        fi
    done
    
    local elapsed=$(($(date +%s) - start))
    echo -e "\${DIM}Parallel install took \${elapsed}s\${NC}"
}
` : `
install_pkg() {
    local name=$1 appid=$2
    CURRENT=$((CURRENT + 1))
    
    if is_installed "$appid"; then
        skip "$name"
        SKIPPED+=("$name")
        return 0
    fi
    
    show_progress $CURRENT $TOTAL "$name"
    local start=$(date +%s)
    
    if with_retry flatpak install flathub -y "$appid" >/dev/null; then
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
`}

# ─────────────────────────────────────────────────────────────────────────────

command -v flatpak &>/dev/null || { 
    error "Flatpak not installed"
    info "Install: sudo apt/dnf/pacman install flatpak"
    exit 1
}

if ! flatpak remotes 2>/dev/null | grep -q flathub; then
    info "Adding Flathub..."
    flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
    success "Flathub added"
fi

echo
info "Installing $TOTAL packages"
echo

${parallel ? `install_parallel ${packages.map(({ app, pkg })=>`"${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeShellString"])(app.name)}|${pkg}"`).join(' ')}` : packages.map(({ app, pkg })=>`install_pkg "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeShellString"])(app.name)}" "${pkg}"`).join('\n')}

print_summary
echo
info "Restart session for apps in menu."
`;
}
}),
"[project]/src/lib/scripts/snap.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Snap script
__turbopack_context__.s([
    "generateSnapScript",
    ()=>generateSnapScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/shared.ts [app-ssr] (ecmascript)");
;
function generateSnapScript(packages) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateAsciiHeader"])('Snap', packages.length) + (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSharedUtils"])(packages.length) + `
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

${packages.map(({ app, pkg })=>`install_pkg "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeShellString"])(app.name)}" "${pkg}"`).join('\n')}

print_summary
`;
}
}),
"[project]/src/lib/scripts/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Re-exports all distro script generators
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/shared.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$ubuntu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/ubuntu.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$debian$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/debian.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$arch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/arch.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$fedora$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/fedora.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$opensuse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/opensuse.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$nix$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/nix.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$flatpak$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/flatpak.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$snap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/snap.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
}),
"[project]/src/lib/generateInstallScript.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Main entry point for generating install scripts.
// Each distro has its own module - keeps things sane.
__turbopack_context__.s([
    "generateInstallScript",
    ()=>generateInstallScript,
    "generateSimpleCommand",
    ()=>generateSimpleCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/scripts/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/shared.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$ubuntu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/ubuntu.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$debian$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/debian.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$arch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/arch.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$fedora$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/fedora.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$opensuse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/opensuse.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$nix$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/nix.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$flatpak$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/flatpak.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$snap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scripts/snap.ts [app-ssr] (ecmascript)");
;
;
function generateInstallScript(options) {
    const { distroId, selectedAppIds, helper = 'yay' } = options;
    const distro = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distros"].find((d)=>d.id === distroId);
    if (!distro) return '#!/bin/bash\necho "Error: Unknown distribution"\nexit 1';
    const packages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectedPackages"])(selectedAppIds, distroId);
    if (packages.length === 0) return '#!/bin/bash\necho "No packages selected"\nexit 0';
    switch(distroId){
        case 'ubuntu':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$ubuntu$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateUbuntuScript"])(packages);
        case 'debian':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$debian$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateDebianScript"])(packages);
        case 'arch':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$arch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateArchScript"])(packages, helper);
        case 'fedora':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$fedora$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateFedoraScript"])(packages);
        case 'opensuse':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$opensuse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateOpenSUSEScript"])(packages);
        case 'nix':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$nix$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateNixScript"])(packages);
        case 'flatpak':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$flatpak$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateFlatpakScript"])(packages);
        case 'snap':
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$snap$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateSnapScript"])(packages);
        default:
            return '#!/bin/bash\necho "Unsupported distribution"\nexit 1';
    }
}
function generateSimpleCommand(selectedAppIds, distroId) {
    const packages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scripts$2f$shared$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSelectedPackages"])(selectedAppIds, distroId);
    if (packages.length === 0) return '# No packages selected';
    const pkgList = packages.map((p)=>p.pkg).join(' ');
    switch(distroId){
        case 'ubuntu':
        case 'debian':
            return `sudo apt install -y ${pkgList}`;
        case 'arch':
            return `yay -S --needed --noconfirm ${pkgList}`;
        case 'fedora':
            return `sudo dnf install -y ${pkgList}`;
        case 'opensuse':
            return `sudo zypper install -y ${pkgList}`;
        case 'nix':
            return `nix-env -iA ${packages.map((p)=>`nixpkgs.${p.pkg}`).join(' ')}`;
        case 'flatpak':
            return `flatpak install flathub -y ${pkgList}`;
        case 'snap':
            if (packages.length === 1) return `sudo snap install ${pkgList}`;
            return packages.map((p)=>`sudo snap install ${p.pkg}`).join(' && ');
        default:
            return `# Install: ${pkgList}`;
    }
}
}),
"[project]/src/components/command/ShortcutsBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShortcutsBar",
    ()=>ShortcutsBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
const ShortcutsBar = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(function ShortcutsBar({ searchQuery, onSearchChange, searchInputRef, selectedCount, distroName, showAur, selectedHelper, setSelectedHelper }, ref) {
    const handleKeyDown = (e)=>{
        if (e.key === 'Escape' || e.key === 'Enter') {
            e.preventDefault();
            e.target.blur();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] font-mono text-xs rounded-lg overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-stretch justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-stretch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[var(--text-primary)] text-[var(--bg-primary)] px-3 py-1 font-bold flex items-center whitespace-nowrap",
                            children: distroName.toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                            lineNumber: 43,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1.5 px-3 py-1 bg-[var(--bg-secondary)] border-r border-[var(--border-primary)]/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[var(--text-muted)]",
                                    children: "/"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 49,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: searchInputRef,
                                    type: "text",
                                    value: searchQuery,
                                    onChange: (e)=>onSearchChange(e.target.value),
                                    onKeyDown: handleKeyDown,
                                    placeholder: "搜索...",
                                    className: " w-20 sm:w-28 bg-transparent text-[var(--text-primary)] placeholder:text-[var(--text-muted)]/50 outline-none "
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 50,
                                    columnNumber: 29
                                }, this),
                                searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>onSearchChange(''),
                                    className: "text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-3 h-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                        lineNumber: 70,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 66,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                            lineNumber: 48,
                            columnNumber: 25
                        }, this),
                        selectedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center px-3 py-1 text-[var(--text-muted)] border-r border-[var(--border-primary)]/30 whitespace-nowrap",
                            children: [
                                "[",
                                selectedCount,
                                " 个应用]"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                            lineNumber: 77,
                            columnNumber: 29
                        }, this),
                        showAur && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-stretch border-r border-[var(--border-primary)]/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedHelper('yay'),
                                    className: `px-3 flex items-center gap-1.5 text-[10px] font-medium transition-colors border-r border-[var(--border-primary)]/30 whitespace-nowrap ${selectedHelper === 'yay' ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono opacity-50",
                                            children: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 89,
                                            columnNumber: 37
                                        }, this),
                                        "yay"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 85,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedHelper('paru'),
                                    className: `px-3 flex items-center gap-1.5 text-[10px] font-medium transition-colors whitespace-nowrap ${selectedHelper === 'paru' ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-bold' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono opacity-50",
                                            children: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 96,
                                            columnNumber: 37
                                        }, this),
                                        "paru"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 92,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                            lineNumber: 84,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                    lineNumber: 41,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-stretch",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden sm:flex items-center gap-3 px-3 py-1 text-[var(--text-muted)] text-[10px] border-l border-[var(--border-primary)]/30",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden lg:inline",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-[var(--text-secondary)]",
                                            children: "←↓↑→ "
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 107,
                                            columnNumber: 64
                                        }, this),
                                        "/",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-[var(--text-secondary)]",
                                            children: " hjkl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 107,
                                            columnNumber: 118
                                        }, this),
                                        " 导航"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 107,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden lg:inline opacity-30",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 108,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-[var(--text-secondary)]",
                                            children: "/"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 110,
                                            columnNumber: 35
                                        }, this),
                                        " 搜索"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 110,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "opacity-30",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 111,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-[var(--text-secondary)]",
                                            children: "空格"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 112,
                                            columnNumber: 35
                                        }, this),
                                        " 切换"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 112,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "opacity-30",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 113,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-[var(--text-secondary)]",
                                            children: "y"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 114,
                                            columnNumber: 35
                                        }, this),
                                        " 复制"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 114,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "opacity-30",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 115,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-[var(--text-secondary)]",
                                            children: "d"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 116,
                                            columnNumber: 35
                                        }, this),
                                        " 下载"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 116,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "opacity-30",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 117,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-[var(--text-secondary)]",
                                            children: "c"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 118,
                                            columnNumber: 35
                                        }, this),
                                        " 清空"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 118,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "opacity-30",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 119,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-[var(--text-secondary)]",
                                            children: "t"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 120,
                                            columnNumber: 35
                                        }, this),
                                        " 主题"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 120,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "opacity-30",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 121,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-[var(--text-secondary)]",
                                            children: "Tab"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 122,
                                            columnNumber: 35
                                        }, this),
                                        " 预览"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 122,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "opacity-30",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 123,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-[var(--text-secondary)]",
                                            children: "Esc"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 124,
                                            columnNumber: 35
                                        }, this),
                                        " 返回"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "opacity-30",
                                    children: "·"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 125,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                            className: "text-[var(--text-secondary)]",
                                            children: "?"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                            lineNumber: 126,
                                            columnNumber: 35
                                        }, this),
                                        " 帮助"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                                    lineNumber: 126,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                            lineNumber: 105,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[var(--text-primary)] text-[var(--bg-primary)] px-3 py-1 flex items-center font-bold text-xs tracking-wider",
                            children: "TUX"
                        }, void 0, false, {
                            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                            lineNumber: 130,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/command/ShortcutsBar.tsx",
                    lineNumber: 104,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/command/ShortcutsBar.tsx",
            lineNumber: 39,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/command/ShortcutsBar.tsx",
        lineNumber: 38,
        columnNumber: 13
    }, this);
});
}),
"[project]/src/components/command/AurFloatingCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AurFloatingCard",
    ()=>AurFloatingCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
'use client';
;
;
;
function AurFloatingCard({ show, aurAppNames, hasYayInstalled, setHasYayInstalled, selectedHelper, setSelectedHelper }) {
    const [dismissed, setDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isExiting, setIsExiting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmation, setShowConfirmation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Track if user has answered the first question
    const [hasAnswered, setHasAnswered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Track if user has selected a helper (completed flow)
    const [helperChosen, setHelperChosen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Track if user has interacted (dismissed or selected) to prevent nagging - use ref to persist
    const userInteractedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Reset when new AUR packages appear, BUT ONLY if user hasn't interacted yet
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show && aurAppNames.length > 0 && !userInteractedRef.current) {
            setDismissed(false);
            setIsExiting(false);
            setShowConfirmation(false);
            setHelperChosen(false);
            setHasAnswered(null);
        }
    }, [
        aurAppNames.length,
        show
    ]);
    if (!show || dismissed) return null;
    const handleFirstAnswer = (hasHelper)=>{
        setHasYayInstalled(hasHelper);
        setHasAnswered(hasHelper);
    };
    const handleHelperSelect = (helper)=>{
        setSelectedHelper(helper);
        setHelperChosen(true);
        userInteractedRef.current = true; // Don't ask again
        // Start exit animation after a brief moment
        setTimeout(()=>{
            setIsExiting(true);
            setTimeout(()=>{
                setShowConfirmation(true);
            }, 250);
        }, 400);
    };
    const handleDismiss = ()=>{
        userInteractedRef.current = true; // Don't ask again
        setIsExiting(true);
        setTimeout(()=>{
            setDismissed(true);
            setIsExiting(false);
        }, 200);
    };
    const handleConfirmationDismiss = ()=>{
        setDismissed(true);
    };
    // Show confirmation message after selecting helper, auto-dismiss after 3s
    if (showConfirmation) {
        // Auto dismiss after 3 seconds
        setTimeout(()=>{
            setDismissed(true);
        }, 3000);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-4 right-4 z-30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[13px] text-[var(--text-muted)]",
                style: {
                    animation: 'slideInFromRight 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                },
                children: "您可以后续在预览标签中修改"
            }, void 0, false, {
                fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                lineNumber: 88,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/command/AurFloatingCard.tsx",
            lineNumber: 87,
            columnNumber: 13
        }, this);
    }
    // Hide cards while exiting
    if (isExiting && helperChosen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-4 right-4 z-30 flex flex-col gap-3 items-end",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-72 bg-[var(--bg-secondary)] backdrop-blur-xl border border-[var(--border-primary)]/60 rounded-2xl shadow-xl shadow-black/10 overflow-hidden",
                    style: {
                        animation: 'slideOutToRight 0.25s ease-out forwards'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                        lineNumber: 108,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, this),
                hasAnswered !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-72 bg-[var(--bg-secondary)] backdrop-blur-xl border border-[var(--border-primary)]/60 rounded-2xl shadow-xl shadow-black/10 overflow-hidden",
                    style: {
                        animation: 'slideOutToRight 0.2s ease-out forwards'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                        lineNumber: 115,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                    lineNumber: 111,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/command/AurFloatingCard.tsx",
            lineNumber: 103,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-4 right-4 z-30 flex flex-col gap-3 items-end",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
                    w-72 bg-[var(--bg-secondary)] backdrop-blur-xl 
                    border border-[var(--border-primary)]/60 
                    rounded-2xl shadow-xl shadow-black/10
                    overflow-hidden
                    transition-[box-shadow,border-color] duration-200
                `,
                style: {
                    animation: isExiting ? 'slideOutToRight 0.2s ease-out forwards' : 'slideInFromRight 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 flex items-start justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-[var(--text-muted)] tracking-wide uppercase mb-1",
                                        children: [
                                            aurAppNames.length,
                                            " 个 AUR 软件包"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                        lineNumber: 142,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[15px] text-[var(--text-primary)] font-medium leading-snug",
                                        children: "您是否已安装 AUR 助手？"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                        lineNumber: 145,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDismiss,
                                className: "text-[var(--text-muted)]/60 hover:text-[var(--text-primary)] transition-colors duration-150 p-1 -mr-1 -mt-1 rounded-lg hover:bg-[var(--bg-hover)]",
                                title: "关闭",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                    lineNumber: 154,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                lineNumber: 149,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-3 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleFirstAnswer(true),
                                className: `
                            flex-1 py-2 px-4 rounded-xl text-sm font-medium 
                            transition-[background-color,color] duration-200 ease-out
                            ${hasAnswered === true ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-sm' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}
                        `,
                                children: "是"
                            }, void 0, false, {
                                fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                lineNumber: 160,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleFirstAnswer(false),
                                className: `
                            flex-1 py-2 px-4 rounded-xl text-sm font-medium 
                            transition-[background-color,color] duration-200 ease-out
                            ${hasAnswered === false ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-sm' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}
                        `,
                                children: "否"
                            }, void 0, false, {
                                fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                lineNumber: 173,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                        lineNumber: 159,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-3 -mt-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] text-[var(--text-muted)]/50 leading-relaxed",
                            children: "可以在预览窗口中随时修改"
                        }, void 0, false, {
                            fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                            lineNumber: 190,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                        lineNumber: 189,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                lineNumber: 125,
                columnNumber: 13
            }, this),
            hasAnswered !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
                        w-72 bg-[var(--bg-secondary)] backdrop-blur-xl 
                        border border-[var(--border-primary)]/60 
                        rounded-2xl shadow-xl shadow-black/10
                        overflow-hidden
                    `,
                style: {
                    animation: isExiting ? 'slideOutToRight 0.15s ease-out forwards' : 'slideInFromRightSecond 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) 0.05s forwards',
                    opacity: 0
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[15px] text-[var(--text-primary)] font-medium",
                                children: hasAnswered ? '您使用的是哪一个？' : '要安装哪一个？'
                            }, void 0, false, {
                                fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                lineNumber: 214,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDismiss,
                                className: "text-[var(--text-muted)]/60 hover:text-[var(--text-primary)] transition-colors duration-150 p-1 -mr-1 rounded-lg hover:bg-[var(--bg-hover)]",
                                title: "关闭",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                    lineNumber: 225,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                lineNumber: 220,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                        lineNumber: 213,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 pb-4 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleHelperSelect('yay'),
                                className: `
                                flex-1 py-2.5 px-4 rounded-xl text-sm font-medium 
                                transition-[background-color,color] duration-200 ease-out
                                ${selectedHelper === 'yay' && helperChosen ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-sm' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}
                            `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block font-semibold",
                                        children: "yay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                        lineNumber: 242,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block text-[10px] mt-0.5 ${selectedHelper === 'yay' && helperChosen ? 'opacity-70' : 'opacity-50'}`,
                                        children: "推荐"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                        lineNumber: 243,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                lineNumber: 231,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleHelperSelect('paru'),
                                className: `
                                flex-1 py-2.5 px-4 rounded-xl text-sm font-medium 
                                transition-[background-color,color] duration-200 ease-out
                                ${selectedHelper === 'paru' && helperChosen ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-sm' : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]'}
                            `,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block font-semibold",
                                        children: "paru"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                        lineNumber: 258,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `block text-[10px] mt-0.5 ${selectedHelper === 'paru' && helperChosen ? 'opacity-70' : 'opacity-50'}`,
                                        children: "Rust 开发"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                        lineNumber: 259,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                                lineNumber: 247,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                        lineNumber: 230,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/command/AurFloatingCard.tsx",
                lineNumber: 198,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/command/AurFloatingCard.tsx",
        lineNumber: 123,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/command/AurDrawerSettings.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AurDrawerSettings",
    ()=>AurDrawerSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function AurDrawerSettings({ aurAppNames, hasYayInstalled, setHasYayInstalled, selectedHelper, setSelectedHelper }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-primary)]/40 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 border-b border-[var(--border-primary)]/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-[var(--text-muted)] leading-relaxed",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium text-[var(--text-primary)]",
                            children: "AUR 软件包: "
                        }, void 0, false, {
                            fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this),
                        aurAppNames.join(', ')
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                    lineNumber: 23,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 flex flex-col sm:flex-row sm:items-center gap-4 text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-secondary)] font-medium",
                                children: "AUR 助手:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex bg-[var(--bg-secondary)] rounded-lg p-1 border border-[var(--border-primary)]/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedHelper('yay'),
                                        className: `relative px-3 py-1.5 rounded-md font-medium transition-[background-color,color,transform] duration-200 ease-out ${selectedHelper === 'yay' ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`,
                                        style: {
                                            transform: selectedHelper === 'yay' ? 'scale(1)' : 'scale(0.98)'
                                        },
                                        children: [
                                            "yay ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-60 font-normal",
                                                children: "(Go)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                                                lineNumber: 45,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                                        lineNumber: 35,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedHelper('paru'),
                                        className: `relative px-3 py-1.5 rounded-md font-medium transition-[background-color,color,transform] duration-200 ease-out ${selectedHelper === 'paru' ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`,
                                        style: {
                                            transform: selectedHelper === 'paru' ? 'scale(1)' : 'scale(0.98)'
                                        },
                                        children: [
                                            "paru ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "opacity-60 font-normal",
                                                children: "(Rust)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                                                lineNumber: 57,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                                        lineNumber: 47,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                                lineNumber: 34,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-px h-5 bg-[var(--border-primary)]/40 hidden sm:block"
                    }, void 0, false, {
                        fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--text-secondary)] font-medium",
                                children: "已安装？"
                            }, void 0, false, {
                                fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex bg-[var(--bg-secondary)] rounded-lg p-1 border border-[var(--border-primary)]/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setHasYayInstalled(true),
                                        className: `relative px-3 py-1.5 rounded-md font-medium transition-[background-color,color,transform] duration-200 ease-out ${hasYayInstalled ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`,
                                        style: {
                                            transform: hasYayInstalled ? 'scale(1)' : 'scale(0.98)'
                                        },
                                        children: "是，直接使用"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setHasYayInstalled(false),
                                        className: `relative px-3 py-1.5 rounded-md font-medium transition-[background-color,color,transform] duration-200 ease-out ${!hasYayInstalled ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] shadow-sm' : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'}`,
                                        style: {
                                            transform: !hasYayInstalled ? 'scale(1)' : 'scale(0.98)'
                                        },
                                        children: "否，请安装"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                                        lineNumber: 81,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/command/AurDrawerSettings.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/command/CommandDrawer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandDrawer",
    ()=>CommandDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$AurDrawerSettings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/command/AurDrawerSettings.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function CommandDrawer({ isOpen, isClosing, onClose, command, selectedCount, copied, onCopy, onDownload, showAur, aurAppNames, hasYayInstalled, setHasYayInstalled, selectedHelper, setSelectedHelper }) {
    if (!isOpen) return null;
    const handleCopyAndClose = ()=>{
        onCopy();
        setTimeout(onClose, 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 backdrop-blur-sm z-40",
                onClick: onClose,
                "aria-hidden": "true",
                style: {
                    animation: isClosing ? 'fadeOut 0.3s ease-out forwards' : 'fadeIn 0.3s ease-out'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "drawer-title",
                className: "fixed z-50 bg-[var(--bg-secondary)] border border-[var(--border-primary)] shadow-2xl bottom-0 left-0 right-0 rounded-t-2xl md:bottom-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl md:max-w-2xl md:w-[90vw]",
                style: {
                    animation: isClosing ? 'slideDown 0.3s cubic-bezier(0.32, 0, 0.67, 0) forwards' : 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    maxHeight: '80vh'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center pt-3 pb-2 md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-12 h-1.5 bg-[var(--text-muted)]/40 rounded-full cursor-pointer hover:bg-[var(--text-muted)] transition-colors",
                            onClick: onClose,
                            "aria-label": "关闭抽屉"
                        }, void 0, false, {
                            fileName: "[project]/src/components/command/CommandDrawer.tsx",
                            lineNumber: 75,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 sm:px-6 pb-3 md:pt-4 border-b border-[var(--border-primary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-emerald-500 font-bold text-sm",
                                            children: "$"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                            lineNumber: 86,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                        lineNumber: 85,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                id: "drawer-title",
                                                className: "text-sm font-semibold text-[var(--text-primary)]",
                                                children: "终端命令"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                lineNumber: 89,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[var(--text-muted)]",
                                                children: [
                                                    selectedCount,
                                                    " 个应用 • 按 Esc 关闭"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                lineNumber: 90,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                        lineNumber: 88,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-[var(--bg-hover)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors",
                                "aria-label": "关闭抽屉",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                    lineNumber: 98,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                lineNumber: 93,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-6 overflow-y-auto",
                        style: {
                            maxHeight: 'calc(80vh - 200px)'
                        },
                        children: [
                            showAur && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$AurDrawerSettings$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AurDrawerSettings"], {
                                aurAppNames: aurAppNames,
                                hasYayInstalled: hasYayInstalled,
                                setHasYayInstalled: setHasYayInstalled,
                                selectedHelper: selectedHelper,
                                setSelectedHelper: setSelectedHelper
                            }, void 0, false, {
                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                lineNumber: 106,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-[#1a1a1a] rounded-xl overflow-hidden border border-[var(--border-primary)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between px-4 py-2 bg-[#252525] border-b border-[var(--border-primary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-full bg-red-500/80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-full bg-yellow-500/80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-3 h-3 rounded-full bg-green-500/80"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-2 text-xs text-[var(--text-muted)]",
                                                        children: "bash"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                lineNumber: 118,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden md:flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: onDownload,
                                                        className: "h-7 px-3 flex items-center gap-1.5 rounded-md bg-[var(--bg-tertiary)]/50 text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors text-xs font-medium",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 37
                                                            }, this),
                                                            "下载"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleCopyAndClose,
                                                        className: `h-7 px-3 flex items-center gap-1.5 rounded-md text-xs font-medium transition-colors ${copied ? 'bg-emerald-600 text-white' : 'bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white'}`,
                                                        children: [
                                                            copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 47
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                className: "w-3.5 h-3.5"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 83
                                                            }, this),
                                                            copied ? '已复制!' : '复制'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                lineNumber: 125,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                        lineNumber: 117,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 font-mono text-sm overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-emerald-400 select-none shrink-0",
                                                    children: "$"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: "text-gray-300 break-all whitespace-pre-wrap",
                                                    style: {
                                                        lineHeight: '1.6'
                                                    },
                                                    children: command
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                            lineNumber: 146,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                        lineNumber: 145,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                lineNumber: 116,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden flex flex-col items-stretch gap-3 px-4 py-4 border-t border-[var(--border-primary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onDownload,
                                className: "flex-1 h-14 flex items-center justify-center gap-2 rounded-xl bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] transition-colors font-medium text-base",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                        lineNumber: 162,
                                        columnNumber: 25
                                    }, this),
                                    "下载脚本"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCopyAndClose,
                                className: `flex-1 h-14 flex items-center justify-center gap-2 rounded-xl font-medium text-base transition-colors ${copied ? 'bg-emerald-600 text-white' : 'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90'}`,
                                children: [
                                    copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                        lineNumber: 172,
                                        columnNumber: 35
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                        lineNumber: 172,
                                        columnNumber: 67
                                    }, this),
                                    copied ? '已复制!' : '复制命令'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                                lineNumber: 165,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/command/CommandDrawer.tsx",
                        lineNumber: 157,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/command/CommandDrawer.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/command/CommandFooter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandFooter",
    ()=>CommandFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$generateInstallScript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/generateInstallScript.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/analytics.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTheme.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$ShortcutsBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/command/ShortcutsBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$AurFloatingCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/command/AurFloatingCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$CommandDrawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/command/CommandDrawer.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
function CommandFooter({ command, selectedCount, selectedDistro, selectedApps, hasAurPackages, aurAppNames, hasYayInstalled, setHasYayInstalled, searchQuery, onSearchChange, searchInputRef, clearAll, selectedHelper, setSelectedHelper }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [drawerOpen, setDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [drawerClosing, setDrawerClosing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toggle: toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const closeDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setDrawerClosing(true);
        setTimeout(()=>{
            setDrawerOpen(false);
            setDrawerClosing(false);
        }, 250);
    }, []);
    // Close drawer on Escape
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!drawerOpen) return;
        const handleEscape = (e)=>{
            if (e.key === 'Escape') closeDrawer();
        };
        document.addEventListener('keydown', handleEscape);
        return ()=>document.removeEventListener('keydown', handleEscape);
    }, [
        drawerOpen,
        closeDrawer
    ]);
    const showAur = selectedDistro === 'arch' && hasAurPackages;
    const distroDisplayName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distros"].find((d)=>d.id === selectedDistro)?.name || selectedDistro;
    const handleCopy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (selectedCount === 0) return;
        await navigator.clipboard.writeText(command);
        setCopied(true);
        const distroName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distros"].find((d)=>d.id === selectedDistro)?.name || selectedDistro;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analytics"].commandCopied(distroName, selectedCount);
        setTimeout(()=>setCopied(false), 3000);
    }, [
        command,
        selectedCount,
        selectedDistro
    ]);
    const handleDownload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (selectedCount === 0) return;
        const script = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$generateInstallScript$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateInstallScript"])({
            distroId: selectedDistro,
            selectedAppIds: selectedApps,
            helper: selectedHelper
        });
        const blob = new Blob([
            script
        ], {
            type: 'text/x-shellscript'
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `linux-installer-${selectedDistro}.sh`;
        a.click();
        setTimeout(()=>URL.revokeObjectURL(url), 1000);
        const distroName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["distros"].find((d)=>d.id === selectedDistro)?.name || selectedDistro;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$analytics$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["analytics"].scriptDownloaded(distroName, selectedCount);
    }, [
        selectedCount,
        selectedDistro,
        selectedApps,
        selectedHelper
    ]);
    // Global keyboard shortcuts (vim-like)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                return;
            }
            // Ignore modifier keys (prevents conflicts with browser shortcuts)
            if (e.ctrlKey || e.altKey || e.metaKey) return;
            const alwaysEnabled = [
                't',
                'c'
            ];
            if (selectedCount === 0 && !alwaysEnabled.includes(e.key)) return;
            switch(e.key){
                case 'y':
                    handleCopy();
                    break;
                case 'd':
                    handleDownload();
                    break;
                case 't':
                    document.body.classList.add('theme-flash');
                    setTimeout(()=>document.body.classList.remove('theme-flash'), 150);
                    toggleTheme();
                    break;
                case 'c':
                    clearAll();
                    break;
                case '1':
                    if (showAur) setSelectedHelper('yay');
                    break;
                case '2':
                    if (showAur) setSelectedHelper('paru');
                    break;
                case 'Tab':
                    e.preventDefault();
                    if (selectedCount > 0) setDrawerOpen((prev)=>!prev);
                    break;
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        selectedCount,
        toggleTheme,
        clearAll,
        showAur,
        setSelectedHelper,
        handleCopy,
        handleDownload
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$AurFloatingCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AurFloatingCard"], {
                show: showAur,
                aurAppNames: aurAppNames,
                hasYayInstalled: hasYayInstalled,
                setHasYayInstalled: setHasYayInstalled,
                selectedHelper: selectedHelper,
                setSelectedHelper: setSelectedHelper
            }, void 0, false, {
                fileName: "[project]/src/components/command/CommandFooter.tsx",
                lineNumber: 143,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$CommandDrawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandDrawer"], {
                isOpen: drawerOpen,
                isClosing: drawerClosing,
                onClose: closeDrawer,
                command: command,
                selectedCount: selectedCount,
                copied: copied,
                onCopy: handleCopy,
                onDownload: handleDownload,
                showAur: showAur,
                aurAppNames: aurAppNames,
                hasYayInstalled: hasYayInstalled,
                setHasYayInstalled: setHasYayInstalled,
                selectedHelper: selectedHelper,
                setSelectedHelper: setSelectedHelper
            }, void 0, false, {
                fileName: "[project]/src/components/command/CommandFooter.tsx",
                lineNumber: 153,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-0 left-0 right-0 p-3",
                style: {
                    zIndex: 10,
                    animation: 'footerSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-[85%] mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -inset-12 pointer-events-none",
                            style: {
                                background: 'var(--bg-primary)',
                                filter: 'blur(40px)',
                                opacity: 1,
                                zIndex: -1
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/command/CommandFooter.tsx",
                            lineNumber: 180,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative flex flex-col gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$ShortcutsBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShortcutsBar"], {
                                    searchQuery: searchQuery,
                                    onSearchChange: onSearchChange,
                                    searchInputRef: searchInputRef,
                                    selectedCount: selectedCount,
                                    distroName: distroDisplayName,
                                    showAur: showAur,
                                    selectedHelper: selectedHelper,
                                    setSelectedHelper: setSelectedHelper
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/CommandFooter.tsx",
                                    lineNumber: 192,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[var(--bg-tertiary)] font-mono text-xs rounded-lg overflow-hidden border border-[var(--border-primary)]/40 shadow-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-stretch",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>selectedCount > 0 && setDrawerOpen(true),
                                                disabled: selectedCount === 0,
                                                className: `flex items-center gap-2 px-4 py-3 border-r border-[var(--border-primary)]/30 transition-colors shrink-0 bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 hover:text-indigo-300 ${selectedCount === 0 ? 'opacity-50 cursor-not-allowed' : ''}`,
                                                title: "切换预览 (Tab)",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                        className: "w-3.5 h-3.5 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold whitespace-nowrap",
                                                        children: "预览"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 37
                                                    }, this),
                                                    selectedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] opacity-60 ml-0.5 whitespace-nowrap",
                                                        children: [
                                                            "[",
                                                            selectedCount,
                                                            "]"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                lineNumber: 207,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0 flex items-center justify-center px-4 py-4 overflow-hidden bg-[var(--bg-secondary)] cursor-pointer hover:bg-[var(--bg-hover)] transition-colors group",
                                                onClick: ()=>selectedCount > 0 && setDrawerOpen(true),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    className: `whitespace-nowrap overflow-x-auto command-scroll leading-none ${selectedCount > 0 ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`,
                                                    children: command
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                lineNumber: 221,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleDownload,
                                                disabled: selectedCount === 0,
                                                className: `flex items-center gap-1.5 px-3 py-3 border-l border-[var(--border-primary)]/30 transition-colors ${selectedCount > 0 ? 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]' : 'text-[var(--text-muted)] opacity-50 cursor-not-allowed'}`,
                                                title: "下载脚本 (d)",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "w-3 h-3 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden sm:inline whitespace-nowrap",
                                                        children: "下载"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                lineNumber: 231,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCopy,
                                                disabled: selectedCount === 0,
                                                className: `flex items-center gap-1.5 px-3 py-3 border-l border-[var(--border-primary)]/30 transition-colors ${selectedCount > 0 ? copied ? 'bg-emerald-600 text-white' : 'bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90' : 'text-[var(--text-muted)] opacity-50 cursor-not-allowed'}`,
                                                title: "复制命令 (y)",
                                                children: [
                                                    copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "w-3 h-3 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 47
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "w-3 h-3 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                        lineNumber: 256,
                                                        columnNumber: 88
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "hidden sm:inline whitespace-nowrap",
                                                        children: copied ? '已复制!' : '复制'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                        lineNumber: 257,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/command/CommandFooter.tsx",
                                                lineNumber: 245,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/command/CommandFooter.tsx",
                                        lineNumber: 205,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/CommandFooter.tsx",
                                    lineNumber: 204,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/command/CommandFooter.tsx",
                            lineNumber: 190,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/command/CommandFooter.tsx",
                    lineNumber: 178,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/command/CommandFooter.tsx",
                lineNumber: 171,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/command/AurPopover.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AurPopover",
    ()=>AurPopover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
'use client';
;
;
;
function AurPopover({ aurAppNames, hasYayInstalled, setHasYayInstalled }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const popoverRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleClickOutside = (e)=>{
            if (popoverRef.current && !popoverRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        ref: popoverRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: `
                    flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium
                    transition-[background-color,color] duration-200
                    ${isOpen ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-500/10 text-amber-500 hover:bg-amber-500/20'}
                `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "w-3.5 h-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/command/AurPopover.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "AUR (",
                            aurAppNames.length,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/command/AurPopover.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/command/AurPopover.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-full left-0 mb-2 w-64 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl shadow-2xl overflow-hidden",
                style: {
                    animation: 'tooltipSlideUp 0.2s ease-out'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 border-b border-[var(--border-primary)] bg-[var(--bg-tertiary)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium text-[var(--text-primary)]",
                                children: "AUR Packages"
                            }, void 0, false, {
                                fileName: "[project]/src/components/command/AurPopover.tsx",
                                lineNumber: 58,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[var(--text-muted)]",
                                children: hasYayInstalled ? 'Using yay' : 'Will install yay first'
                            }, void 0, false, {
                                fileName: "[project]/src/components/command/AurPopover.tsx",
                                lineNumber: 59,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/command/AurPopover.tsx",
                        lineNumber: 57,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 flex flex-wrap gap-1.5",
                        children: aurAppNames.map((name, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-2 py-0.5 bg-amber-500/15 text-amber-400 rounded text-xs",
                                children: name
                            }, idx, false, {
                                fileName: "[project]/src/components/command/AurPopover.tsx",
                                lineNumber: 67,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/command/AurPopover.tsx",
                        lineNumber: 65,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 border-t border-[var(--border-primary)]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "flex items-center gap-2 cursor-pointer select-none group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: hasYayInstalled,
                                            onChange: (e)=>setHasYayInstalled(e.target.checked),
                                            className: "sr-only"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/AurPopover.tsx",
                                            lineNumber: 80,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-4 h-4 rounded border-2 flex items-center justify-center transition-colors
                                        ${hasYayInstalled ? 'bg-amber-500 border-amber-500' : 'bg-[var(--bg-primary)] border-[var(--border-secondary)] group-hover:border-amber-500'}`,
                                            children: hasYayInstalled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: "w-2.5 h-2.5 text-white",
                                                strokeWidth: 3
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/command/AurPopover.tsx",
                                                lineNumber: 93,
                                                columnNumber: 57
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/command/AurPopover.tsx",
                                            lineNumber: 86,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/command/AurPopover.tsx",
                                    lineNumber: 79,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-[var(--text-secondary)]",
                                    children: "I have yay installed"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/command/AurPopover.tsx",
                                    lineNumber: 96,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/command/AurPopover.tsx",
                            lineNumber: 78,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/command/AurPopover.tsx",
                        lineNumber: 77,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/command/AurPopover.tsx",
                lineNumber: 52,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/command/AurPopover.tsx",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/command/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Command bar components
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$CommandFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/command/CommandFooter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$AurPopover$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/command/AurPopover.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$ShortcutsBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/command/ShortcutsBar.tsx [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/src/components/common/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// Shared components - tooltip, animations, skeleton
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/Tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$GlobalStyles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/GlobalStyles.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/LoadingSkeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$ErrorBoundary$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/ErrorBoundary.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$PWAProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/PWAProvider.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/src/components/config/ConfigManager.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Config Management Component
// 配置管理组件
__turbopack_context__.s([
    "ConfigManager",
    ()=>ConfigManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/configManager.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function ConfigManager({ selectedDistro, selectedApps, onLoadConfig }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recentConfigs, setRecentConfigs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCopySuccess, setShowCopySuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dropdownPos, setDropdownPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        right: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownPos({
                top: rect.bottom + 8,
                right: window.innerWidth - rect.right
            });
            setRecentConfigs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRecentConfigs"])());
        }
    }, [
        isOpen
    ]);
    const handleExport = ()=>{
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConfig"])(selectedDistro, selectedApps);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportConfig"])(config);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveToRecentConfigs"])(config);
        setIsOpen(false);
    };
    const handleImport = ()=>{
        fileInputRef.current?.click();
    };
    const handleFileChange = async (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            const config = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["importConfig"])(file);
            onLoadConfig(config.distro, config.apps);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveToRecentConfigs"])(config);
            setIsOpen(false);
        } catch (err) {
            alert(err instanceof Error ? err.message : '导入失败');
        }
        e.target.value = '';
    };
    const handleSave = ()=>{
        const name = prompt('为此配置命名（可选）：');
        if (name === null) return;
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConfig"])(selectedDistro, selectedApps, name || undefined);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveToRecentConfigs"])(config);
        setRecentConfigs((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRecentConfigs"])());
    };
    const handleShare = async ()=>{
        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConfig"])(selectedDistro, selectedApps);
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateShareUrl"])(config);
        const success = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$configManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["copyToClipboard"])(url);
        if (success) {
            setShowCopySuccess(true);
            setTimeout(()=>setShowCopySuccess(false), 2000);
        } else {
            alert('复制失败，请手动复制：\n' + url);
        }
    };
    const handleLoadRecent = (config)=>{
        onLoadConfig(config.distro, config.apps);
        setIsOpen(false);
    };
    if (selectedApps.size === 0) return null;
    const dropdown = isOpen && mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsOpen(false),
                className: "backdrop-blur-[2px]",
                style: {
                    position: 'fixed',
                    inset: 0,
                    zIndex: 99998,
                    background: 'rgba(0,0,0,0.05)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/config/ConfigManager.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)]",
                style: {
                    position: 'fixed',
                    top: dropdownPos.top,
                    right: dropdownPos.right,
                    zIndex: 99999,
                    borderRadius: '20px',
                    padding: '10px',
                    width: '300px',
                    maxHeight: '70vh',
                    overflowY: 'auto',
                    boxShadow: '0 20px 60px -10px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)',
                    transformOrigin: 'top right',
                    animation: 'distroDropdownOpen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-widest",
                            children: "配置管理"
                        }, void 0, false, {
                            fileName: "[project]/src/components/config/ConfigManager.tsx",
                            lineNumber: 139,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                        lineNumber: 138,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-0.5 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSave,
                                className: "w-full flex items-center gap-3 py-2.5 px-3 rounded-xl transition-[background-color] duration-200 bg-transparent hover:bg-[var(--bg-hover)] text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                        className: "w-4 h-4 text-[var(--accent)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                        lineNumber: 148,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-[var(--text-primary)]",
                                                children: "保存配置"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                lineNumber: 150,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-[var(--text-muted)]",
                                                children: "保存到本地历史"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                lineNumber: 151,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                        lineNumber: 149,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleExport,
                                className: "w-full flex items-center gap-3 py-2.5 px-3 rounded-xl transition-[background-color] duration-200 bg-transparent hover:bg-[var(--bg-hover)] text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                        className: "w-4 h-4 text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                        lineNumber: 159,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-[var(--text-primary)]",
                                                children: "导出为文件"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                lineNumber: 161,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-[var(--text-muted)]",
                                                children: "下载 JSON"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                lineNumber: 162,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                        lineNumber: 160,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                lineNumber: 155,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleImport,
                                className: "w-full flex items-center gap-3 py-2.5 px-3 rounded-xl transition-[background-color] duration-200 bg-transparent hover:bg-[var(--bg-hover)] text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-4 h-4 text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                        lineNumber: 170,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-[var(--text-primary)]",
                                                children: "导入配置"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                lineNumber: 172,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-[var(--text-muted)]",
                                                children: "从文件加载"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                lineNumber: 173,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                        lineNumber: 171,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                lineNumber: 166,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleShare,
                                className: "w-full flex items-center gap-3 py-2.5 px-3 rounded-xl transition-[background-color] duration-200 bg-transparent hover:bg-[var(--bg-hover)] text-left relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                        className: "w-4 h-4 text-purple-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                        lineNumber: 181,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-[var(--text-primary)]",
                                                children: "分享链接"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                lineNumber: 183,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-[var(--text-muted)]",
                                                children: "复制 URL"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                lineNumber: 184,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                        lineNumber: 182,
                                        columnNumber: 25
                                    }, this),
                                    showCopySuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-green-500 font-medium",
                                        children: "已复制!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                        lineNumber: 187,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                lineNumber: 177,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                        lineNumber: 143,
                        columnNumber: 17
                    }, this),
                    recentConfigs.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-3 py-2 border-t border-[var(--border-primary)] mt-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-3 h-3 text-[var(--text-muted)]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/config/ConfigManager.tsx",
                                            lineNumber: 197,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-widest",
                                            children: "最近配置"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/config/ConfigManager.tsx",
                                            lineNumber: 198,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/config/ConfigManager.tsx",
                                    lineNumber: 196,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                lineNumber: 195,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-0.5",
                                children: recentConfigs.map((config)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleLoadRecent(config),
                                        className: "w-full py-2.5 px-3 rounded-xl transition-[background-color] duration-200 bg-transparent hover:bg-[var(--bg-hover)] text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-medium text-[var(--text-primary)] truncate",
                                                children: config.name || '未命名配置'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                lineNumber: 208,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs text-[var(--text-muted)] mt-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "uppercase",
                                                        children: config.distro
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "·"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            config.apps.length,
                                                            " 个"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "·"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: new Date(config.timestamp).toLocaleDateString('zh-CN', {
                                                            month: 'numeric',
                                                            day: 'numeric'
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                        lineNumber: 216,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                                lineNumber: 211,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, config.timestamp, true, {
                                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                                        lineNumber: 203,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/config/ConfigManager.tsx",
                                lineNumber: 201,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/config/ConfigManager.tsx",
                lineNumber: 120,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-hover)] border border-[var(--border-primary)] transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                        lineNumber: 234,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium hidden sm:inline",
                        children: "配置"
                    }, void 0, false, {
                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                        lineNumber: 235,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/config/ConfigManager.tsx",
                        lineNumber: 236,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/config/ConfigManager.tsx",
                lineNumber: 229,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: fileInputRef,
                type: "file",
                accept: ".json",
                onChange: handleFileChange,
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/config/ConfigManager.tsx",
                lineNumber: 238,
                columnNumber: 13
            }, this),
            mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(dropdown, document.body)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/config/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$config$2f$ConfigManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/config/ConfigManager.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/lib/presets.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Preset configurations for common use cases
// 预设配置：常见使用场景
__turbopack_context__.s([
    "getPresetById",
    ()=>getPresetById,
    "getPresetsForDistro",
    ()=>getPresetsForDistro,
    "presets",
    ()=>presets
]);
const presets = [
    {
        id: 'web-dev',
        name: 'Web 开发',
        description: '前端/后端 Web 开发环境',
        icon: '💻',
        apps: [
            'vscode',
            'nodejs',
            'git',
            'docker',
            'firefox',
            'postman',
            'github-desktop'
        ]
    },
    {
        id: 'full-stack',
        name: '全栈开发',
        description: '完整开发环境，包含多种语言和工具',
        icon: '🚀',
        apps: [
            'vscode',
            'nodejs',
            'python3',
            'go',
            'rust',
            'git',
            'docker',
            'postgresql',
            'redis',
            'postman'
        ]
    },
    {
        id: 'office',
        name: '办公套装',
        description: '日常办公和文档处理',
        icon: '📝',
        apps: [
            'firefox',
            'chromium',
            'libreoffice',
            'thunderbird',
            'gimp',
            'inkscape',
            'pdfarranger'
        ]
    },
    {
        id: 'gaming',
        name: '游戏娱乐',
        description: '游戏平台和娱乐软件',
        icon: '🎮',
        apps: [
            'steam',
            'discord',
            'lutris',
            'obs',
            'vlc',
            'spotify'
        ]
    },
    {
        id: 'content-creator',
        name: '内容创作',
        description: '视频、音频、图像编辑',
        icon: '🎨',
        apps: [
            'obs',
            'kdenlive',
            'gimp',
            'inkscape',
            'audacity',
            'blender',
            'krita'
        ]
    },
    {
        id: 'minimal',
        name: '极简配置',
        description: '基础浏览和轻量办公',
        icon: '✨',
        apps: [
            'firefox',
            'thunderbird',
            'libreoffice',
            'vlc'
        ]
    },
    {
        id: 'security',
        name: '安全工具',
        description: '隐私保护和安全软件',
        icon: '🔒',
        apps: [
            'tor',
            'librewolf',
            'bitwarden',
            'protonvpn',
            'veracrypt',
            'keepassxc'
        ]
    },
    {
        id: 'data-science',
        name: '数据科学',
        description: 'Python 数据分析和机器学习',
        icon: '📊',
        apps: [
            'python3',
            'vscode',
            'jupyter',
            'git',
            'docker'
        ]
    },
    {
        id: 'sysadmin',
        name: '系统管理',
        description: '服务器管理和运维工具',
        icon: '⚙️',
        apps: [
            'docker',
            'kubectl',
            'terraform',
            'ansible',
            'wireshark',
            'htop',
            'tmux'
        ]
    },
    {
        id: 'student',
        name: '学生套装',
        description: '学习、笔记和生产力工具',
        icon: '🎓',
        apps: [
            'firefox',
            'libreoffice',
            'thunderbird',
            'obsidian',
            'notion',
            'vlc',
            'gimp'
        ]
    }
];
function getPresetsForDistro(distroId) {
    return presets.filter((preset)=>{
        // If preset doesn't specify distros, it's available for all
        if (!preset.distros) return true;
        // Otherwise check if current distro is in the list
        return preset.distros.includes(distroId);
    });
}
function getPresetById(id) {
    return presets.find((p)=>p.id === id);
}
}),
"[project]/src/components/preset/PresetSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Preset Selector Component
// 预设配置选择器
__turbopack_context__.s([
    "PresetSelector",
    ()=>PresetSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$presets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/presets.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function PresetSelector({ selectedDistro, onSelectPreset }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dropdownPos, setDropdownPos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        right: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setDropdownPos({
                top: rect.bottom + 8,
                right: window.innerWidth - rect.right
            });
        }
    }, [
        isOpen
    ]);
    const handleSelectPreset = (preset)=>{
        onSelectPreset(preset.apps);
        setIsOpen(false);
    };
    const dropdown = isOpen && mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsOpen(false),
                className: "backdrop-blur-[2px]",
                style: {
                    position: 'fixed',
                    inset: 0,
                    zIndex: 99998,
                    background: 'rgba(0,0,0,0.05)'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/preset/PresetSelector.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[var(--bg-secondary)] border border-[var(--border-primary)]",
                style: {
                    position: 'fixed',
                    top: dropdownPos.top,
                    right: dropdownPos.right,
                    zIndex: 99999,
                    borderRadius: '20px',
                    padding: '10px',
                    width: '380px',
                    maxHeight: '70vh',
                    overflowY: 'auto',
                    boxShadow: '0 20px 60px -10px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)',
                    transformOrigin: 'top right',
                    animation: 'distroDropdownOpen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-2 mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "w-4 h-4 text-[var(--accent)]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/preset/PresetSelector.tsx",
                                        lineNumber: 76,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-widest",
                                        children: "预设配置"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/preset/PresetSelector.tsx",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/preset/PresetSelector.tsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-[var(--text-muted)] mt-1 ml-6",
                                children: "根据使用场景一键选择"
                            }, void 0, false, {
                                fileName: "[project]/src/components/preset/PresetSelector.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/preset/PresetSelector.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$presets$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["presets"].map((preset, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSelectPreset(preset),
                                className: "group w-full flex items-center gap-3 py-3 px-3 rounded-xl border-none cursor-pointer text-left transition-[background-color,transform] duration-200 bg-transparent hover:bg-[var(--bg-hover)] hover:scale-[1.01]",
                                style: {
                                    animation: `distroItemSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.03}s both`
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-lg flex items-center justify-center text-2xl transition-transform duration-200 bg-[var(--bg-tertiary)] group-hover:scale-105",
                                        children: preset.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/preset/PresetSelector.tsx",
                                        lineNumber: 93,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium text-[var(--text-primary)]",
                                                        children: preset.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/preset/PresetSelector.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-semibold text-[var(--accent)] bg-[var(--accent)]/10 px-2 py-0.5 rounded-full",
                                                        children: preset.apps.length
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/preset/PresetSelector.tsx",
                                                        lineNumber: 99,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/preset/PresetSelector.tsx",
                                                lineNumber: 97,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-[var(--text-muted)] mt-0.5",
                                                children: preset.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/preset/PresetSelector.tsx",
                                                lineNumber: 101,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/preset/PresetSelector.tsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, preset.id, true, {
                                fileName: "[project]/src/components/preset/PresetSelector.tsx",
                                lineNumber: 85,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/preset/PresetSelector.tsx",
                        lineNumber: 83,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/preset/PresetSelector.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-hover)] border border-[var(--border-primary)] transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/preset/PresetSelector.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium hidden sm:inline",
                        children: "预设"
                    }, void 0, false, {
                        fileName: "[project]/src/components/preset/PresetSelector.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: `w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/preset/PresetSelector.tsx",
                        lineNumber: 119,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/preset/PresetSelector.tsx",
                lineNumber: 112,
                columnNumber: 13
            }, this),
            mounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(dropdown, document.body)
        ]
    }, void 0, true);
}
}),
"[project]/src/components/preset/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preset$2f$PresetSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/preset/PresetSelector.tsx [app-ssr] (ecmascript)");
;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
// Hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLinuxInit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/hooks/useLinuxInit.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDelayedTooltip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDelayedTooltip.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useKeyboardNavigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDebounce.ts [app-ssr] (ecmascript)");
// Data
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-ssr] (ecmascript)");
// Components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/theme-toggle.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/header/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$HowItWorks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/HowItWorks.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$GitHubLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/GitHubLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$ContributeLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/header/ContributeLink.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$distro$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/distro/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$distro$2f$DistroSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/distro/DistroSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/app/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$CategorySection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/app/CategorySection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/command/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$CommandFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/command/CommandFooter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/common/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/Tooltip.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$GlobalStyles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/GlobalStyles.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/common/LoadingSkeleton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/config/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$config$2f$ConfigManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/config/ConfigManager.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preset$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/preset/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preset$2f$PresetSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/preset/PresetSelector.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    // All the state we need to make this thing work
    const { tooltip, show: showTooltip, hide: hideTooltip, onTooltipEnter, onTooltipLeave } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDelayedTooltip$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDelayedTooltip"])(600);
    const { selectedDistro, selectedApps, setSelectedDistro, toggleApp, clearAll, isAppAvailable, generatedCommand, selectedCount, hasYayInstalled, setHasYayInstalled, hasAurPackages, aurAppNames, isHydrated, selectedHelper, setSelectedHelper } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLinuxInit$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useLinuxInit"])();
    // Handle loading a config
    const handleLoadConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((distro, appIds)=>{
        setSelectedDistro(distro);
        // The setSelectedDistro will filter apps, but we need to set the apps after distro changes
        // Use a timeout to ensure distro is set first
        setTimeout(()=>{
            const validApps = appIds.filter((id)=>{
                const app = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].find((a)=>a.id === id);
                if (!app) return false;
                return app.targets[distro] !== undefined;
            });
            // Update selectedApps directly through clearAll then toggleApp
            clearAll();
            validApps.forEach((id)=>toggleApp(id));
        }, 0);
    }, [
        setSelectedDistro,
        toggleApp,
        clearAll
    ]);
    // Handle loading a preset
    const handleLoadPreset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((appIds)=>{
        // Filter to valid apps for current distro
        const validApps = appIds.filter((id)=>{
            const app = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apps"].find((a)=>a.id === id);
            if (!app) return false;
            return app.targets[selectedDistro] !== undefined;
        });
        // Clear current selection and apply preset
        clearAll();
        validApps.forEach((id)=>toggleApp(id));
    }, [
        selectedDistro,
        toggleApp,
        clearAll
    ]);
    // Search state
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const debouncedSearchQuery = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebounce"])(searchQuery, 300);
    const searchInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Handle "/" key to focus search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleKeyDown = (e)=>{
            // Skip if already in input
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
            // Skip if modifier keys are pressed (prevents conflicts with browser shortcuts)
            if (e.ctrlKey || e.altKey || e.metaKey) return;
            if (e.key === '/') {
                e.preventDefault();
                searchInputRef.current?.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, []);
    // Distribute apps into a nice grid
    const allCategoriesWithApps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const query = debouncedSearchQuery.toLowerCase().trim();
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"].map((cat)=>{
            const categoryApps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAppsByCategory"])(cat);
            // Filter apps if there's a search query (match name or id only)
            const filteredApps = query ? categoryApps.filter((app)=>app.name.toLowerCase().includes(query) || app.id.toLowerCase().includes(query)) : categoryApps;
            return {
                category: cat,
                apps: filteredApps
            };
        }).filter((c)=>c.apps.length > 0);
    }, [
        debouncedSearchQuery
    ]);
    // 5 columns looks good on most screens
    const COLUMN_COUNT = 5;
    // Tetris-style packing: shortest column gets the next category
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const cols = Array.from({
            length: COLUMN_COUNT
        }, ()=>[]);
        const heights = Array(COLUMN_COUNT).fill(0);
        allCategoriesWithApps.forEach((catData)=>{
            const minIdx = heights.indexOf(Math.min(...heights));
            cols[minIdx].push(catData);
            heights[minIdx] += catData.apps.length + 2;
        });
        return cols;
    }, [
        allCategoriesWithApps
    ]);
    // ========================================================================
    // Category Expansion State
    // ========================================================================
    const [expandedCategories, setExpandedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new Set(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["categories"]));
    const toggleCategoryExpanded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((cat)=>{
        setExpandedCategories((prev)=>{
            const next = new Set(prev);
            next.has(cat) ? next.delete(cat) : next.add(cat);
            return next;
        });
    }, []);
    // Build nav items for keyboard navigation (vim keys ftw)
    const navItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const items = [];
        columns.forEach((colCategories)=>{
            const colItems = [];
            colCategories.forEach(({ category, apps: catApps })=>{
                colItems.push({
                    type: 'category',
                    id: category,
                    category
                });
                if (expandedCategories.has(category)) {
                    catApps.forEach((app)=>colItems.push({
                            type: 'app',
                            id: app.id,
                            category
                        }));
                }
            });
            items.push(colItems);
        });
        return items;
    }, [
        columns,
        expandedCategories
    ]);
    const { focusedItem, clearFocus, setFocusByItem } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useKeyboardNavigation"])(navItems, toggleCategoryExpanded, toggleApp);
    // ========================================================================
    // Header Animation
    // ========================================================================
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!headerRef.current || !isHydrated) return;
        const header = headerRef.current;
        const title = header.querySelector('.header-animate');
        const controls = header.querySelector('.header-controls');
        // Fancy clip-path reveal for the logo
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(title, {
            clipPath: 'inset(0 100% 0 0)'
        }, {
            clipPath: 'inset(0 0% 0 0)',
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.1,
            onComplete: ()=>{
                if (title) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(title, {
                    clipPath: 'none'
                });
            }
        });
        // Animate controls with fade-in
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(controls, {
            opacity: 0,
            y: -10
        }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.3
        });
    }, [
        isHydrated
    ]);
    // Don't render until we've loaded from localStorage (avoids flash)
    // Show loading skeleton until localStorage is hydrated
    if (!isHydrated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$LoadingSkeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LoadingSkeleton"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 221,
            columnNumber: 16
        }, this);
    }
    // ========================================================================
    // Render
    // ========================================================================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative",
        style: {
            transition: 'background-color 0.5s, color 0.5s'
        },
        onClick: clearFocus,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$GlobalStyles$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GlobalStyles"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 234,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$common$2f$Tooltip$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tooltip"], {
                tooltip: tooltip,
                onEnter: onTooltipEnter,
                onLeave: onTooltipLeave
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 235,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                ref: headerRef,
                className: "pt-8 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-6 relative",
                style: {
                    zIndex: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "header-animate",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/tuxmate.png",
                                            alt: "TuxMate Logo",
                                            className: "w-16 h-16 sm:w-[72px] sm:h-[72px] object-contain shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 244,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-xl sm:text-2xl font-bold tracking-tight",
                                                    style: {
                                                        transition: 'color 0.5s'
                                                    },
                                                    children: "Linux 应用安装器"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] sm:text-xs text-[var(--text-muted)] uppercase tracking-widest",
                                                    style: {
                                                        transition: 'color 0.5s'
                                                    },
                                                    children: "快速批量安装 Linux 应用"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3 mt-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-[var(--text-muted)]",
                                                            style: {
                                                                transition: 'color 0.5s'
                                                            },
                                                            children: [
                                                                "选择应用 • ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "hidden sm:inline",
                                                                    children: "方向键 + 空格"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 258,
                                                                    columnNumber: 52
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 257,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[var(--text-muted)] opacity-30",
                                                            children: "|"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$HowItWorks$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HowItWorks"], {}, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 243,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 242,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "header-controls flex items-center gap-3 sm:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 sm:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$preset$2f$PresetSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresetSelector"], {
                                                selectedDistro: selectedDistro,
                                                onSelectPreset: handleLoadPreset
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 271,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$GitHubLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GitHubLink"], {}, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$header$2f$ContributeLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContributeLink"], {}, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 33
                                            }, this),
                                            selectedCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--text-muted)] opacity-30 hidden sm:inline",
                                                        children: "·"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$config$2f$ConfigManager$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConfigManager"], {
                                                        selectedDistro: selectedDistro,
                                                        selectedApps: selectedApps,
                                                        onLoadConfig: handleLoadConfig
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 280,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: clearAll,
                                                        className: "group flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-rose-500 transition-colors duration-300",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                className: "w-4 h-4 transition-transform duration-300 group-hover:rotate-90"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "hidden sm:inline relative",
                                                                children: [
                                                                    "清空 (",
                                                                    selectedCount,
                                                                    ")",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "absolute bottom-0 left-0 w-0 h-px bg-rose-400 transition-[width] duration-300 group-hover:w-full"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 292,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 290,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 270,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 pl-2 sm:pl-3 border-l border-[var(--border-primary)]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$distro$2f$DistroSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DistroSelector"], {
                                                selectedDistro: selectedDistro,
                                                onSelect: setSelectedDistro
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 300,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 268,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 240,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 239,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 238,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "px-4 sm:px-6 pb-40 relative",
                style: {
                    zIndex: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-8",
                        children: columns.map((columnCategories, colIdx)=>{
                            // Calculate starting index for this column (for staggered animation)
                            let globalIdx = 0;
                            for(let c = 0; c < colIdx; c++){
                                globalIdx += columns[c].length;
                            }
                            // Generate stable key based on column content to ensure proper reconciliation
                            const columnKey = `col-${colIdx}-${columnCategories.map((c)=>c.category).join('-')}`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: columnCategories.map(({ category, apps: categoryApps }, catIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$app$2f$CategorySection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CategorySection"], {
                                        category: category,
                                        categoryApps: categoryApps,
                                        selectedApps: selectedApps,
                                        isAppAvailable: isAppAvailable,
                                        selectedDistro: selectedDistro,
                                        toggleApp: toggleApp,
                                        isExpanded: expandedCategories.has(category),
                                        onToggleExpanded: ()=>toggleCategoryExpanded(category),
                                        focusedId: focusedItem?.id,
                                        focusedType: focusedItem?.type,
                                        onTooltipEnter: showTooltip,
                                        onTooltipLeave: hideTooltip,
                                        categoryIndex: globalIdx + catIdx,
                                        onCategoryFocus: ()=>setFocusByItem('category', category),
                                        onAppFocus: (appId)=>setFocusByItem('app', appId)
                                    }, `${category}-${categoryApps.length}`, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 41
                                    }, this))
                            }, columnKey, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 324,
                                columnNumber: 33
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 312,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 311,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 310,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$command$2f$CommandFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommandFooter"], {
                command: generatedCommand,
                selectedCount: selectedCount,
                selectedDistro: selectedDistro,
                selectedApps: selectedApps,
                hasAurPackages: hasAurPackages,
                aurAppNames: aurAppNames,
                hasYayInstalled: hasYayInstalled,
                setHasYayInstalled: setHasYayInstalled,
                searchQuery: searchQuery,
                onSearchChange: setSearchQuery,
                searchInputRef: searchInputRef,
                clearAll: clearAll,
                selectedHelper: selectedHelper,
                setSelectedHelper: setSelectedHelper
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 353,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 229,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_c69f97b8._.js.map