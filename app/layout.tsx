import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "A developer blog using Next JS 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        {/*  Providers needs the use client directive so it must placed in another file */}
        <Providers attribute='class' defaultTheme='system' enableSystem>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
