import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
// @ts-ignore
import { Theme, ThemePanel } from '@radix-ui/themes';
import Providers from "@/redux/Provider";
import { Toaster } from "react-hot-toast";
import '@radix-ui/themes/styles.css';
import { Inter } from 'next/font/google'

// Inter font setup
const inter = Inter({
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Kuripara High School",
  description: "Kuripara High School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <Theme>
            <Toaster position="top-center" />
            {children}
          </Theme>
        </Providers>
      </body>
    </html>
  );
}
