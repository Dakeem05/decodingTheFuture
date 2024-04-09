import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const xeroda = localfont({
  src: [
    {
      path: "../../public/xeroda-font/XerodaRegular-p7dwr.otf",
      
    }
  ],
  variable: "--font-xeroda"
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={xeroda.variable}>{children}</body>
    </html>
  );
}
