import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Providers from "@/redux/Provider";
import { Toaster } from "react-hot-toast";



export const metadata: Metadata = {
  title: "Kuripaga High school",
  description: "Ashraful Pathan portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
