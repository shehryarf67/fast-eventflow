# Functional prototype and design system

## Core task and scope

FAST EventFlow implements one complete task: find out where a submitted event request stands and act on what you find. A society lead opens My Requests, inspects stage, office, last update and deadline, reads a reasoned decision, corrects a Changes needed request, recovers from field errors and sees the updated state after resubmission. New Request also works from the hub and empty state. Help explains the same vocabulary used in the interface.

The repository initially contained only a README and one initial commit. The implementation therefore follows the supplied project preference: one self-contained HTML file with inline CSS and vanilla JavaScript. There is no build step, framework, backend or runtime dependency. Opening index.html through file:// is the tested launch path. Development-only Playwright and axe dependencies support repeatable verification.

The vertical slice deliberately excludes authentication, university routing, actual staff review, document uploads, venue booking, event execution and resource procurement. An event-plan text field stands in for supporting documents. This keeps correction, status and recovery deep enough to inspect while making scope boundaries visible. Actual university submission rules and policy validity are not established by this prototype.

## State and dates

Each request contains ID, title, society, event date, preferred venue, event plan, optional note, original submission timestamp, current stage, holder, last update, expected-by date, decision, reason, decision timestamp, correction deadline and approval history. Drafts are stored separately by request ID or new. Edits preserve the original ID, submission time, society, plan and history; valid resubmission clears the old decision, appends a history entry and returns to Department review.

The clock is fixed at 4 November 2026 and is displayed on every screen. Overdue is derived for undecided requests only, after the expected calendar date has passed. #E-024 is two days past 2 November; #E-031 is on time until 6 November. Outcomes are labelled as outcomes even if their old expected date has passed. Resubmission sets an illustrative review date of 7 November; a new request goes to the Faculty Mentor with expected review by 8 November. These are demonstration assumptions, not university service commitments.

Local storage uses the versioned key fast-eventflow-d4-v1. Invalid saved data falls back to samples with a notice; unavailable storage retains changes in the current tab and warns the user. No account or cross-device synchronization exists. Demo controls explicitly replace local sample requests and drafts. Staff simulations append a history entry and are visibly identified as simulated.

## State transitions and feedback

Routes use hashes for dashboard, request details, correction, creation, confirmation and Help. Missing or no-longer-editable requests show an explanation and a hub link. Route changes focus the main heading and update the document title. A polite status region reports saved drafts, filters, errors, loading and successful actions.

New submission requires title, society, future event date, preferred demo venue and event plan. Correction requires title, date and venue; it carries forward society and plan. The optional note is preserved. A missing field, past date, unrecognized venue or unresolved original date/venue pair prevents submission. Field values remain in place, an error summary receives focus, error links lead to fields, and aria-describedby connects help and error messages. The summary says that nothing was sent.

Submit remains available on an incomplete form so the required error scenario can be demonstrated. During a valid send, buttons are disabled and duplicate sends are blocked. The loading label appears after 200 milliseconds during a deliberately simulated 650 millisecond local send delay. On completion, the confirmation states the same request ID, new stage, office and expected date. Input events retain drafts locally; Save draft gives explicit feedback; Cancel leaves the draft available.

## Built and simulated

| Capability | Implementation boundary |
| --- | --- |
| Navigation, filtering, empty and unavailable states | Real client-side behavior |
| Required-field validation, preservation and correction | Real client-side behavior |
| Request creation, resubmission and history updates | Real in-browser state transitions |
| Overdue derivation and outcome labels | Real calculation against the visible fixed demo clock |
| Focus, labels, error associations and live region | Implemented browser behavior; spoken experience requires team review |
| Staff decisions and stage updates | Simulated through instructor controls and fictional samples |
| Escalation | Illustrative status text; no alert or message is sent |
| Submission waiting time | Deliberate local delay to expose loading and disabled states |
| Authentication and authorization | Absent; no real user identity or private university account |
| Venue choices and expected dates | Fictional values; no availability or deadline service |
| Supporting documents and bookings | Outside the slice; no upload or booking control is presented |

## Palette and typography

| Token | Value | Use |
| --- | --- | --- |
| Neutral background | #F5F6F8 | Page |
| Neutral surface | #FFFFFF | Cards, forms and controls |
| Neutral text | #18202D | Main text and focus outlines |
| Neutral secondary | #505B6B | Metadata and help |
| Neutral line | #B7BFCA | Structural separators |
| Primary accent | #4338A5 | Primary action and current navigation |
| Success | #176044 on #EDF7F1 | Confirmation and completed stage |
| Warning | #794400 on #FFF4DF | Overdue and changes needed |
| Error | #A32332 on #FFF0F1 | Refusal and field errors |
| Information | #245B83 on #EFF6FC | Neutral status and notices |

Use Segoe UI with Arial and sans-serif fallbacks; weights 400 and 600. Screen headings are 32px, reducing to 28px on narrow screens; section and row headings are 20px; body is 16px with metadata at 14px. The three hierarchy tiers are screen title, section/row title and body/metadata. Line height is 1.55 for body text. Layout spacing uses 4, 8, 12, 16, 24 and 32px, with larger empty-state padding for emphasis.

Text carries every status independently of semantic colour. Progress has labelled stages, completed-stage check marks and a current-step label. Overdue badges use an additional border weight and elapsed days. Fields have persistent labels, a visible required marker and separate error text. Buttons have at least 44px height and a visible 3px focus outline with offset.

## Components and states

| Component or state | Concrete use |
| --- | --- |
| Request card | ID, fictional society, linked title, text badge, stage list and timing metadata |
| Status badge | On time, Overdue with elapsed days, Approved, Changes needed or Refused |
| Progress indicator | Ordered list with aria-current step and text labels |
| Form field | Label, help, native input or select, associated error |
| Primary and neutral buttons | Main submit action and draft or demo actions |
| Callout and confirmation | Reason, overdue explanation, validation summary and successful receipt |
| Default | Dashboard cards and enabled controls |
| Hover and focus | Background feedback and visible offset outline |
| Active | Button movement on press |
| Disabled | Submission buttons while a valid send is processing |
| Loading | Initial request loading and delayed Submitting label |
| Empty | No requests yet, plus a working creation action |
| Error | W7 summary, field messages and retained values |
| Success | W8 receipt and polite saved-state notice |

## Remaining design risks

A portal can show an inaccurate stage if staff do not maintain it. This build demonstrates staff updates through clearly labelled controls and retains timestamps, but it cannot establish real update ownership. Stage deadlines must be agreed with actual offices. Refusal comprehension, first-time form completion and classification of normal versus overdue remain measurable evaluation questions. Shared-computer privacy and real role permissions require a backend design beyond this local slice.
