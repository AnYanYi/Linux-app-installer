// 日志工具 - 用于调试和错误追踪
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
    level: LogLevel;
    message: string;
    timestamp: string;
    context?: Record<string, any>;
}

class Logger {
    private isDevelopment = process.env.NODE_ENV === 'development';
    private logs: LogEntry[] = [];
    private maxLogs = 100; // 最多保存 100 条日志

    private createLogEntry(level: LogLevel, message: string, context?: Record<string, any>): LogEntry {
        return {
            level,
            message,
            timestamp: new Date().toISOString(),
            context,
        };
    }

    private addLog(entry: LogEntry) {
        this.logs.push(entry);
        if (this.logs.length > this.maxLogs) {
            this.logs.shift();
        }
    }

    debug(message: string, context?: Record<string, any>) {
        const entry = this.createLogEntry('debug', message, context);
        this.addLog(entry);
        if (this.isDevelopment) {
            console.debug(`[DEBUG] ${message}`, context || '');
        }
    }

    info(message: string, context?: Record<string, any>) {
        const entry = this.createLogEntry('info', message, context);
        this.addLog(entry);
        if (this.isDevelopment) {
            console.info(`[INFO] ${message}`, context || '');
        }
    }

    warn(message: string, context?: Record<string, any>) {
        const entry = this.createLogEntry('warn', message, context);
        this.addLog(entry);
        console.warn(`[WARN] ${message}`, context || '');
    }

    error(message: string, error?: Error, context?: Record<string, any>) {
        const entry = this.createLogEntry('error', message, {
            ...context,
            error: error?.message,
            stack: error?.stack,
        });
        this.addLog(entry);
        console.error(`[ERROR] ${message}`, error, context || '');
    }

    // 获取所有日志
    getLogs(): LogEntry[] {
        return [...this.logs];
    }

    // 清空日志
    clearLogs() {
        this.logs = [];
    }

    // 导出日志为 JSON
    exportLogs(): string {
        return JSON.stringify(this.logs, null, 2);
    }

    // 下载日志文件
    downloadLogs() {
        const blob = new Blob([this.exportLogs()], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `logs-${new Date().toISOString()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

export const logger = new Logger();

// 错误边界辅助函数
export function captureError(error: Error, context?: Record<string, any>) {
    logger.error('Uncaught error', error, context);
    
    // 可以在这里添加错误上报到服务器的逻辑
    // 例如：Sentry, LogRocket, 等
}

// React 错误边界辅助
export function logComponentError(error: Error, errorInfo: React.ErrorInfo) {
    logger.error('React component error', error, {
        componentStack: errorInfo.componentStack || 'N/A',
    });
}
