"use client";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";

function LayoutShell({ children }: { children: React.ReactNode }) {
  const { dir, fontClass } = useLanguage();

  return (
    <html lang={dir === "rtl" ? "fa" : "en"} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${fontClass} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <LayoutShell>{children}</LayoutShell>
    </LanguageProvider>
  );
}
