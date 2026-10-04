import fs from "fs";
import path from "path";
import matter from "gray-matter";

/** The pages editors can create, delete and order in the CMS. */
const PAGES_DIR = path.join(process.cwd(), "content", "pages");

/** The pages that always exist and have a hard-coded route. */
const FIXED_PAGES_DIR = path.join(process.cwd(), "content");

/** The pages that always exist, each with the route it is served at. */
export const FIXED_PAGES = {
  home: "/",
  impressum: "/impressum",
} as const;

export type FixedPage = keyof typeof FIXED_PAGES;

/** The singleton with the settings that apply to the whole site. */
const SITE_SETTINGS = "site";

export interface SiteSettings {
  /** Document title of every page that does not bring one of its own. */
  title: string;
  /** Meta description of every page that does not bring one of its own. */
  description: string;
  /** The banner in the header, e.g. "/media/lumi-train.jpeg". */
  image: string;
  alt: string;
}

/** Slugs a page from the collection must not use. */
const RESERVED_SLUGS = ["home", "impressum", "cms", "api", "_next"];

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** The colors a navigation entry can be painted in. */
export const NAV_COLORS = ["blue", "yellow", "orange", "green", "red"] as const;

export type NavColor = (typeof NAV_COLORS)[number];

interface MarkdownSection {
  type: "textblock";
  content: string;
}

interface AnnouncementSection {
  type: "announcement";
  enabled: boolean;
  title: string;
  text: string;
}

export type Section = MarkdownSection | AnnouncementSection;

export interface NavMeta {
  /** Pages are published unless an editor explicitly switches them off. */
  enabled?: boolean;
  /** Falls back to the page title when left empty. */
  headline?: string;
  subheadline: string;
  color?: NavColor;
}

export interface PageContent {
  /** Rendered as the page's `<h1>` and used as its document title. */
  title: string;
  /** Position in the navigation bar, maintained by the CMS. */
  order?: number;
  /** Only pages with a nav block appear in the navigation bar. */
  nav?: NavMeta;
  sections: Section[];
}

function readPage(dir: string, slug: string): PageContent {
  const fileContents = fs.readFileSync(path.join(dir, `${slug}.md`), "utf8");
  const { data } = matter(fileContents);
  return data as PageContent;
}

/** A page from the collection; its slug is its file name. */
export function getPageContent(slug: string): PageContent {
  return readPage(PAGES_DIR, slug);
}

/**
 * A page with a hard-coded route. These live outside the collection so they
 * cannot be deleted in the CMS and stay out of the navigation order.
 */
export function getFixedPageContent(slug: FixedPage): PageContent {
  const file = path.join(FIXED_PAGES_DIR, `${slug}.md`);

  if (!fs.existsSync(file)) {
    throw new Error(
      `Missing content/${slug}.md. This page has a fixed address and is required.`
    );
  }

  return readPage(FIXED_PAGES_DIR, slug);
}

/**
 * Site-wide settings from a singleton: the banner in the header and the
 * metadata that applies to every page. Like the fixed pages this file is
 * required, because without it the site would have no header at all.
 */
export function getSiteSettings(): SiteSettings {
  const file = path.join(FIXED_PAGES_DIR, `${SITE_SETTINGS}.md`);

  if (!fs.existsSync(file)) {
    throw new Error(
      `Missing content/${SITE_SETTINGS}.md. These site settings are required.`
    );
  }

  const { data } = matter(fs.readFileSync(file, "utf8"));
  const site = data as SiteSettings;

  for (const field of ["title", "description", "image", "alt"] as const) {
    if (!site[field]?.trim()) {
      throw new Error(`Missing required "${field}" in content/${SITE_SETTINGS}.md.`);
    }
  }

  // An image that was removed from the media library would ship as a broken
  // header, so stop the build instead.
  if (site.image.startsWith("/") && !fs.existsSync(path.join(process.cwd(), "public", site.image))) {
    throw new Error(`Missing public${site.image} (image in content/${SITE_SETTINGS}.md).`);
  }

  return site;
}

/**
 * The slugs of all pages in the collection. Editors add and remove pages in the
 * CMS, so the file system is the single place where the set of pages is defined.
 */
export function getPageSlugs(): string[] {
  return fs
    .readdirSync(PAGES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.slice(0, -".md".length);

      if (RESERVED_SLUGS.includes(slug)) {
        throw new Error(
          `content/pages/${file}: the slug "${slug}" is reserved, please pick another one.`
        );
      }

      if (!SLUG_PATTERN.test(slug)) {
        throw new Error(
          `content/pages/${file}: the slug may only contain lowercase letters, ` +
            `digits and single dashes, otherwise it cannot be used as a URL.`
        );
      }

      return slug;
    });
}
