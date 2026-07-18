import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PdfViewer from "./components/PdfViewer";

interface HomeContent {
  meta: { title: string; description: string };
  welcome_text: string;
  announcement: {
    enabled: boolean;
    title: string;
    date: string;
    time: string;
    text: string;
    contact_email: string;
  };
  offerings_html: string;
  opening_hours_html: string;
  association_html: string;
  job_listing_html: string;
  job_listing_pdf: string;
}

function getContent(): HomeContent {
  const filePath = path.join(process.cwd(), "content", "home.yaml");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  return data as HomeContent;
}

function HtmlBlock({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
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
      <h1>Herzlich Willkommen im LUMI!</h1>
      <p>{content.welcome_text}</p>

      {content.announcement.enabled && (
        <div className="bg-lumi-blue text-white rounded-lg p-4">
          <strong>{content.announcement.title}</strong>
          <br />
          <br />
          Am <strong>{content.announcement.date}</strong> um{" "}
          <strong>{content.announcement.time}</strong>{" "}
          {content.announcement.text}
          <br />
          <br />
          Anmeldungen bitte per E-Mail an: {content.announcement.contact_email}
        </div>
      )}

      <HtmlBlock html={content.offerings_html} />
      <HtmlBlock html={content.opening_hours_html} />
      <HtmlBlock html={content.association_html} />

      <div className="max-w-2xl mb-8">
        <PdfViewer pdfPath={`/${content.job_listing_pdf}`} />
      </div>

      <HtmlBlock html={content.job_listing_html} />
    </div>
  );
}
