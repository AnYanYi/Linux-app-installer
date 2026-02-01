module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/hooks/useTheme.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ThemeProvider({ children }) {
    // Initial state reads from DOM to match what the inline script set
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return 'light' // SSR default
        ;
    });
    const [hydrated, setHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // On mount, sync with localStorage and mark as hydrated
        const saved = localStorage.getItem('theme');
        if (saved && saved !== theme) {
            setTheme(saved);
            document.documentElement.classList.toggle('light', saved === 'light');
        }
        setHydrated(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!hydrated) return;
        localStorage.setItem('theme', theme);
        document.documentElement.classList.toggle('light', theme === 'light');
    }, [
        theme,
        hydrated
    ]);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setTheme((prev)=>prev === 'dark' ? 'light' : 'dark');
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggle
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/hooks/useTheme.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
function useTheme() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}
}),
"[project]/src/components/common/Tooltip.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function Tooltip({ tooltip, onEnter, onLeave }) {
    if (!tooltip) return null;
    // Center horizontally relative to the element
    const left = tooltip.x;
    const top = tooltip.y;
    // Helper to render markdown content
    const renderContent = (text)=>{
        // Split by **bold**, `code`, or [link](url)
        return text.split(/(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g).map((part, i)=>{
            // Bold
            if (part.startsWith('**') && part.endsWith('**')) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    className: "font-bold text-[var(--accent)]",
                    children: part.slice(2, -2)
                }, i, false, {
                    fileName: "[project]/src/components/common/Tooltip.tsx",
                    lineNumber: 34,
                    columnNumber: 21
                }, this);
            }
            // Code
            if (part.startsWith('`') && part.endsWith('`')) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                    className: "bg-[var(--bg-secondary)] px-1 rounded font-mono text-[var(--accent)] text-[10px]",
                    children: part.slice(1, -1)
                }, i, false, {
                    fileName: "[project]/src/components/common/Tooltip.tsx",
                    lineNumber: 42,
                    columnNumber: 21
                }, this);
            }
            // Link
            if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
                const match = part.match(/\[(.*?)\]\((.*?)\)/);
                if (match) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: match[2],
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-[var(--accent)] underline decoration-[var(--accent)]/50 hover:decoration-[var(--accent)] font-semibold transition-colors hover:text-emerald-500",
                        onClick: (e)=>e.stopPropagation(),
                        children: match[1]
                    }, i, false, {
                        fileName: "[project]/src/components/common/Tooltip.tsx",
                        lineNumber: 52,
                        columnNumber: 25
                    }, this);
                }
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: part
            }, i, false, {
                fileName: "[project]/src/components/common/Tooltip.tsx",
                lineNumber: 65,
                columnNumber: 20
            }, this);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "tooltip",
        className: "fixed z-50 pointer-events-auto",
        style: {
            left: left,
            top: top,
            transform: 'translate(-50%, -100%)',
            // Using the specific key ensures fresh animation on new tooltip
            animation: 'tooltipSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            maxWidth: '400px',
            width: 'max-content'
        },
        onMouseEnter: onEnter,
        onMouseLeave: onLeave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mb-2 px-3 py-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-primary)] text-xs font-medium shadow-xl border border-[var(--border-primary)]/40 backdrop-blur-sm whitespace-normal break-words leading-relaxed",
            children: [
                renderContent(tooltip.text),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--bg-tertiary)] border-b border-r border-[var(--border-primary)]/40 rotate-45"
                }, void 0, false, {
                    fileName: "[project]/src/components/common/Tooltip.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/common/Tooltip.tsx",
            lineNumber: 85,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/common/Tooltip.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/components/common/GlobalStyles.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlobalStyles",
    ()=>GlobalStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
'use client';
;
;
function GlobalStyles() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        id: "2e15635082efe763",
        children: "@keyframes dropdownOpen{0%{opacity:0;transform:scale(.95)translateY(-8px)}to{opacity:1;transform:scale(1)translateY(0)}}@keyframes slideIn{0%{opacity:0;transform:translate(8px)}to{opacity:1;transform:translate(0)}}@keyframes tooltipSlideUp{0%{opacity:0;transform:translate(-50%,-90%)}to{opacity:1;transform:translate(-50%,-100%)}}@keyframes slideInFromBottom{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}@keyframes fadeInScale{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}@keyframes distroDropdownOpen{0%{opacity:0;transform:scale(.9)translateY(-10px)}60%{opacity:1;transform:scale(1.02)translateY(2px)}to{opacity:1;transform:scale(1)translateY(0)}}@keyframes distroItemSlide{0%{opacity:0;transform:translate(15px)scale(.95)}60%{opacity:1;transform:translate(-3px)scale(1.01)}to{opacity:1;transform:translate(0)scale(1)}}@keyframes slideUp{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}@keyframes slideDown{0%{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(100%)}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes popupSlideIn{0%{opacity:0;transform:translateY(-10px)scale(.95)}to{opacity:1;transform:translateY(0)scale(1)}}"
    }, void 0, false, void 0, this);
}
}),
"[project]/src/components/common/LoadingSkeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSkeleton",
    ()=>LoadingSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
