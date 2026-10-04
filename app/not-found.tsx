import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>Seite nicht gefunden</h1>
      <p>
        Diese Seite gibt es nicht (mehr). Schau oben in der Navigationsbar nach einem
        passenden Eintrag oder geh zurück zur{" "}
        <Link href="/">Startseite</Link>.
      </p>
    </div>
  );
}
