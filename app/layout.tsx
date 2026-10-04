import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Nav from "./components/Nav";
import { FIXED_PAGES } from "./lib/content";
import { getNavItems } from "./lib/nav";
import "./globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const navItems = getNavItems()

  return (
    <html lang="de">
      <body className="grid justify-items-center overflow-y-scroll min-h-screen">
        <div className="max-w-(--breakpoint-lg) bg-white lg:my-8 flex flex-col">
          <div className="w-full h-1 bg-linear-to-r from-lumi-blue/70 via-lumi-red/70 to-lumi-green/70"></div>
          <div className="px-4 lg:px-8 pt-4 lg:pt-8 grow">
            <nav
              className="lumi-nav grid grid-cols-2 mb-8 hyphens-auto"
              /* as many columns as there are items, so the bar always fills the width */
              style={{ "--nav-columns": Math.max(navItems.length, 1) } as React.CSSProperties}
            >

              <div className="col-span-full">
                <Link href={'/'}>
                  <Image
                    src="/lumi-train.jpeg"
                    alt="LUMI Train"
                    width={1092}
                    height={100}
                    priority
                  />
                </Link>
              </div>

              <Nav items={navItems} />

            </nav>

            <main className="p-2">
              {children}
            </main>
          </div>
          <footer className="w-full mt-12 mb-12 lg:mb-0">
            <div className="w-full h-1 bg-linear-to-r from-lumi-green/70 via-lumi-red/70 to-lumi-blue/70"></div>
            <div className="py-4 grid grid-cols-1 space-y-4 lg:space-y-0 lg:grid-cols-3 place-content-between text-center">
              <div>
                <Link href={'/'} className="font-semibold">
                  Leben mit Kindern e.V.
                </Link>
              </div>
              <div>
                Made with ❤️ in Tübingen
              </div>
              <div>
                <Link href={FIXED_PAGES.impressum} className="font-semibold">
                  Impressum & Datenschutz
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body >
    </html >
  );
}
