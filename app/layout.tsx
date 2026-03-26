import type { Metadata } from "next";
import { Space_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const bebasNeue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
  title: "Francesco Evangelista · Portfolio",
  description: "Art Director and Visual Designer, Roma",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.className} ${spaceMono.variable} ${bebasNeue.variable} antialiased selection:bg-muted selection:text-ink`}>
        <Cursor />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
