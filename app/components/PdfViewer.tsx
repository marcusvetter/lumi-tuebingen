"use client"

import { useState, useCallback, useRef } from "react"

interface PdfViewerProps {
  pdfPath: string
  title?: string
}

export default function PdfViewer({ pdfPath, title }: PdfViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true)
  }, [])

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false)
  }, [])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        closeFullscreen()
      }
    },
    [closeFullscreen],
  )

  if (isFullscreen) {
    return (
      <div
        ref={modalRef}
        className="fixed inset-0 z-50 flex flex-col bg-black"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="dialog"
        aria-modal="true"
        aria-label={title || "PDF Viewer"}
      >
        <div className="flex items-center justify-between bg-gray-900 px-4 py-2">
          {title && <span className="text-white text-lg font-medium">{title}</span>}
          <button
            onClick={closeFullscreen}
            className="text-white hover:text-gray-300 transition-colors px-4 py-2 rounded bg-gray-700 hover:bg-gray-600"
            aria-label="Schließen"
          >
            Schließen
          </button>
        </div>
        <div className="flex-1">
          <iframe
            src={pdfPath}
            className="w-full h-full border-0"
            title={title || "PDF Viewer"}
          />
        </div>
      </div>
    )
  }

  return (
    <div
      onClick={openFullscreen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          openFullscreen()
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Stellenanzeige öffnen: ${title || "PDF"}`}
      className="cursor-pointer group border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative">
        <div className="aspect-[1/1.414] bg-gray-100">
          <iframe
            src={pdfPath}
            className="w-full h-full border-0 pointer-events-none"
            title={title || "PDF Vorschau"}
            tabIndex={-1}
          />
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <div className="bg-white/90 rounded-full px-6 py-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
            <span className="text-gray-800 font-medium">Vollbild öffnen</span>
          </div>
        </div>
      </div>
    </div>
  )
}
