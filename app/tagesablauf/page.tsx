import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown, { type Components } from "react-markdown";
import PdfViewer from "../components/PdfViewer";

interface MarkdownSection {
  type: "textblock";
  content: string;
}

type Section = MarkdownSection;

interface PageContent {
  sections: Section[];
}

function getContent(): PageContent {
  const filePath = path.join(process.cwd(), "content", "tagesablauf.md");
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

const MarkdownParagraph: Components["p"] = (props) => {
  return <div className="mb-5">{props.children}</div>;
};

export default function Page() {
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

          default:
            return null;
        }
      })}
    </div>
  );
}
