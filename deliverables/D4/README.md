# D4 package guide

Open the repository's `index.html` for the functional prototype. Open `part-a/D08-Shmeezki&Mahid_D4A_Wireframes.html` for the extended grayscale structural prototype. Both run locally without setup.

The consolidated `D08-Shmeezki&Mahid-D4-Submission.docx` is editable; the matching PDF is for reading and printing. Its sections consolidate the source notes and prepared forms in this folder. Source Markdown files remain available for revision. The original supplied wireframes are preserved under `sources`.

Part A includes the IA diagram, sixteen-card printable HTML pack, proposed navigation, results form and CSV, wireframe review, POUR audit procedures and critique form. Part B includes implementation and design-system documentation, exact verification commands and results. `Traceability.md` links R1-R5 to sources, screens and evidence. `AI-use-and-reflection.md`, `Video-script.md` and `Submission-checklist.md` cover the remaining handoff.

`evidence/test-results.json` records eighteen passing browser scenarios, twenty-four axe snapshots and the executable prototype's SHA256. Screenshots record actual automated browser views. Contrast checks marked incomplete remain review items; they are not counted as passed. `evidence/Document-QA.md` records the report conversion and visual inspection method.

The navigation is team-proposed. Complete the associated activity records, personal reflection responses, original captioned narration and live checkpoint as listed in the submission checklist. No MP4 has been generated in this package.

## Regenerating artifacts

The report builder requires the authoring libraries docx and sharp in addition to the test dependencies. They were supplied by the Codex workspace runtime through NODE_PATH, without a repository installation. Run `node tools/build-deliverables.cjs` after the browser suite with those libraries available. The script reads the verified JSON and source notes, rasterizes its SVG with sharp and embeds the diagram in the DOCX. `tools/export-report.ps1` converts the DOCX using installed Microsoft Word; Word is required only for that export, never to run the prototype. Re-render and inspect document pages after editing.
