import type { Metadata } from "next";
import PageSections from "../components/PageSections";
import { getPageContent } from "../lib/content";
import { getPublishedPages } from "../lib/pages";

/**
 * All pages except the home page are rendered from this single dynamic route.
 *
 * Only the pages returned by `generateStaticParams` are built. Everything else
 * gets no HTML file at all, which lets GitHub Pages answer with a real 404
 * instead of a page that only pretends to be missing.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedPages().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: getPageContent(slug).title };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { title, sections } = getPageContent(slug);

  return <PageSections title={title} sections={sections} />;
}
