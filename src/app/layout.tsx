import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { Socials } from "@/components/socials";
import localFont from "next/font/local";
import WalletContextProvider from "@/contexts/wallet-context-provider";
import Navbar from "@/components/navbar";

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
  title: "Swaggy Monsters",
  description: "Swaggy Monsters SOL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${swaggy.variable} font-swaggy`}>
        <WalletContextProvider>
          <Navbar className="fixed top-0" />
          <Socials />
          {children}
          <Footer />
        </WalletContextProvider>
      </body>
    </html>
  );
}
