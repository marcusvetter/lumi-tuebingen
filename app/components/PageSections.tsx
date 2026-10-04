import Markdown, { type Components } from "react-markdown";
import PdfViewer from "./PdfViewer";
import type { Section } from "../lib/content";

const MarkdownImage: Components["img"] = (props) => {
  const src = typeof props.src === "string" ? props.src : "";
  if (src.endsWith(".pdf")) {
    return <PdfViewer pdfPath={src} />;
  }
  return <img {...props} />;
};

const MarkdownLink: Components["a"] = (props) => {
  const href = typeof props.href === "string" ? props.href : "";
  const isExternal = href.startsWith("http://") || href.startsWith("https://");
  const isPdf = href.endsWith(".pdf");
  const openNewTab = isExternal || isPdf;

  return (
    <a
      {...props}
      {...openNewTab && { target: "_blank", rel: "noopener noreferrer" }}
    />
  );
};

const MarkdownParagraph: Components["p"] = (props) => {
  return <div className="mb-5">{props.children}</div>;
};

/**
 * Renders a whole page: its title as the only `<h1>` plus the sections editors
 * maintain in the CMS. The title lives in the front matter so it can also be
 * used for the document title and in the CMS list.
 */
export default function PageSections({
  title,
  sections,
}: {
  title: string;
  sections: Section[];
}) {
  return (
    <div className="markdown-content">
      <h1>{title}</h1>

      {sections.map((section, index) => {
        switch (section.type) {
          case "textblock":
            return (
              <div key={index}>
                <Markdown components={{ img: MarkdownImage, p: MarkdownParagraph, a: MarkdownLink }}>{section.content}</Markdown>
              </div>
            );

          case "announcement":
            if (!section.enabled) return null;
            return (
              <div key={index} className="lumi-announcement">
                <strong>{section.title}</strong>
                <br />
                <br />
                <Markdown>{section.text}</Markdown>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