'use client';
;
;
function LoadingSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "afaa7e9f72d5e59c",
                children: "@keyframes skeletonShimmer{0%,to{opacity:.4}50%{opacity:.7}}.sk-pulse{will-change:opacity;animation:1.5s ease-in-out infinite skeletonShimmer}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-afaa7e9f72d5e59c" + " " + "min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "jsx-afaa7e9f72d5e59c" + " " + "pt-8 sm:pt-12 pb-8 sm:pb-10 px-4 sm:px-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-afaa7e9f72d5e59c" + " " + "max-w-7xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-afaa7e9f72d5e59c" + " " + "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-afaa7e9f72d5e59c" + " " + "flex items-start gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl bg-[var(--bg-tertiary)] sk-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 26,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "flex flex-col gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-afaa7e9f72d5e59c" + " " + "h-6 w-32 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            animationDelay: '0.1s'
                                                        },
                                                        className: "jsx-afaa7e9f72d5e59c" + " " + "h-3 w-48 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            animationDelay: '0.2s'
                                                        },
                                                        className: "jsx-afaa7e9f72d5e59c" + " " + "h-3 w-36 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 29,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                        lineNumber: 24,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-afaa7e9f72d5e59c" + " " + "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animationDelay: '0.1s'
                                                },
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "h-6 w-16 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 42,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animationDelay: '0.15s'
                                                },
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "h-6 w-16 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 46,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "w-px h-6 bg-[var(--border-primary)]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 50,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animationDelay: '0.2s'
                                                },
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "h-6 w-12 bg-[var(--bg-tertiary)] rounded-full sk-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 51,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animationDelay: '0.25s'
                                                },
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "h-10 w-28 bg-[var(--bg-tertiary)] rounded-2xl sk-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 55,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                        lineNumber: 41,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "jsx-afaa7e9f72d5e59c" + " " + "px-4 sm:px-6 pb-40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-afaa7e9f72d5e59c" + " " + "max-w-7xl mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-afaa7e9f72d5e59c" + " " + "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-8",
                                children: [
                                    ...Array(5)
                                ].map((_, colIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-afaa7e9f72d5e59c" + " " + "space-y-5",
                                        children: [
                                            ...Array(3)
                                        ].map((_, catIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "mb-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-afaa7e9f72d5e59c" + " " + "flex items-center gap-2 mb-3 pb-1.5 border-b border-[var(--border-primary)]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    animationDelay: `${colIdx * 0.08}s`
                                                                },
                                                                className: "jsx-afaa7e9f72d5e59c" + " " + "w-3 h-3 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                                lineNumber: 74,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    animationDelay: `${colIdx * 0.08 + 0.03}s`
                                                                },
                                                                className: "jsx-afaa7e9f72d5e59c" + " " + "h-3 w-20 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                                lineNumber: 78,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 45
                                                    }, this),
                                                    [
                                                        ...Array(3 + catIdx)
                                                    ].map((_, appIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-afaa7e9f72d5e59c" + " " + "flex items-center gap-2.5 py-1.5 px-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        animationDelay: `${colIdx * 0.08 + appIdx * 0.02}s`
                                                                    },
                                                                    className: "jsx-afaa7e9f72d5e59c" + " " + "w-4 h-4 rounded border-2 border-[var(--bg-tertiary)] sk-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                                    lineNumber: 89,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        animationDelay: `${colIdx * 0.08 + appIdx * 0.02 + 0.01}s`
                                                                    },
                                                                    className: "jsx-afaa7e9f72d5e59c" + " " + "w-5 h-5 rounded bg-[var(--bg-tertiary)] sk-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                                    lineNumber: 93,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        width: `${60 + appIdx % 4 * 10}%`,
                                                                        animationDelay: `${colIdx * 0.08 + appIdx * 0.02 + 0.02}s`
                                                                    },
                                                                    className: "jsx-afaa7e9f72d5e59c" + " " + "h-4 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                                    lineNumber: 97,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, appIdx, true, {
                                                            fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 49
                                                        }, this))
                                                ]
                                            }, catIdx, true, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 71,
                                                columnNumber: 41
                                            }, this))
                                    }, colIdx, false, {
                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                        lineNumber: 69,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                lineNumber: 67,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-afaa7e9f72d5e59c" + " " + "fixed bottom-0 left-0 right-0 p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-afaa7e9f72d5e59c" + " " + "relative w-[85%] mx-auto flex flex-col gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-afaa7e9f72d5e59c" + " " + "bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-afaa7e9f72d5e59c" + " " + "flex items-center justify-between h-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-afaa7e9f72d5e59c" + " " + "w-20 h-full bg-[var(--text-primary)]/20 sk-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-afaa7e9f72d5e59c" + " " + "flex items-center gap-2 px-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-afaa7e9f72d5e59c" + " " + "w-3 h-3 bg-[var(--bg-secondary)] rounded sk-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                                lineNumber: 123,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-afaa7e9f72d5e59c" + " " + "w-20 h-3 bg-[var(--bg-secondary)] rounded sk-pulse"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                                lineNumber: 124,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 120,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "flex items-center gap-4 px-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-afaa7e9f72d5e59c" + " " + "w-32 h-3 bg-[var(--bg-secondary)] rounded sk-pulse hidden sm:block"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-afaa7e9f72d5e59c" + " " + "w-12 h-full bg-[var(--text-primary)]/20 sk-pulse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 127,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                        lineNumber: 119,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                    lineNumber: 118,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-afaa7e9f72d5e59c" + " " + "bg-[var(--bg-tertiary)] border border-[var(--border-primary)]/40 rounded-lg overflow-hidden",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-afaa7e9f72d5e59c" + " " + "flex items-center h-11",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animationDelay: '0.1s'
                                                },
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "w-24 h-full bg-indigo-500/10 sk-pulse flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 137,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "flex-1 flex items-center justify-center px-4 bg-[var(--bg-secondary)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        animationDelay: '0.15s'
                                                    },
                                                    className: "jsx-afaa7e9f72d5e59c" + " " + "w-48 h-4 bg-[var(--bg-tertiary)] rounded sk-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 141,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animationDelay: '0.2s'
                                                },
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "w-20 h-full bg-[var(--bg-tertiary)] sk-pulse flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 147,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animationDelay: '0.25s'
                                                },
                                                className: "jsx-afaa7e9f72d5e59c" + " " + "w-16 h-full bg-[var(--text-primary)]/20 sk-pulse flex-shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                                lineNumber: 151,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                        lineNumber: 136,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                                    lineNumber: 135,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/common/LoadingSkeleton.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/lib/logger.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 日志工具 - 用于调试和错误追踪
