import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative flex place-items-center">
        <Image
          className="relative"
          src="/lumi-train.jpeg"
          alt="LUMI Train"
          width={1092}
          height={100}
          priority
        />
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="#"
          className="m-2 bg-lumi-blue group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-lumi-blue hover:bg-lumi-white"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Der Tag im LUMI{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Unser Tagesablauf
          </p>
        </a>

        <a
          href="#"
          className="m-2 bg-lumi-red group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-lumi-red hover:bg-lumi-white"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Unsere Konzeption{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Welche Konzepte verfolgen wir im LUMI
          </p>
        </a>

        <a
          href="#"
          className="m-2 bg-lumi-yellow group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-lumi-yellow hover:bg-lumi-white"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Der Weg zu uns{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Hier erfährst du, wie du Kontakt mit uns aufnehmen kannst!
          </p>
        </a>

        <a
          href="#"
          className="m-2 bg-lumi-yellow group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-lumi-yellow hover:bg-lumi-white"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Das LUMI Team{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Wie sieht eigentlich das Team des LUMI aus?
          </p>
        </a>

        <a
          href="#"
          className="m-2 bg-lumi-green group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-lumi-green hover:bg-lumi-white"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Der Verein{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Leben mit Kindern e.V. – der Verein hinter dem LUMI
          </p>
        </a>

        <a
          href="#"
          className="m-2 bg-lumi-red group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-lumi-red hover:bg-lumi-white"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Impressum & Datenschutz{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Alles, was ihr rund um Datenschutz und rechtliche Themen wissen müsst.
          </p>
        </a>
      </div>
    </main>
  );
}
