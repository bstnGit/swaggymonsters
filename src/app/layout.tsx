import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const swaggy = localFont({
  src: [
    {
      path: "../../public/fonts/swaggyfont.woff",
      weight: "500",
      style: "normal",
    },

    {
      path: "../../public/fonts/swaggyfont.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-swaggy",
});
const inter = Inter({ subsets: ["latin"] });
const metadata: Metadata = {
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
      <body className="w-full">
        {children}
        <Footer />
      </body>
    </html>
  );
}
