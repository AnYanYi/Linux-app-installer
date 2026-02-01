import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { ErrorBoundary, PWAProvider } from "@/components/common";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pkg.tbbbk.com"),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  title: {
    default: "Linux 应用安装器 - 一键生成安装命令 | 支持 180+ 应用",
    template: "%s | Linux 应用安装器",
  },
  description: "Linux 应用安装器帮助您轻松生成终端命令，在任何 Linux 发行版上批量安装应用。支持 Ubuntu、Debian、Arch、Fedora、openSUSE 等主流发行版，提供 180+ 常用应用的一键安装脚本。完全免费，无需注册。",
  keywords: [
    "Linux",
    "应用安装",
    "包管理器",
    "Ubuntu",
    "Debian",
    "Arch Linux",
    "Fedora",
    "终端命令",
    "批量安装",
    "apt",
    "pacman",
    "dnf",
    "flatpak",
    "snap",
    "AUR",
    "Linux 软件安装",
    "一键安装",
    "命令行工具",
    "开源工具",
    "系统管理",
  ],
  authors: [{ name: "AnYanYi", url: "https://pkg.tbbbk.com" }],
  creator: "AnYanYi",
  publisher: "AnYanYi",
  applicationName: "Linux 应用安装器",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Linux 安装器",
  },
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
      "baidu-site-verification": process.env.NEXT_PUBLIC_BAIDU_VERIFICATION || "",
    },
  },
  alternates: {
    canonical: "https://pkg.tbbbk.com",
    languages: {
      "zh-CN": "https://pkg.tbbbk.com",
      "en": "https://pkg.tbbbk.com",
    },
  },
  openGraph: {
    title: "Linux 应用安装器 - 一键生成 180+ 应用安装命令",
    description: "为 Ubuntu、Debian、Arch、Fedora 等发行版生成 180+ 应用的安装命令。支持 apt、pacman、dnf、flatpak、snap、AUR 等多种包管理器。完全免费，开箱即用。",
    type: "website",
    url: "https://pkg.tbbbk.com",
    siteName: "Linux 应用安装器",
    locale: "zh_CN",
    alternateLocale: ["en_US"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Linux 应用安装器 - 支持 180+ 应用的一键安装工具",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Linux 应用安装器 - 一键生成安装命令",
    description: "为任何 Linux 发行版生成 180+ 应用的安装命令。支持 Ubuntu、Arch、Fedora 等主流发行版。完整中文支持，完全免费。",
    images: ["/og-image.png"],
  },
  other: {
    "referrer": "origin-when-cross-origin",
  },
};

// Script to run before React hydrates to prevent theme flash
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'light' || !theme) {
        document.documentElement.classList.add('light');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const umamiId = process.env.NEXT_PUBLIC_UMAMI_ID;
  const cfBeacon = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Linux 应用安装器",
    "alternateName": "Linux App Installer",
    "url": "https://pkg.tbbbk.com",
    "description": "为 Ubuntu、Debian、Arch、Fedora 等 Linux 发行版生成 180+ 应用的一键安装命令。支持 apt、pacman、dnf、flatpak、snap、AUR 等多种包管理器。",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Linux",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CNY"
    },
    "author": {
      "@type": "Person",
      "name": "AnYanYi"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "120"
    },
    "featureList": [
      "支持 180+ 常用应用",
      "支持 10+ Linux 发行版",
      "一键复制安装命令",
      "支持多种包管理器",
      "完全免费开源",
      "无需注册登录",
      "中英双语界面"
    ],
    "inLanguage": ["zh-CN", "en"],
    "browserRequirements": "Requires JavaScript. Modern browsers."
  };

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Linux 安装器" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Umami 统计 */}
        <script defer src="https://stats.nkkk.de/script.js" data-website-id="d79264e2-d938-4a78-a91e-bd2129e7286c"></script>
        {cfBeacon && (
          <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon={`{"token": "${cfBeacon}"}`} />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <ThemeProvider>
            <PWAProvider />
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
