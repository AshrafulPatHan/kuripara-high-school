import type { Metadata } from "next";
import "./app.css";
import { Geist, Geist_Mono } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Providers from "@/redux/Provider";
import Side_bar from "@/components/admin/navigation/Side_bar";
import Admin_nav from "@/components/admin/navigation/Admin_nav";
import Admin_Footer from "@/components/admin/navigation/Admin_Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
   display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
   display: "swap",
});

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin Panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
      <Providers>
        <Theme>
          <div className="flex flex-row gap-8 bg-[#E5E5E5] " >
            <div className="">
                <Side_bar/>
            </div>
            <div className="flex flex-col min-h-screen ">
                <Admin_nav/>
                <div className=" flex-grow mt-12 ">
                  {children}
                </div>
                <Admin_Footer/>
            </div>
          </div>
        </Theme>
      </Providers>
        
      </body>
    </html>
  );
}
