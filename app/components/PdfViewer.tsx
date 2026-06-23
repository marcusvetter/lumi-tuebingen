interface PdfViewerProps {
  pdfPath: string
}

export default function PdfViewer({ pdfPath }: PdfViewerProps) {
  return (
    <div className="mb-8 overflow-x-auto">
      <iframe
        src={`${pdfPath}#toolbar=0&nav=0&view=FitH`}
        className="w-full max-w-full aspect-[1/1.414] border-0"
        tabIndex={-1}
      />
    </div>
  )
}
