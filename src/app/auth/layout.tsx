import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
// @ts-ignore
import { Theme } from "@radix-ui/themes";
import Providers from "@/redux/Provider";
import Side_bar from "@/components/admin/navigation/Side_bar";
import Admin_nav from "@/components/admin/navigation/Admin_nav";
import Admin_Footer from "@/components/admin/navigation/Admin_Footer";




export const metadata: Metadata = {
  title: "Admin Login",
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
        // className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
      <Providers>
        <Theme>
          {children}
        </Theme>
      </Providers>
        
      </body>
    </html>
  );
}
