"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthOrSales = pathname === "/get-started" || pathname === "/contact-sales";

  if (isAuthOrSales) {
    return (
      <main className="w-full h-screen min-h-screen overflow-hidden max-h-screen relative">
        {children}
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
