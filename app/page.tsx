import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LUMI – Leben mit Kindern e.V.",
  description: "LUMI",
};

export default function Home() {

  return (
    <div>
      <h1>Herzlich Willkommen bei der Kindertageseinrichtung LUMI – Leben mit Kindern e. V.</h1>
      <p>LUMI ist eine Tagesspielgruppe / Kita in Tübingen für Kinder im Alter von 1-3 Jahren.</p>

      {/* <div className="bg-lumi-blue text-white rounded-lg p-4">
        Highlighted text, if needed
      </div> */}

      <h2>Für einen starken Start ins Leben! Unser Angebot</h2>
      <ul className="list-disc list-inside">
        <li>eine liebevolle und individuelle Betreuung in einer kleinen Gruppe</li>
        <li>eine vertrauensvolle Atmosphäre in einer kleinkindgerechten Umgebung</li>
        <li>viel Zeit zum Herumtollen und Spielen drinnen und draußen</li>
        <li>ein schöner Garten am Österberg zum Werkeln und Matschen</li>
      </ul>

      <h2>Öffnungszeiten</h2>
      <p><strong>Mo-Do:</strong> 7:30 Uhr bis 15:00 Uhr<br />
        <strong>Fr:</strong> 7:30 Uhr bis 12:30 Uhr</p>

      <h2>Der Verein – Leben mit Kindern e.V.</h2>
      <p>
        Träger der Einrichtung ist der Verein <em>LUMI – Leben mit Kindern e.V.</em>. Voraussetzung für eine Betreuung im LUMI ist der Beitritt in den Verein. Die Vereinsgebühr beträgt 25€ pro Jahr (ganze Familie).
      </p>
    </div>
  );
}
