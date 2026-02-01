import { describe, it, expect } from 'vitest';
import { generateInstallScript, generateSimpleCommand } from '@/lib/generateInstallScript';

describe('generateInstallScript', () => {
    it('应该为 Ubuntu 生成有效的安装脚本', () => {
        const script = generateInstallScript({
            distroId: 'ubuntu',
            selectedAppIds: new Set(['firefox', 'vscode']),
        });
        
        expect(script).toContain('#!/bin/bash');
        expect(script).toContain('apt-get install');
    });

    it('应该为 Arch 生成有效的安装脚本', () => {
        const script = generateInstallScript({
            distroId: 'arch',
            selectedAppIds: new Set(['firefox', 'chromium']),
            helper: 'yay',
        });
        
        expect(script).toContain('#!/bin/bash');
        expect(script).toContain('yay');
    });

    it('当没有选择应用时应该返回空脚本消息', () => {
        const script = generateInstallScript({
            distroId: 'ubuntu',
            selectedAppIds: new Set(),
        });
        
        expect(script).toContain('No packages selected');
    });

    it('应该处理未知的发行版', () => {
        const script = generateInstallScript({
            distroId: 'unknown' as any,
            selectedAppIds: new Set(['firefox']),
        });
        
        expect(script).toContain('Unknown distribution');
    });
});

describe('generateSimpleCommand', () => {
    it('应该为 Ubuntu 生成简单的命令', () => {
        const command = generateSimpleCommand(new Set(['firefox']), 'ubuntu');
        expect(command).toContain('sudo apt install -y');
    });

    it('应该为 Flatpak 生成简单的命令', () => {
        const command = generateSimpleCommand(new Set(['firefox']), 'flatpak');
        expect(command).toContain('flatpak install');
    });

    it('当没有选择包时应该返回注释', () => {
        const command = generateSimpleCommand(new Set(), 'ubuntu');
        expect(command).toBe('# No packages selected');
    });
});
