import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Jounce — AI-native single-file full-stack language",
  description:
    "Jounce is a single-file, AI-native full-stack language that compiles one .jnc file into server.js, client.js, styles.css, and index.html — 640/640 tests passing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50">{children}</body>
    </html>
  );
}
