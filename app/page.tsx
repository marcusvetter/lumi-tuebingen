import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown, { type Components } from "react-markdown";
import PdfViewer from "./components/PdfViewer";

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

interface HomeContent {
  sections: Section[];
}

function getContent(): HomeContent {
  const filePath = path.join(process.cwd(), "content", "home.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data as HomeContent;
}

export function generateMetadata(): Metadata {
  return {
    title: "LUMI - Leben mit Kindern e.V.",
    description:
      "LUMI ist eine Krippengruppe in Tübingen für Kinder im Alter von 1-3 Jahren.",
  };
}

const MarkdownImage: Components["img"] = (props) => {
  const src = typeof props.src === "string" ? props.src : "";
  if (src.endsWith(".pdf")) {
    return <PdfViewer pdfPath={src} />;
  }
  return <img {...props} />;
};

const MarkdownParagraph: Components["p"] = (props) => {
  return <div className="mb-5">{props.children}</div>;
};

export default function Home() {
  const content = getContent();

  return (
    <div>
      {content.sections.map((section, index) => {
        switch (section.type) {
          case "textblock":
            return (
              <div key={index}>
                <Markdown components={{ img: MarkdownImage, p: MarkdownParagraph }}>{section.content}</Markdown>
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
