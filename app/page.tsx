import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "react-markdown";
import PdfViewer from "./components/PdfViewer";

interface Meta {
  title: string;
  description: string;
}

interface MarkdownSection {
  type: "markdown";
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

interface PdfSection {
  type: "pdf";
  title?: string;
  file: string;
}

type Section = MarkdownSection | AnnouncementSection | PdfSection;

interface HomeContent {
  meta: Meta;
  sections: Section[];
}

function getContent(): HomeContent {
  const filePath = path.join(process.cwd(), "content", "home.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data as HomeContent;
}

export function generateMetadata(): Metadata {
  const content = getContent();
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function Home() {
  const content = getContent();

  return (
    <div>
      {content.sections.map((section, index) => {
        switch (section.type) {
          case "markdown":
            return (
              <div key={index}>
                <Markdown>{section.content}</Markdown>
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

          case "pdf":
            return (
              <div key={index} className="max-w-2xl mb-8">
                {section.title && <h2>{section.title}</h2>}
                <PdfViewer pdfPath={`/${section.file}`} />
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
