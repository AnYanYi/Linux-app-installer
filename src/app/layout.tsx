import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { ErrorBoundary } from "@/components/common";

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
  title: "Linux 应用安装器 - 一键生成安装命令",
  description: "Linux 应用安装器帮助您轻松生成终端命令，在任何 Linux 发行版上批量安装应用。支持 Ubuntu、Debian、Arch、Fedora 等主流发行版。",
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
  ],
  authors: [{ name: "AnYanYi" }],
  creator: "AnYanYi",
  publisher: "AnYanYi",
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
  alternates: {
    canonical: "https://pkg.tbbbk.com",
  },
  openGraph: {
    title: "Linux 应用安装器",
    description: "为 Ubuntu、Debian、Arch、Fedora 等发行版生成 180+ 应用的安装命令。基于 TuxMate 的中文版。",
    type: "website",
    url: "https://pkg.tbbbk.com",
    siteName: "Linux 应用安装器",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linux 应用安装器",
    description: "为任何 Linux 发行版生成 180+ 应用的安装命令。完整中文支持。",
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

  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {umamiId && (
          <script defer src="https://cloud.umami.is/script.js" data-website-id={umamiId} />
        )}
        {cfBeacon && (
          <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon={`{"token": "${cfBeacon}"}`} />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ErrorBoundary>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
