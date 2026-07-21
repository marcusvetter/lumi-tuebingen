import { getPageContent } from "../components/PageSections";
import PageSections from "../components/PageSections";

export default function Page() {
  const { sections } = getPageContent("verein.md");
  return <PageSections sections={sections} />;
}
