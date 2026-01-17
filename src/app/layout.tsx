import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Medical Transportation Minneapolis-St. Paul | Mediride",
  description:
    "Premium medical transportation in Twin Cities with caregiver-trained drivers & hybrid fleet. Serving private clients, healthcare facilities & senior communities. Book reliable rides today!",
  keywords: [
    "Medical transportation Minneapolis-St. Paul",
    "NEMT Twin Cities",
    "Premium medical transport",
    "Medical transportation Twin Cities",
    "Healthcare facility transportation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
