import { useState, useRef } from "react";
import { usePdf } from "@mikecousins/react-pdf";

export const MyPdfViewer = () => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument } = usePdf({
    file: "/cv.pdf",
    page,
    canvasRef,
  });

  return (
    <div>
      {!pdfDocument && <span></span>}
      <canvas ref={canvasRef} id="pdf" />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav id="pdfnav">
          <ul className="pager">
            {Boolean(pdfDocument && pdfDocument.numPages > 1) && (
              <>
                <li className="previous">
                  <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    Previous
                  </button>
                </li>
                <li className="next">
                  <button
                    disabled={page === pdfDocument!.numPages}
                    onClick={() => setPage(page + 1)}
                  >
                    Next
                  </button>
                </li>
              </>
            )}
            <li>
              <a href="/cv.pdf" target="_blank">
                <button>Download</button>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
