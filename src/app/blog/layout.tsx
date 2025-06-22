import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
// @ts-ignore
import { Theme } from "@radix-ui/themes";
import Providers from "@/redux/Provider";



export const metadata: Metadata = {
  title: "Ashraful Pathan",
  description: "Ashraful pathan portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
