import {
  getPageContent,
  getPageSlugs,
  NAV_COLORS,
  type PageContent,
} from "./content";

/**
 * Every page that should exist as a route: all pages of the collection that an
 * editor has not switched off in the CMS. A switched-off page gets no HTML file
 * at all, which lets GitHub Pages answer with a real 404 instead of a page that
 * only pretends to be missing. The fixed pages are not part of this: they have
 * their own route in `app/page.tsx` and `app/impressum/page.tsx`.
 */
export function getPublishedPages(): string[] {
  return getPageSlugs().filter((slug) => {
    const page = getPageContent(slug);
    validatePage(slug, page);
    return page.nav?.enabled !== false;
  });
}

/** Catches incomplete pages at build time instead of shipping them half-empty. */
function validatePage(slug: string, page: PageContent): void {
  const file = `content/pages/${slug}.md`;

  if (!page.title?.trim()) {
    throw new Error(`Missing required "title" in ${file}.`);
  }

  if (!page.nav) {
    return;
  }

  if (!page.nav.subheadline?.trim()) {
    throw new Error(`Missing required "nav.subheadline" in ${file}.`);
  }

  if (page.nav.color && !NAV_COLORS.includes(page.nav.color)) {
    throw new Error(
      `Unknown "nav.color" "${page.nav.color}" in ${file}, ` +
        `allowed values are: ${NAV_COLORS.join(", ")}.`
    );
  }
}
