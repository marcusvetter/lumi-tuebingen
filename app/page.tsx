import type { Metadata } from "next";
import PageSections from "./components/PageSections";
import { getFixedPageContent } from "./lib/content";

export function generateMetadata(): Metadata {
  return {
    title: "LUMI - Leben mit Kindern e.V.",
    description:
      "LUMI ist eine Krippengruppe in Tübingen für Kinder im Alter von 1-3 Jahren.",
  };
}

export default function Home() {
  const { title, sections } = getFixedPageContent("home");
  return <PageSections title={title} sections={sections} />;
}
