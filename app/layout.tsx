import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Z-BANCK | The Hybrid Crypto Bank",
  description: "Premium crypto-fiat banking platform powered by ZETTA ecosystem",
  keywords: ["crypto", "banking", "DeFi", "ZETTA", "blockchain"],
  authors: [{ name: "ZETTA Labs" }],
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-zinc-950">
        <div className="relative min-h-screen">
          {/* Background gradient overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-zinc-950 to-amber-950/20 pointer-events-none" />
          
          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
