import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });
import Providers from "./providers";
export const metadata: Metadata = {
  title: "Sudesh Garments",
  description: "Trendy, Luxurious, Stylish, Satisfied",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en"><body className={inter.className}>
      <Providers> {children}</Providers>
     </body>
      
    </html>
  );
}