__turbopack_context__.s([
    "captureError",
    ()=>captureError,
    "logComponentError",
    ()=>logComponentError,
    "logger",
    ()=>logger
]);
class Logger {
    isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
    logs = [];
    maxLogs = 100;
    createLogEntry(level, message, context) {
        return {
            level,
            message,
            timestamp: new Date().toISOString(),
            context
        };
    }
    addLog(entry) {
        this.logs.push(entry);
        if (this.logs.length > this.maxLogs) {
            this.logs.shift();
        }
    }
    debug(message, context) {
        const entry = this.createLogEntry('debug', message, context);
        this.addLog(entry);
        if (this.isDevelopment) {
            console.debug(`[DEBUG] ${message}`, context || '');
        }
    }
    info(message, context) {
        const entry = this.createLogEntry('info', message, context);
        this.addLog(entry);
        if (this.isDevelopment) {
            console.info(`[INFO] ${message}`, context || '');
        }
    }
    warn(message, context) {
        const entry = this.createLogEntry('warn', message, context);
        this.addLog(entry);
        console.warn(`[WARN] ${message}`, context || '');
    }
    error(message, error, context) {
        const entry = this.createLogEntry('error', message, {
            ...context,
            error: error?.message,
            stack: error?.stack
        });
        this.addLog(entry);
        console.error(`[ERROR] ${message}`, error, context || '');
    }
    // 获取所有日志
    getLogs() {
        return [
            ...this.logs
        ];
    }
    // 清空日志
    clearLogs() {
        this.logs = [];
    }
    // 导出日志为 JSON
    exportLogs() {
        return JSON.stringify(this.logs, null, 2);
    }
    // 下载日志文件
    downloadLogs() {
        const blob = new Blob([
            this.exportLogs()
        ], {
            type: 'application/json'
        });
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
const logger = new Logger();
function captureError(error, context) {
    logger.error('Uncaught error', error, context);
// 可以在这里添加错误上报到服务器的逻辑
// 例如：Sentry, LogRocket, 等
}
function logComponentError(error, errorInfo) {
    logger.error('React component error', error, {
        componentStack: errorInfo.componentStack || 'N/A'
    });
}
}),
"[project]/src/components/common/ErrorBoundary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/logger.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$logger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logComponentError"])(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-[var(--bg-primary)] flex items-center justify-center p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-2xl p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-3xl",
                                children: "⚠️"
                            }, void 0, false, {
                                fileName: "[project]/src/components/common/ErrorBoundary.tsx",
                                lineNumber: 44,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/ErrorBoundary.tsx",
                            lineNumber: 43,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-[var(--text-primary)] mb-2",
                            children: "出错了"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/ErrorBoundary.tsx",
                            lineNumber: 46,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-[var(--text-muted)] mb-4",
                            children: "应用遇到了一个意外错误，请刷新页面重试。"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/ErrorBoundary.tsx",
                            lineNumber: 49,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>window.location.reload(),
                            className: "px-4 py-2 bg-[var(--text-primary)] text-[var(--bg-primary)] rounded-lg hover:opacity-90 transition-opacity",
                            children: "刷新页面"
                        }, void 0, false, {
                            fileName: "[project]/src/components/common/ErrorBoundary.tsx",
                            lineNumber: 52,
                            columnNumber: 25
                        }, this),
                        ("TURBOPACK compile-time value", "development") === 'development' && this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            className: "mt-4 text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    className: "text-xs text-[var(--text-muted)] cursor-pointer hover:text-[var(--text-secondary)]",
                                    children: "技术细节"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/ErrorBoundary.tsx",
                                    lineNumber: 60,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                    className: "mt-2 p-3 bg-[var(--bg-tertiary)] rounded text-xs text-red-400 overflow-auto",
                                    children: this.state.error.toString()
                                }, void 0, false, {
                                    fileName: "[project]/src/components/common/ErrorBoundary.tsx",
                                    lineNumber: 63,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/common/ErrorBoundary.tsx",
                            lineNumber: 59,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/common/ErrorBoundary.tsx",
                    lineNumber: 42,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/common/ErrorBoundary.tsx",
                lineNumber: 41,
                columnNumber: 17
            }, this);
        }
        return this.props.children;
    }
}
}),
"[project]/src/lib/pwa.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// PWA utilities
// Register service worker and handle PWA events
__turbopack_context__.s([
    "isPWAInstalled",
    ()=>isPWAInstalled,
    "registerServiceWorker",
    ()=>registerServiceWorker,
    "setupPWAInstallPrompt",
    ()=>setupPWAInstallPrompt,
    "showInstallPrompt",
    ()=>showInstallPrompt
]);
function registerServiceWorker() {
    if (("TURBOPACK compile-time value", "undefined") === 'undefined' || !('serviceWorker' in navigator)) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
let deferredPrompt = null;
function setupPWAInstallPrompt(onPromptAvailable) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function showInstallPrompt() {
    if (!deferredPrompt) {
        console.log('[PWA] Install prompt not available');
        return false;
    }
    try {
        await deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log('[PWA] User response:', outcome);
        deferredPrompt = null;
        return outcome === 'accepted';
    } catch (error) {
        console.error('[PWA] Install prompt error:', error);
        return false;
    }
}
function isPWAInstalled() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/components/common/PWAProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PWAProvider",
    ()=>PWAProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pwa$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/pwa.ts [app-ssr] (ecmascript)");
'use client';
;
;
function PWAProvider() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$pwa$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerServiceWorker"])();
    }, []);
    return null;
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
"[project]/src/components/common/LazyImage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 图片懒加载组件
__turbopack_context__.s([
    "LazyImage",
    ()=>LazyImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function LazyImage({ src, alt, className, fallback = '/placeholder.svg' }) {
    const [imageSrc, setImageSrc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(fallback);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!imgRef.current) return;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const img = new Image();
                    img.src = src;
                    img.onload = ()=>{
                        setImageSrc(src);
                        setIsLoading(false);
                    };
                    img.onerror = ()=>{
                        setError(true);
                        setIsLoading(false);
                    };
                    observer.disconnect();
                }
            });
        }, {
            rootMargin: '50px'
        });
        observer.observe(imgRef.current);
        return ()=>observer.disconnect();
    }, [
        src
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        ref: imgRef,
        src: imageSrc,
        alt: alt,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(className, isLoading && 'animate-pulse bg-gray-200 dark:bg-gray-800', error && 'opacity-50'),
        loading: "lazy"
    }, void 0, false, {
        fileName: "[project]/src/components/common/LazyImage.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/lib/i18n-enhanced.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 国际化配置
__turbopack_context__.s([
    "defaultLocale",
    ()=>defaultLocale,
    "locales",
    ()=>locales,
    "t",
    ()=>t,
    "translations",
    ()=>translations
]);
const locales = [
    'zh',
    'en'
];
const defaultLocale = 'zh';
const translations = {
    zh: {
        'header.title': 'Linux 应用安装器',
        'header.subtitle': '基于 TuxMate 的完整中文版',
        'header.howItWorks': '使用说明',
        'header.contribute': '参与贡献',
        'search.placeholder': '搜索应用... (按 / 快速聚焦)',
        'search.noResults': '没有找到匹配的应用',
        'distro.select': '选择发行版',
        'distro.selected': '已选择',
        'app.install': '安装',
        'app.installed': '已安装',
        'app.unavailable': '不可用',
        'app.details': '详情',
        'command.selectedApps': '已选择 {count} 个应用',
        'command.downloadScript': '下载脚本',
        'command.copyCommand': '复制命令',
        'command.clearAll': '清空全部',
        'command.copied': '已复制!',
        'config.title': '配置管理',
        'config.save': '保存配置',
        'config.load': '加载配置',
        'config.export': '导出为文件',
        'config.import': '导入配置',
        'config.share': '分享链接',
        'preset.title': '预设方案',
        'preset.developer': '开发环境',
        'preset.gaming': '游戏娱乐',
        'preset.productivity': '办公效率',
        'category.browsers': '网页浏览器',
        'category.communication': '通讯软件',
        'category.development': '开发工具',
        'category.media': '媒体播放',
        'category.games': '游戏',
        'category.office': '办公软件',
        'category.security': '安全工具',
        'category.system': '系统工具',
        'common.loading': '加载中...',
        'common.error': '出错了',
        'common.retry': '重试',
        'common.cancel': '取消',
        'common.confirm': '确认'
    },
    en: {
        'header.title': 'Linux App Installer',
        'header.subtitle': 'Complete Chinese Version Based on TuxMate',
        'header.howItWorks': 'How It Works',
        'header.contribute': 'Contribute',
        'search.placeholder': 'Search apps... (Press / to focus)',
        'search.noResults': 'No apps found',
        'distro.select': 'Select Distribution',
        'distro.selected': 'Selected',
        'app.install': 'Install',
        'app.installed': 'Installed',
        'app.unavailable': 'Unavailable',
        'app.details': 'Details',
        'command.selectedApps': '{count} apps selected',
        'command.downloadScript': 'Download Script',
        'command.copyCommand': 'Copy Command',
        'command.clearAll': 'Clear All',
        'command.copied': 'Copied!',
        'config.title': 'Config Manager',
        'config.save': 'Save Config',
        'config.load': 'Load Config',
        'config.export': 'Export File',
        'config.import': 'Import Config',
        'config.share': 'Share Link',
        'preset.title': 'Presets',
        'preset.developer': 'Developer Setup',
        'preset.gaming': 'Gaming Setup',
        'preset.productivity': 'Productivity Setup',
        'category.browsers': 'Web Browsers',
        'category.communication': 'Communication',
        'category.development': 'Development Tools',
        'category.media': 'Media Players',
        'category.games': 'Games',
        'category.office': 'Office',
        'category.security': 'Security Tools',
        'category.system': 'System Tools',
        'common.loading': 'Loading...',
        'common.error': 'Error',
        'common.retry': 'Retry',
        'common.cancel': 'Cancel',
        'common.confirm': 'Confirm'
    }
};
function t(key, locale = defaultLocale, params) {
    let text = translations[locale][key] || translations[defaultLocale][key] || key;
    // Replace parameters like {count}
    if (params) {
        Object.entries(params).forEach(([param, value])=>{
            text = text.replace(`{${param}}`, String(value));
        });
    }
    return text;
}
}),
"[project]/src/hooks/useI18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 国际化 Hook
__turbopack_context__.s([
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$enhanced$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n-enhanced.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const useI18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        locale: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$enhanced$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"],
        setLocale: (locale)=>set({
                locale
            }),
        t: (key, params)=>{
            const { locale } = get();
            let text = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$enhanced$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][locale]?.[key] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$enhanced$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["translations"][__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2d$enhanced$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultLocale"]][key] || key;
            if (params) {
                Object.entries(params).forEach(([param, value])=>{
                    text = text.replace(`{${param}}`, String(value));
                });
            }
            return text;
        }
    }), {
    name: 'locale-storage'
}));
}),
"[project]/src/components/common/LanguageSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 语言切换组件示例
__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useI18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useI18n.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function LanguageSwitcher() {
    const { locale, setLocale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useI18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useI18n"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>setLocale(locale === 'zh' ? 'en' : 'zh'),
        className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors",
        "aria-label": "切换语言",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/common/LanguageSwitcher.tsx",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-medium",
                children: locale === 'zh' ? 'EN' : '中文'
            }, void 0, false, {
                fileName: "[project]/src/components/common/LanguageSwitcher.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/common/LanguageSwitcher.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f97bca50._.js.map