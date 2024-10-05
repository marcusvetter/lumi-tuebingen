'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";
import "./globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()

  return (
    <html lang="en">
      <body className="grid justify-items-center overflow-y-scroll min-h-screen">
        <div className="max-w-screen-lg bg-white sm:my-8 flex flex-col">
          <div className="w-full h-1 bg-gradient-to-r from-lumi-blue /70 via-lumi-red/70 to-lumi-green/70"></div>
          <div className="px-4 sm:px-8 pt-4 sm:pt-8 grow">
            <nav className="grid grid-cols-2 sm:grid-cols-5 mb-8">

              <div className="col-span-2 sm:col-span-5">
                <Link href={'/'}>
                  <Image
                    src="/lumi-train.jpg"
                    alt="LUMI Train"
                    width={1092}
                    height={100}
                    priority
                  />
                </Link>
              </div>

              <Link href={`/tagesablauf`} className={`link m-1 sm:m-2 p-2 sm:px-5 sm:py-4 border-2 border-lumi-blue rounded-lg hover:bg-lumi-blue hover:text-white transition-transform duration-200 hover:-translate-y-1 ${pathname === `/tagesablauf` ? `bg-lumi-blue text-white -translate-y-1` : 'bg-lumi-white translate-y-0'}`}>
                <div className={`sm:mb-3 text-xl sm:text-2xl font-semibold`}>
                  Der Tag im LUMI
                </div>
                <div className={`text-sm opacity-50`}>
                  Das ist unser Tagesablauf.
                </div>
              </Link>

              <Link href={`/konzeption`} className={`link m-1 sm:m-2 p-2 sm:px-5 sm:py-4 border-2 border-lumi-red rounded-lg hover:bg-lumi-red hover:text-white transition-transform duration-200 hover:-translate-y-1 ${pathname === `/konzeption` ? `bg-lumi-red text-white -translate-y-1` : 'bg-lumi-white translate-y-0'}`}>
                <div className={`sm:mb-3 text-xl sm:text-2xl font-semibold`}>
                  Unsere Konzeption
                </div>
                <div className={`text-sm opacity-50`}>
                  Diese Konzepte haben wir im LUMI.
                </div>
              </Link>

              <Link href={`/kontakt`} className={`link m-1 sm:m-2 p-2 sm:px-5 sm:py-4 border-2 border-lumi-yellow rounded-lg hover:bg-lumi-yellow transition-transform duration-200 hover:-translate-y-1 ${pathname === `/kontakt` ? `bg-lumi-yellow -translate-y-1` : 'bg-lumi-white translate-y-0'}`}>
                <div className={`sm:mb-3 text-xl sm:text-2xl font-semibold`}>
                  Der Weg zu uns
                </div>
                <div className={`text-sm opacity-50`}>
                  Hier erfährst du, wie du Kontakt mit uns aufnehmen kannst.
                </div>
              </Link>

              <Link href={`/team`} className={`link m-1 sm:m-2 p-2 sm:px-5 sm:py-4 border-2 border-lumi-orange rounded-lg hover:bg-lumi-orange hover:text-white transition-transform duration-200 hover:-translate-y-1 ${pathname === `/team` ? `bg-lumi-orange text-white -translate-y-1` : 'bg-lumi-white translate-y-0'}`}>
                <div className={`sm:mb-3 text-xl sm:text-2xl font-semibold`}>
                  Das LUMI Team
                </div>
                <div className={`text-sm opacity-50`}>
                  Lerne das Team des LUMI kennen.
                </div>
              </Link>

              <Link href={`/verein`} className={`link m-1 sm:m-2 p-2 sm:px-5 sm:py-4 border-2 border-lumi-green rounded-lg hover:bg-lumi-green hover:text-white transition-transform duration-200 hover:-translate-y-1 ${pathname === `/verein` ? `bg-lumi-green text-white -translate-y-1` : 'bg-lumi-white translate-y-0'}`}>
                <div className={`sm:mb-3 text-xl sm:text-2xl font-semibold`}>
                  Der Verein
                </div>
                <div className={`text-sm opacity-50`}>
                  Leben mit Kindern e.V. - der Verein des LUMIs
                </div>
              </Link>

            </nav>

            <main className="p-2">
              {children}
            </main>
          </div>
          <footer className="w-full mt-12">
            <div className="w-full h-1 bg-gradient-to-r from-lumi-green /70 via-lumi-red/70 to-lumi-blue/70"></div>
            <div className="py-4 grid grid-cols-1 space-y-4 sm:space-y-0 sm:grid-cols-3 place-content-between text-center">
              <div>
                (2024) Leben mit Kindern e.V.
              </div>
              <div>
                Made with ❤️ in Dußlingen
              </div>
              <div>
                <Link href={"/impressum"} className="font-semibold">
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
