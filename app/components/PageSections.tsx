import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown, { type Components } from "react-markdown";
import PdfViewer from "./PdfViewer";

interface MarkdownSection {
  type: "textblock";
  content: string;
}

interface AnnouncementSection {
  type: "announcement";
  enabled: boolean;
  title: string;
  date: string;
  time: string;
  text: string;
  contact_email: string;
}

type Section = MarkdownSection | AnnouncementSection;

interface PageContent {
  sections: Section[];
}

export function getPageContent(filename: string): PageContent {
  const filePath = path.join(process.cwd(), "content", filename);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data as PageContent;
}

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

export default function PageSections({ sections }: { sections: Section[] }) {
  return (
    <div className="markdown-content">
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
                Am <strong>{section.date}</strong> um{" "}
                <strong>{section.time}</strong>{" "}
                <Markdown>{section.text}</Markdown>
                <br />
                Anmeldungen bitte per E-Mail an:{" "}
                <a href={`mailto:${section.contact_email}`}>
                  {section.contact_email}
                </a>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
