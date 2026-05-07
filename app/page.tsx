import type { Metadata } from "next";
import PdfViewer from "./components/PdfViewer"
import Link from 'next/link'

export const metadata: Metadata = {
  title: "LUMI - Leben mit Kindern e.V.",
  description: "LUMI",
};

export default function Home() {

  return (
    <div>
      <h1>Herzlich Willkommen im LUMI!</h1>
      <p>LUMI ist eine Krippengruppe in Tübingen für Kinder im Alter von 1-3 Jahren.</p>

      {/* <div className="bg-lumi-blue text-white rounded-lg p-4">
        <strong>Einladung zur Infoveranstaltung</strong><br /><br />
        Am <strong>22. Januar 2026</strong> um <strong>15:30 Uhr</strong> laden wir alle interessierten Familien herzlich zu unserer Infoveranstaltung ein. Die Veranstaltung dauert ungefähr eine Stunde. Wir freuen uns auf einen schönen Austausch und ein erstes Kennenlernen im LUMI.<br /><br />
        Anmeldungen bitte per E-Mail an Anne Martin: leitung[at]lumi-tuebingen[punkt]de
      </div> */}

      <h2>Für einen starken Start ins Leben! Unser Angebot</h2>
      <ul>
        <li>eine liebevolle und individuelle Betreuung in einer kleinen Gruppe</li>
        <li>eine vertrauensvolle Atmosphäre in einer kleinkindgerechten Umgebung</li>
        <li>viel Zeit zum Herumtollen und Spielen drinnen und draußen</li>
        <li>ein schöner Garten am Österberg zum Werkeln und Matschen</li>
      </ul>

      <h2>Öffnungszeiten</h2>
      <p><strong>Mo-Do:</strong> 7:30 Uhr bis 15:00 Uhr<br />
        <strong>Fr:</strong> 7:30 Uhr bis 12:30 Uhr</p>

      <h2>Der Verein - Leben mit Kindern e.V.</h2>
      <p>
        Träger der Einrichtung ist der Verein <em>LUMI - Leben mit Kindern e.V.</em>.<br />
        Voraussetzung für eine Betreuung im LUMI ist der Beitritt in den Verein. Die Vereinsgebühr beträgt 25€ pro Jahr (ganze Familie).
      </p>

      <h2>Aktuelles Stellenangebot</h2>
      <div className="max-w-2xl mb-8">
        <PdfViewer pdfPath="/Paedagogische_Fachkraft_(mwd)_gesucht.pdf"/>
      </div>

      Weitere Stellenangebote findest du <Link href={`/stellenangebote`} className="border-b">hier</Link>.
    </div>
  );
}
