# Report layout verification

Date: 4 November 2026. Artifact: D08-Shmeezki&Mahid-D4-Submission.docx and matching PDF, build 1.0.

The report was authored with the Codex bundled docx library, using the supplied Calibri, grayscale, A4 and approximately 1300-twip-margin house style. The packaged render_docx.py was invoked with --output_dir work/docx-render --emit_pdf. It could not convert because LibreOffice soffice.exe is not installed on PATH. The diagnostic traceback was retained in work/renderer.log.

The installed Microsoft Word application was used invisibly through tools/export-report.ps1 to export the same DOCX to PDF. The bundled Python pdf2image/Poppler path rasterized every PDF page at 100 DPI. Twenty pages were inspected as individual PNGs for text clipping, table wrapping, repeated headers, hierarchy, diagram legibility, footer placement and page breaks. A reflection prompt and its response area were then kept together and the final pages were re-rendered and checked.

Observed result: readable black-and-white report, repeated table headers, no overlapping or clipped text, and a legible IA diagram. The PNGs are internal QA files, not claimed participant or team accessibility evidence. This check does not establish accessibility of the Word or PDF artifact for assistive technology.
