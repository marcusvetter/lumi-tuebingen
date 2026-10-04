import {
  getPageContent,
  type NavColor,
  type NavMeta,
  type PageContent,
} from "./content";
import { getPublishedPages } from "./pages";

export type { NavMeta };

export interface NavItem {
  href: string;
  headline: string;
  subheadline: string;
  className: string;
  activeClassName: string;
  inactiveClassName: string;
}

type NavStyle = Pick<NavItem, "className" | "activeClassName" | "inactiveClassName">;

/**
 * Complete class lists as plain literals on purpose: Tailwind only generates
 * utilities it can find as static strings, so these must not be built by
 * interpolation (e.g. `border-lumi-${color}` would not compile).
 */
const NAV_STYLES: Record<NavColor, NavStyle> = {
  blue: {
    className:
      "link m-1 lg:m-2 p-2 lg:px-5 lg:py-4 border-2 border-lumi-blue rounded-lg hover:bg-lumi-blue hover:text-white transition-transform duration-200 hover:-translate-y-1",
    activeClassName: "bg-lumi-blue text-white -translate-y-1",
    inactiveClassName: "bg-lumi-white translate-y-0",
  },
  yellow: {
    className:
      "link m-1 lg:m-2 p-2 lg:px-5 lg:py-4 border-2 border-lumi-yellow rounded-lg hover:bg-lumi-yellow transition-transform duration-200 hover:-translate-y-1",
    activeClassName: "bg-lumi-yellow -translate-y-1",
    inactiveClassName: "bg-lumi-white translate-y-0",
  },
  orange: {
    className:
      "link m-1 lg:m-2 p-2 lg:px-5 lg:py-4 border-2 border-lumi-orange rounded-lg hover:bg-lumi-orange hover:text-white transition-transform duration-200 hover:-translate-y-1",
    activeClassName: "bg-lumi-orange text-white -translate-y-1",
    inactiveClassName: "bg-lumi-white translate-y-0",
  },
  green: {
    className:
      "link m-1 lg:m-2 p-2 lg:px-5 lg:py-4 border-2 border-lumi-green rounded-lg hover:bg-lumi-green transition-transform duration-200 hover:-translate-y-1",
    activeClassName: "bg-lumi-green -translate-y-1",
    inactiveClassName: "bg-lumi-white translate-y-0",
  },
  red: {
    className:
      "link m-1 lg:m-2 p-2 lg:px-5 lg:py-4 border-2 border-lumi-red rounded-lg hover:bg-lumi-red hover:text-white transition-transform duration-200 hover:-translate-y-1",
    activeClassName: "bg-lumi-red text-white -translate-y-1",
    inactiveClassName: "bg-lumi-white translate-y-0",
  },
};

/**
 * Which pages appear in the navigation bar, in which order and in which color.
 * All of it is read from the `nav` block in `content/pages/<slug>.md`, so
 * editors can add pages in the CMS without touching the code. Pages without a
 * nav block (e.g. the home page or the legal notice) are not part of it.
 */
export function getNavItems(): NavItem[] {
  return getPublishedPages()
    .map((slug) => ({ slug, page: getPageContent(slug) }))
    .sort((a, b) => navOrder(a.page) - navOrder(b.page))
    .flatMap(({ slug, page }) => {
      if (!page.nav) return [];
      return [
        {
          href: `/${slug}`,
          headline: page.nav.headline || page.title,
          subheadline: page.nav.subheadline,
          ...NAV_STYLES[page.nav.color ?? "blue"],
        },
      ];
    });
}

/** The position the CMS maintains; pages without one are sorted to the end. */
function navOrder(page: PageContent): number {
  return page.order ?? Number.MAX_SAFE_INTEGER;
}
