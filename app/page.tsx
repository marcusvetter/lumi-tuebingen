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

      <h2>Für einen starken Start ins Leben! Unser Angebot</h2>

      <ul>
        <li>eine liebevolle und individuelle Betreuung in einer kleinen Gruppe</li>
        <li>eine vertrauensvolle Atmosphäre in einer kleinkindgerechten Umgebung</li>
        <li>viel Zeit zum Herumtollen und Spielen drinnen und draußen</li>
        <li>ein schöner Garten am Österberg zum Werkeln und Matschen</li>
      </ul>

      <h2>Zeiten und Preise</h2>

      <p>Wir bieten eine ganztägige Betreuung für Kinder von 1-3 Jahren. Unser Konzept kombiniert die Betreuung in der Spielgruppe und der Kindertagespflege.</p>

      <h2>Öffnungszeiten</h2>

      <p><strong>Mo-Do:</strong> 7:30 Uhr bis 15:00 Uhr<br />
        <strong>Fr:</strong> 7:30 Uhr bis 12:30 Uhr</p>

      <h3>Kosten</h3>

      <p>Die Gebühren für die Spielgruppe richten sich nach der städtischen Gebührenstaffel und werden nach Höhe des Einkommens berechnet. Mehr Informationen dazu finden Sie hier: <a href="https://www.tuebingen.de/23417.html#/23484">www.tuebingen.de/23417.html#/23484</a></p>

      <p>Dazu kommen noch folgende Gebühren:<br />
        Kindertagespflege (einkommensabhängig), max. 1,90€ pro Stunde<br />
        Vereinsgebühr von 25€ pro Jahr (ganze Familie)</p>

    </div>
  );
}
