import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/sections/Footer.section";
import HeaderSection from "@/components/sections/Header.section";


const inter = Inter({
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Kyi Min Khine | Full-Stack React Developer",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}


