interface PdfViewerProps {
  pdfPath: string
}

export default function PdfViewer({ pdfPath }: PdfViewerProps) {
  return (
    <div className="mb-8 overflow-hidden rounded-lg">
      <iframe
        src={`${pdfPath}#toolbar=0&nav=0&scrollbar=0&statusbar=0&messages=0&view=FitH`}
        className="w-full aspect-[1/1.414] -m-[2px] w-[calc(100%+4px)] h-[calc(100%+4px)] border-0"
        tabIndex={-1}
      />
    </div>
  )
}
