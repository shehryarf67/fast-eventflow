# Automated verification record

## Actual run

Run date: 4 November 2026. Browser: Microsoft Edge 156.0.4314.58, headless through Playwright 1.62.1. Axe-core: 4.10.3. Mode: local file:// execution. The prototype required no server, build, network or university connection. The record timestamp is 2026-11-04T13:58:25.350Z (UTC); client timezone is Asia/Karachi.

Result: 18/18 browser scenarios passed. All 24 axe snapshots reported zero violations under wcag2a, wcag2aa, wcag21a and wcag21aa tags. 13 snapshots contain incomplete contrast checks, detailed below. A zero-violation scan is not a full WCAG conformance finding.

Prototype SHA256: 2feb7d075ce67ab5a7948a8442299cdaa564704cda927cb00781880f8ef8e221

## Commands actually used

The workspace dependency loader supplied the bundled runtime. In PowerShell, set runtime to the returned dependencies directory, then run these commands from the repository:

```powershell
$env:NODE_PATH = "$runtime\node\node_modules"
$env:AXE_PATH = (Resolve-Path 'work\axe.min.js').Path
& "$runtime\python\python.exe" -X utf8 tools\extend-wireframes.py
& "$runtime\node\bin\node.exe" tools\check.cjs
& "$runtime\node\bin\node.exe" tests\verify.cjs
```

The initial setup downloaded axe-core 4.10.3 from https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.3/axe.min.js to work/axe.min.js. No prototype runtime dependency was installed. On a normal developer installation, npm install supplies the pinned development packages; npm run check and npm test invoke the same scripts. There is no separate build or lint configuration to run.

Syntax and duplicate static-ID checks passed for both HTML artifacts. The first pass exposed a skip-link routing defect; the implementation was corrected and the keyboard assertion passed on the recorded repeat. A filter test initially requested a control in the wrong empty-data fixture; the fixture was corrected. The static ID checker initially included script template strings and data-id attributes; it now checks actual static markup. The final evidence reflects the corrected checks and application.

## Browser scenarios

| Scenario | Result |
| --- | --- |
| W1 dashboard loads four requests and initial loading ends | PASS |
| W3 on-time details include stage, holder, update and history | PASS |
| W4 overdue derives two days from fixed clock and labels simulation | PASS |
| W5 refusal shows meaningful reason and no edit action | PASS |
| Simulated staff changes produce reason and correction action | PASS |
| W6 form retains original fields, drafts persist across reload | PASS |
| W7 invalid submission blocked; field messages and focus; input retained | PASS |
| Error summary link focuses field without changing route | PASS |
| W8 valid resubmission shows loading, disabled state and updated stage | PASS |
| Empty state and New Request complete end to end | PASS |
| Help, missing request and all outcome states remain navigable | PASS |
| Filters and no-results recovery work | PASS |
| Programmatic keyboard path: skip link, navigation, focus and reverse Tab | PASS |
| Responsive view and grayscale retain text status; no horizontal overflow | PASS |
| Markup escapes user text | PASS |
| Corrupt storage recovers; blocked storage degrades visibly | PASS |
| Part A ten panels and keyboard screen selection work | PASS |
| No browser JavaScript exceptions | PASS |

## Automated accessibility snapshots

| Screen or state | Reported violations | Incomplete checks |
| --- | --- | --- |
| W1 dashboard | 0 | None |
| W3 on time | 0 | None |
| W4 overdue | 0 | None |
| W5 refused | 0 | None |
| W5 changes needed | 0 | None |
| W6 edit | 0 | color-contrast (1 nodes) |
| W7 validation | 0 | color-contrast (1 nodes) |
| W8 resubmitted | 0 | None |
| W2 empty | 0 | None |
| W9 new | 0 | color-contrast (2 nodes) |
| W8 new submission confirmation | 0 | None |
| W10 help | 0 | None |
| W5 approved | 0 | None |
| W1 mobile grayscale | 0 | None |
| Part A W1 | 0 | color-contrast (25 nodes) |
| Part A W2 | 0 | color-contrast (25 nodes) |
| Part A W3 | 0 | color-contrast (25 nodes) |
| Part A W4 | 0 | color-contrast (25 nodes) |
| Part A W5 | 0 | color-contrast (25 nodes) |
| Part A W6 | 0 | color-contrast (25 nodes) |
| Part A W7 | 0 | color-contrast (25 nodes) |
| Part A W8 | 0 | color-contrast (26 nodes) |
| Part A W9 | 0 | color-contrast (24 nodes) |
| Part A W10 | 0 | color-contrast (24 nodes) |

Incomplete contrast checks arise in form/date controls and SVG wireframe text. They are retained in the raw JSON for human assessment rather than reported as passes. The following calculated palette ratios supplement the scans; they do not prove every composited or interactive state.

| Foreground and background pair | Ratio | Threshold used |
| --- | --- | --- |
| Main text (#18202D / #FFFFFF) | 16.36:1 | 4.5:1 normal text |
| Secondary text (#505B6B / #FFFFFF) | 6.89:1 | 4.5:1 normal text |
| Accent on white (#4338A5 / #FFFFFF) | 8.95:1 | 4.5:1 normal text |
| Success (#176044 / #EDF7F1) | 6.87:1 | 4.5:1 normal text |
| Warning (#794400 / #FFF4DF) | 7.30:1 | 4.5:1 normal text |
| Error (#A32332 / #FFF0F1) | 6.68:1 | 4.5:1 normal text |
| Information (#245B83 / #EFF6FC) | 6.64:1 | 4.5:1 normal text |
| Part A muted labels (#62626B / #FFFFFF) | 6.04:1 | 4.5:1 normal text |
| Focus on page (#18202D / #F5F6F8) | 15.13:1 | 3:1 non-text |
| Input boundary (#707B8D / #FFFFFF) | 4.28:1 | 3:1 non-text |

## Scope and re-check

The suite exercises visible states, real DOM events, keyboard keypresses, focus destinations, local state persistence, error recovery, a narrow grayscale view and escaped user text. It checks that the browser reports no JavaScript exceptions. It does not measure usability, test real administrative decisions or establish actual speech output. Additional browser/assistive-technology combinations, 200 percent zoom, forced colours and team-owned walkthrough evidence use the Part A audit procedure.

Evidence files: test-results.json and seven PNG screenshots in evidence/. Keep the raw record with the submitted build and repeat verification after changing executable HTML. Generated documentation and tests do not establish the D2 success percentages.
