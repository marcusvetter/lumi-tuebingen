import { getPageContent } from "../components/PageSections";

export interface NavMeta {
  headline: string;
  subheadline: string;
}

export interface NavItem extends NavMeta {
  href: string;
  className: string;
  activeClassName: string;
  inactiveClassName: string;
}

interface NavRoute {
  href: string;
  /**
   * Complete class lists as plain literals on purpose: Tailwind only generates
   * utilities it can find as static strings, so these must not be built by
   * interpolation (e.g. `border-lumi-${color}` would not compile).
   */
  className: string;
  activeClassName: string;
  inactiveClassName: string;
}

/**
 * Which pages appear in the navigation bar, in which order and in which color.
 * The texts themselves live in `content/<slug>.md` so they can be edited in the
 * CMS. Pages without an entry here (e.g. the home page or the legal notice) are
 * not part of the navigation bar.
 */
const NAV_ROUTES: NavRoute[] = [
  {
    href: "/tagesablauf",
    className:
      "link m-1 lg:m-2 p-2 lg:px-5 lg:py-4 border-2 border-lumi-blue rounded-lg hover:bg-lumi-blue hover:text-white transition-transform duration-200 hover:-translate-y-1",
    activeClassName: "bg-lumi-blue text-white -translate-y-1",
    inactiveClassName: "bg-lumi-white translate-y-0",
  },
  {
    href: "/kontakt",
    className:
      "link m-1 lg:m-2 p-2 lg:px-5 lg:py-4 border-2 border-lumi-yellow rounded-lg hover:bg-lumi-yellow transition-transform duration-200 hover:-translate-y-1",
    activeClassName: "bg-lumi-yellow -translate-y-1",
    inactiveClassName: "bg-lumi-white translate-y-0",
  },
  {
    href: "/team",
    className:
      "link m-1 lg:m-2 p-2 lg:px-5 lg:py-4 border-2 border-lumi-orange rounded-lg hover:bg-lumi-orange hover:text-white transition-transform duration-200 hover:-translate-y-1",
    activeClassName: "bg-lumi-orange text-white -translate-y-1",
    inactiveClassName: "bg-lumi-white translate-y-0",
  },
  {
    href: "/verein",
    className:
      "link m-1 lg:m-2 p-2 lg:px-5 lg:py-4 border-2 border-lumi-green rounded-lg hover:bg-lumi-green transition-transform duration-200 hover:-translate-y-1",
    activeClassName: "bg-lumi-green -translate-y-1",
    inactiveClassName: "bg-lumi-white translate-y-0",
  },
  {
    href: "/stellenangebote",
    className:
      "link m-1 lg:m-2 p-2 lg:px-5 lg:py-4 border-2 border-lumi-red rounded-lg hover:bg-lumi-red hover:text-white transition-transform duration-200 hover:-translate-y-1",
    activeClassName: "bg-lumi-red text-white -translate-y-1",
    inactiveClassName: "bg-lumi-white translate-y-0",
  },
];

export function getNavItems(): NavItem[] {
  return NAV_ROUTES.map((route) => {
    const slug = route.href.slice(1);
    const { nav } = getPageContent(`${slug}.md`);

    if (!nav?.headline || !nav.subheadline) {
      throw new Error(
        `Missing required "nav.headline" or "nav.subheadline" in content/${slug}.md, ` +
          `but /${slug} is listed in the navigation bar.`
      );
    }

    return { ...route, ...nav };
  });
}
