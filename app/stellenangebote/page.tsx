import { getPageContent } from "../components/PageSections";
import PageSections from "../components/PageSections";

export default function Page() {
  const { sections } = getPageContent("stellenangebote.md");
  return <PageSections sections={sections} />;
}
