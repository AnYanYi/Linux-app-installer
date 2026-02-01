// 性能监控工具
export class PerformanceMonitor {
    private marks: Map<string, number> = new Map();

    // 开始计时
    start(label: string) {
        this.marks.set(label, performance.now());
    }

    // 结束计时并返回耗时
    end(label: string): number {
        const startTime = this.marks.get(label);
        if (!startTime) {
            console.warn(`Performance mark "${label}" not found`);
            return 0;
        }
        
        const duration = performance.now() - startTime;
        this.marks.delete(label);
        
        if (process.env.NODE_ENV === 'development') {
            console.log(`[Performance] ${label}: ${duration.toFixed(2)}ms`);
        }
        
        return duration;
    }

    // 测量函数执行时间
    async measure<T>(label: string, fn: () => T | Promise<T>): Promise<T> {
        this.start(label);
        try {
            const result = await fn();
            this.end(label);
            return result;
        } catch (error) {
            this.end(label);
            throw error;
        }
    }

    // 获取页面加载性能指标
    getPageMetrics() {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (!navigation) return null;

        return {
            // DNS 查询时间
            dnsTime: navigation.domainLookupEnd - navigation.domainLookupStart,
            // TCP 连接时间
            tcpTime: navigation.connectEnd - navigation.connectStart,
            // 请求响应时间
            requestTime: navigation.responseEnd - navigation.requestStart,
            // DOM 解析时间
            domParseTime: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
            // 页面加载完成时间
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            // 总时间
            totalTime: navigation.loadEventEnd - navigation.fetchStart,
        };
    }

    // 打印页面性能报告
    logPageMetrics() {
        const metrics = this.getPageMetrics();
        if (metrics) {
            console.table(metrics);
        }
    }
}

export const perfMonitor = new PerformanceMonitor();

// React 性能监控 Hook
export function usePerformance(label: string) {
    if (process.env.NODE_ENV === 'development') {
        perfMonitor.start(label);
        return () => perfMonitor.end(label);
    }
    return () => {};
}
