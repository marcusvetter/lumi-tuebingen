import PageSections from "./components/PageSections";
import { getFixedPageContent } from "./lib/content";

/** The title and the description come from the site settings in app/layout.tsx. */
export default function Home() {
  const { title, sections } = getFixedPageContent("home");
  return <PageSections title={title} sections={sections} />;
}
