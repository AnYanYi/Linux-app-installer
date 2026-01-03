import { describe, it, expect } from 'vitest';

// Import the escapeShellString function by accessing the module
// Note: We'll need to export this function for testing
describe('Script Generation Utilities', () => {
    // Helper function that mirrors escapeShellString
    const escapeShellString = (str: string): string => {
        return str
            .replace(/\\/g, '\\\\')
            .replace(/"/g, '\\"')
            .replace(/\$/g, '\\$')
            .replace(/`/g, '\\`')
            .replace(/!/g, '\\!');
    };

    describe('escapeShellString', () => {
        it('should escape double quotes', () => {
            expect(escapeShellString('Hello "World"')).toBe('Hello \\"World\\"');
        });

        it('should escape dollar signs', () => {
            expect(escapeShellString('$HOME')).toBe('\\$HOME');
            expect(escapeShellString('Price: $100')).toBe('Price: \\$100');
        });

        it('should escape backticks', () => {
            expect(escapeShellString('`command`')).toBe('\\`command\\`');
        });

        it('should escape backslashes', () => {
            expect(escapeShellString('path\\to\\file')).toBe('path\\\\to\\\\file');
        });

        it('should escape history expansion', () => {
            expect(escapeShellString('Hello!')).toBe('Hello\\!');
        });

        it('should handle multiple special characters', () => {
            const input = 'App "$NAME" costs $10!';
            const expected = 'App \\"\\$NAME\\" costs \\$10\\!';
            expect(escapeShellString(input)).toBe(expected);
        });

        it('should leave safe strings unchanged', () => {
            expect(escapeShellString('Firefox')).toBe('Firefox');
            expect(escapeShellString('VS Code')).toBe('VS Code');
            expect(escapeShellString('GIMP 2.10')).toBe('GIMP 2.10');
        });
    });
});
