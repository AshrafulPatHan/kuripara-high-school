import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Providers from "@/redux/Provider";
import Side_bar from "@/components/admin/navigation/Side_bar";
import Admin_nav from "@/components/admin/navigation/Admin_nav";
import Admin_Footer from "@/components/admin/navigation/Admin_Footer";
import "./app.css";
import PrivateRoute from "@/components/admin/auth/PrivateRoute";


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
    <Providers>
      <Theme>
        <PrivateRoute>
          <div className="flex flex-row gap-2 lg:gap-8 bg-[#E5E5E5]">
            {/* Side Bar - Sticky */}
            <div className="sticky top-0 h-screen z-50 hidden md:flex">
              <Side_bar />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col min-h-screen overflow-x-auto ">
              {/* Navbar - Sticky */}
                <Admin_nav />

              {/* Scrollable Content */}
              <div className="flex-grow min-w-[900px] mt-4">
                {children}
              </div>

              <Admin_Footer />
            </div>
          </div>
        </PrivateRoute>
      </Theme>
    </Providers>
  );
}
