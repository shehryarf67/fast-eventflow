# Accessibility inspection and walkthrough forms

## Evidence boundaries

Use this form for the team's Part A walkthrough and Part B re-check on the actual delivered version. Automated evidence is recorded separately in Part B Testing and evidence/test-results.json. The official brief requires the team's own keyboard and screen-reader findings; generated inspection suggestions and automated assertions do not replace those logs.

Record artifact path and SHA256, date, tester, browser/version, operating system, assistive technology/version, viewport and input method. Record a finding only after observing it. Mark each issue fixed, deferred or pending verification, with a retest reference. Severity: critical blocks the core task; major obstructs completion; moderate adds avoidable effort; minor is a limited presentation issue.

## Perceivable

Inspect W1-W5 and W8 at default size, 200 percent zoom, a narrow viewport and grayscale. Confirm that every chip has a word, completed stages have a mark and current stages have text. Compare normal and overdue requests without relying on colour. Inspect form help and errors for readable text and spacing. Check text contrast against its actual background, including hover, focus, selected navigation, alerts and disabled controls. For WCAG 2.1 AA use 1.4.1 Use of Color, 1.4.3 Contrast Minimum, 1.4.10 Reflow and 1.4.11 Non-text Contrast as applicable. Normal text requires at least 4.5:1; large text and relevant non-text indicators require 3:1.

Expected: status remains unambiguous in grayscale; text and required boundaries are distinguishable; content remains readable without clipping. Axe's contrast result covers inspected rendered states only; verify any incomplete result and additional zoom/interaction states manually.

## Operable

On Part A, begin at the top using only the keyboard. Activate the skip link, enter the screen index, use arrow keys, Home and End, and Tab into the chosen panel. Follow request, correction, error and return actions. Record any unexpected jump, unreachable control or trapped focus. Repeat on Part B from W1 through W3, W4, W5, W6, W7 and W8, then through W2 and W9. Use Tab and Shift+Tab in both directions, Enter on links, Space and Enter on buttons, and native select and date controls. Check that focus is clearly visible and is not hidden by content.

Expected: no mouse is needed; only the selected wireframe tab enters the normal tab order; main-route changes focus the heading, errors focus the summary and summary links focus the relevant input. The skip link focuses main content without changing the application route. Check 2.1.1 Keyboard, 2.1.2 No Keyboard Trap, 2.4.1 Bypass Blocks, 2.4.3 Focus Order, 2.4.6 Headings and Labels and 2.4.7 Focus Visible.

## Understandable

Open W9, submit it empty, and record the message and focus destination. Fill the title and note, leave date and venue empty and attempt resubmission in W6. Confirm that nothing is sent, entered values remain, each error identifies its field and offers a correction, and a second valid attempt reaches confirmation. Attempt the original conflicted date/venue pair to check that the reason remains actionable. Cancel and reopen the form to inspect draft behavior. Check required instructions before submission, not only after an error.

Expected: labels are persistent; mandatory fields are identified; errors do not depend on a red border; W7 states what did not happen; W8 identifies the request, current office and expected date. Inspect 3.2.3 Consistent Navigation, 3.2.4 Consistent Identification, 3.3.1 Error Identification, 3.3.2 Labels or Instructions and 3.3.3 Error Suggestion.

## Robust

Use Narrator with Edge or NVDA with a supported browser and log the actual words heard. Navigate by landmarks and headings, then inspect a card's link name, stage list, decision reason and form labels. Trigger validation; check announcement and reading order from summary to field. Resolve errors and submit; check whether loading and confirmation are conveyed without unnecessary repetition. Inspect aria-invalid and aria-describedby associations, the polite status region, current-page and current-step attributes and expandable history. Check 1.3.1 Info and Relationships, 4.1.2 Name Role Value and 4.1.3 Status Messages.

Expected: each input has a meaningful name and associated help/error; status updates are available to assistive technology; redundant or meaningless announcements are recorded for correction. A programmatic DOM check cannot establish the actual spoken experience.

## Issue record template

Issue ID and screen ID: ____________________

POUR principle and WCAG criterion: ____________________

Artifact version, tester, date and environment: ____________________

Reproduction steps and input method: ____________________

Actual observed behavior or exact spoken announcement: ____________________

Expected behavior and impact: ____________________

Severity and recommended correction: ____________________

Status fixed / deferred / pending verification: ____________________

Fix reference, retest steps, result and remaining concern: ____________________

## Engineering corrections recorded separately

| Screen | Principle | Evidence and correction | Status |
| --- | --- | --- | --- |
| Part B all | Operable | The browser test initially found the skip link changed the hash to main, causing an unavailable-route screen. The link now focuses main without routing. Repeated keyboard assertion passes. | Fixed in code and programmatically verified |
| Part A W1-W10 | Operable | Code review found inert frame actions. Actions now select destination tabs; a browser assertion follows W1 to W9. | Fixed; team walkthrough pending verification |
| Part A all | Perceivable | Muted footer text was darkened in the working copy; automated scans run on every panel. | Fixed; additional visual conditions pending verification |
| Part B W6-W7 | Understandable and Robust | Error summary focus, preserved note, invalid-field associations and summary-link focus are asserted in the browser suite. | Implemented and programmatically verified |

## Deferred and pending re-checks

No observed team walkthrough issue is entered in this prepared form. Team keyboard and spoken-output records, zoom/reflow checks and assessment of automated incomplete results remain pending verification. Backend permissions, real university deadlines and real notification behavior are outside the prototype and must not be interpreted as accessibility fixes. Revisit any team-deferred Part A issue on Part B before the instructor checkpoint.

Reference: W3C WCAG 2.1 https://www.w3.org/TR/WCAG21/ and WAI explanations of Error Identification and Status Messages. These references guide inspection; this document makes no overall conformance claim.
