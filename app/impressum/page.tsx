import { getPageContent } from "../components/PageSections";
import PageSections from "../components/PageSections";

export default function Page() {
  const { sections } = getPageContent("impressum.md");
  return <PageSections sections={sections} />;
}
