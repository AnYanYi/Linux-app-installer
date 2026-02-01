// Main entry point for generating install scripts.
// Each distro has its own module - keeps things sane.

import { distros, type DistroId } from './data';
import { perfMonitor } from './performance';
import {
    getSelectedPackages,
    generateUbuntuScript,
    generateDebianScript,
    generateArchScript,
    generateFedoraScript,
    generateOpenSUSEScript,
    generateNixScript,
    generateFlatpakScript,
    generateSnapScript,
    generateHomebrewScript,
} from './scripts';

interface ScriptOptions {
    distroId: DistroId;
    selectedAppIds: Set<string>;
    helper?: 'yay' | 'paru';
}

// The full fancy script with progress bars and all that jazz
export function generateInstallScript(options: ScriptOptions): string {
    perfMonitor.start(`generateScript-${options.distroId}`);
    
    const { distroId, selectedAppIds, helper = 'yay' } = options;
    const distro = distros.find(d => d.id === distroId);

    if (!distro) {
        perfMonitor.end(`generateScript-${options.distroId}`);
        return '#!/bin/bash\necho "Error: Unknown distribution"\nexit 1';
    }

    const packages = getSelectedPackages(selectedAppIds, distroId);
    if (packages.length === 0) {
        perfMonitor.end(`generateScript-${options.distroId}`);
        return '#!/bin/bash\necho "No packages selected"\nexit 0';
    }

    let script: string;
    switch (distroId) {
        case 'ubuntu': script = generateUbuntuScript(packages); break;
        case 'debian': script = generateDebianScript(packages); break;
        case 'arch': script = generateArchScript(packages, helper); break;
        case 'fedora': script = generateFedoraScript(packages); break;
        case 'opensuse': script = generateOpenSUSEScript(packages); break;
        case 'nix': script = generateNixScript(packages); break;
        case 'flatpak': script = generateFlatpakScript(packages); break;
        case 'snap': script = generateSnapScript(packages); break;
        case 'homebrew': script = generateHomebrewScript(packages); break;
        default: script = '#!/bin/bash\necho "Unsupported distribution"\nexit 1';
    }
    
    perfMonitor.end(`generateScript-${options.distroId}`);
    return script;
}

// Quick one-liner for copy-paste warriors
export function generateSimpleCommand(selectedAppIds: Set<string>, distroId: DistroId): string {
    const packages = getSelectedPackages(selectedAppIds, distroId);
    if (packages.length === 0) return '# No packages selected';

    const pkgList = packages.map(p => p.pkg).join(' ');

    switch (distroId) {
        case 'ubuntu':
        case 'debian': return `sudo apt install -y ${pkgList}`;
        case 'arch': return `yay -S --needed --noconfirm ${pkgList}`;
        case 'fedora': return `sudo dnf install -y ${pkgList}`;
        case 'opensuse': return `sudo zypper install -y ${pkgList}`;
        case 'nix': return `nix-env -iA ${packages.map(p => `nixpkgs.${p.pkg}`).join(' ')}`;
        case 'flatpak': return `flatpak install flathub -y ${pkgList}`;
        case 'snap':
            if (packages.length === 1) return `sudo snap install ${pkgList}`;
            return packages.map(p => `sudo snap install ${p.pkg}`).join(' && ');
        case 'homebrew': return `brew install ${pkgList}`;
        default: return `# Install: ${pkgList}`;
    }
}
