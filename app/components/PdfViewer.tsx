"use client"

import { useEffect, useRef, useState } from "react"

interface PdfViewerProps {
  pdfPath: string
}

export default function PdfViewer({ pdfPath }: PdfViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const renderPdf = async () => {
      const pdfjsLib = await import("pdfjs-dist")
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.mjs",
        import.meta.url,
      ).toString()

      const pdf = await pdfjsLib.getDocument(pdfPath).promise
      const page = await pdf.getPage(1)
      const canvas = canvasRef.current
      if (!canvas) return

      const scale = 2
      const viewport = page.getViewport({ scale })
      canvas.width = viewport.width
      canvas.height = viewport.height

      const ctx = canvas.getContext("2d")
      if (!ctx) return

      await page.render({ canvas, viewport }).promise
      setLoaded(true)
    }

    renderPdf()
  }, [pdfPath])

  return (
    <div className="mb-8">
      {!loaded && (
        <div className="w-full aspect-[1/1.414] bg-gray-100 animate-pulse rounded" />
      )}
      <canvas
        ref={canvasRef}
        className={`w-full border-0 ${loaded ? "block" : "hidden"}`}
      />
    </div>
  )
}
