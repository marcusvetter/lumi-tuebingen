import type { Metadata } from "next";
import PageSections from "../components/PageSections";
import { getFixedPageContent } from "../lib/content";

/**
 * The legal notice has a fixed address and cannot be deleted in the CMS, so it
 * is a normal static route instead of a page of the collection.
 */
export function generateMetadata(): Metadata {
  return { title: getFixedPageContent("impressum").title };
}

export default function Impressum() {
  const { title, sections } = getFixedPageContent("impressum");
  return <PageSections title={title} sections={sections} />;
}
