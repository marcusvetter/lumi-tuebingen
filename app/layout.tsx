'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";
import "./globals.css";

interface NavCardParams {
  title: string;
  text: string;
  color: 'red' | 'blue' | 'yellow' | 'orange' | 'green';
  pathname: string;
  currentPathname: string;
}

function NavCard({ title, text, color, pathname, currentPathname }: NavCardParams) {
  return <Link href={`/${pathname}`} className={`link m-2 px-5 py-4 border-2 border-lumi-${color} rounded-lg hover:bg-lumi-${color} hover:text-white transition-transform duration-200 hover:-translate-y-3 ${currentPathname === `/${pathname}` ? `bg-lumi-${color} text-white -translate-y-3` : 'bg-lumi-white translate-y-0'}`}
  >
    <h2 className={`mb-3 text-2xl font-semibold`}>
      {title}
    </h2>
    <p className={`m-0 text-sm opacity-50`}>
      {text}
    </p>
  </Link>
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathname = usePathname()

  return (
    <html lang="en">
      <body className="grid justify-items-center">
        <div className="space-x-8 max-w-screen-lg">

          <nav className="grid grid-cols-5">

            <div className="col-span-5">
              <Image
                src="/lumi-train.png"
                alt="LUMI Train"
                width={1092}
                height={100}
                priority
              />
            </div>

            <Link href={`/tagesablauf`} className={`link m-2 px-5 py-4 border-2 border-lumi-blue rounded-lg hover:bg-lumi-blue hover:text-white transition-transform duration-200 hover:-translate-y-3 ${pathname === `/` ? `bg-lumi-blue text-white -translate-y-3` : 'bg-lumi-white translate-y-0'}`}>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Der Tag im LUMI
              </h2>
              <p className={`m-0 text-sm opacity-50`}>
                Das ist unser Tagesablauf.
              </p>
            </Link>

            <Link href={`/konzeption`} className={`link m-2 px-5 py-4 border-2 border-lumi-red rounded-lg hover:bg-lumi-red hover:text-white transition-transform duration-200 hover:-translate-y-3 ${pathname === `/konzeption` ? `bg-lumi-red text-white -translate-y-3` : 'bg-lumi-white translate-y-0'}`}>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Unsere Konzeption
              </h2>
              <p className={`m-0 text-sm opacity-50`}>
                Diese Konzepte haben wir im LUMI.
              </p>
            </Link>

            <Link href={`/kontakt`} className={`link m-2 px-5 py-4 border-2 border-lumi-yellow rounded-lg hover:bg-lumi-yellow hover:text-white transition-transform duration-200 hover:-translate-y-3 ${pathname === `/kontakt` ? `bg-lumi-yellow text-white -translate-y-3` : 'bg-lumi-white translate-y-0'}`}>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Der Weg zu uns
              </h2>
              <p className={`m-0 text-sm opacity-50`}>
                Hier erfährst du, wie du Kontakt mit uns aufnehmen kannst.
              </p>
            </Link>

            <Link href={`/team`} className={`link m-2 px-5 py-4 border-2 border-lumi-orange rounded-lg hover:bg-lumi-orange hover:text-white transition-transform duration-200 hover:-translate-y-3 ${pathname === `/team` ? `bg-lumi-orange text-white -translate-y-3` : 'bg-lumi-white translate-y-0'}`}>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Das LUMI Team
              </h2>
              <p className={`m-0 text-sm opacity-50`}>
                Lerne das Team des LUMI kennen.
              </p>
            </Link>

            <Link href={`/verein`} className={`link m-2 px-5 py-4 border-2 border-lumi-green rounded-lg hover:bg-lumi-green hover:text-white transition-transform duration-200 hover:-translate-y-3 ${pathname === `/verein` ? `bg-lumi-green text-white -translate-y-3` : 'bg-lumi-white translate-y-0'}`}>
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Der Verein
              </h2>
              <p className={`m-0 text-sm opacity-50`}>
                Leben mit Kindern e.V. - der Verein des LUMIs
              </p>
            </Link>

          </nav>
          <div className="grow">{children}</div>
          <a
            href="#"
            className="m-2"
          >
            <h2 className={`mb-3 text-2xl font-semibold group group-hover:center motion-reduce:transform-non`}>
              Impressum
            </h2>
          </a>
        </div>
      </body>
    </html>
  );
}
