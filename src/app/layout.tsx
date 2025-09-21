import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Anmol Mishra - Frontend Developer & Data Analytics",
  description: "Portfolio website of Anmol Mishra, a passionate frontend developer and data analytics enthusiast creating exceptional digital experiences with modern technologies.",
  keywords: ["developer", "portfolio", "web development", "react", "next.js", "typescript", "frontend", "data analytics"],
  authors: [{ name: "Anmol Mishra" }],
  creator: "Anmol Mishra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" style={{ fontFamily: 'Calibri, sans-serif' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
