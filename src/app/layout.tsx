import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from '@radix-ui/themes';
import Providers from "@/redux/Provider";
import { Toaster } from "react-hot-toast";
import { Inter } from 'next/font/google'

// Font setup
const inter = Inter({
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "কুড়িপাড়া উচ্চ বিদ্যালয় | Kuripara High School, Madanpur, Narayanganj",
  description: "কুড়িপাড়া উচ্চ বিদ্যালয়, নারায়ণগঞ্জ জেলার বন্দর উপজেলার মদনপুর এলাকায় অবস্থিত একটি ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। এটি ১৯৬৮ সালে প্রতিষ্ঠিত হয় এবং আজও গৌরবময়ভাবে শিক্ষা কার্যক্রম পরিচালনা করছে।",
  openGraph: {
    title: "কুড়িপাড়া উচ্চ বিদ্যালয় | Kuripara High School",
    description: "শিক্ষার আলো ছড়ানো ঐতিহ্যবাহী প্রতিষ্ঠান – Kuripara High School, Madanpur, Narayanganj। অভিজ্ঞ শিক্ষক, চমৎকার ফলাফল ও মনোরম পরিবেশে শিক্ষা দিচ্ছে ৬ষ্ঠ থেকে ১০ম শ্রেণি পর্যন্ত।",
    url: "https://kuripara-high-school.vercel.app",
    siteName: "Kuripara High School",
    images: [
      {
        url: "https://i.ibb.co/8qS6Lzx/school.png",
        width: 1200,
        height: 630,
        alt: "Kuripara High School Image",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  alternates: {
    canonical: "https://kuripara-high-school.vercel.app",
  },
  keywords: ["কুড়িপাড়া উচ্চ বিদ্যালয়", "Kuripara High School", "Narayanganj School", "Madanpur School", "Bangladesh High School", "SSC School Narayanganj"],
  authors: [{ name: "Kuripara High School Authority" }],
  robots: "index, follow"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={inter.className}>
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
