import type { Metadata } from "next";
import { getPageContent } from "./components/PageSections";
import PageSections from "./components/PageSections";

export function generateMetadata(): Metadata {
  return {
    title: "LUMI - Leben mit Kindern e.V.",
    description:
      "LUMI ist eine Krippengruppe in Tübingen für Kinder im Alter von 1-3 Jahren.",
  };
}

export default function Home() {
  const { sections } = getPageContent("home.md");
  return <PageSections sections={sections} />;
}
