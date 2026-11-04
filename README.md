# FAST EventFlow

CS3014 D4 prototype for D08 - Shmeezki & Mahid. Core task: find out where a submitted society event request stands, and act on what you find.

## Launch

Open `index.html` directly in Microsoft Edge or Chrome. No installation, server, build step or internet is required for the prototype. The visible fixed demonstration date is **4 November 2026**. Data and drafts are saved in this browser when local storage is available.

## Reliable demonstration

1. Expand Instructor demo controls and choose Load sample requests.
2. Open Guest Speaker Session (#E-031): Mentor review, on time, expected 6 November.
3. Open Annual TechFest (#E-024): Department review, overdue by two days.
4. In demo controls choose Changes needed, then Apply simulated update. Read the reason on #E-024.
5. Choose Edit & resubmit. Clear date and venue; enter a reviewer note; resubmit to show errors and preserved input.
6. Choose 23 November 2026 and Demo Hall B; resubmit. Confirmation states Department review, expected 7 November. Open updated details and history.
7. Open the Refused sample (#E-018) to show a separate refusal reason. Use Load empty dashboard to show the first-time state, then create a new request.

Controls replace local demo data only. No staff, email, authentication, real escalation or university service is connected.

## Files

- `index.html`: complete self-contained functional build.
- `deliverables/D4/`: consolidated report, Part A and B notes, card pack, templates, script and automated evidence.
- `deliverables/D4/part-a/D08-Shmeezki&Mahid_D4A_Wireframes.html`: extended grayscale wireframes W1-W10.
- `deliverables/D4/sources/`: unchanged original eight-screen wireframe artifact.
- `tests/verify.cjs`: browser integration and axe checks.
- `tools/`: syntax check, wireframe extension and report builder.

## Developer verification

The application itself has no dependencies. For tests on another machine use Node.js, `npm install`, and `npm test`; the pinned development dependencies are Playwright 1.62.1 and axe-core 4.10.3. The test runner defaults to Windows Edge. Set `BROWSER_PATH` to another Chromium executable if necessary. `npm run check` verifies inline JavaScript syntax and static IDs. There is no build step or configured lint task.

The Codex verification used bundled dependencies rather than installing into this repository. Exact commands and results are in `deliverables/D4/part-b/Testing.md`.

## Submission status

The implemented build and prepared documentation are ready for team review. The IA is team-proposed. Complete the card-sort record, team-owned accessibility walkthroughs, any studio critique record, reflections, narrated captioned MP4 and live checkpoint before marking the full D4 submission complete. Templates and a recording script are supplied; they are not completed activity evidence.
