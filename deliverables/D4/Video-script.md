# Five minute recording script and shot list

## Recording setup

Required output filename: `D08-Shmeezki&Mahid-D4-Prototype.mp4`. Target duration 4:55 to leave export headroom below five minutes. Record the actual index.html build 1.0 with original team narration and captions. Use 1080p capture, a readable browser zoom and an uncluttered desktop. Keep the fixed-date banner visible. Rehearse once so interactions match the spoken explanation. Captions should transcribe the final spoken narration, with readable line breaks and timing; this script is not a substitute for a checked caption track.

Before recording, expand Instructor demo controls and Load sample requests. Close the controls except when showing a staff simulation. Keep the alternate path on the same submitted build. After exporting, play the MP4 locally, check duration, speech/caption synchronization and interface legibility, then check sharing permissions and keep a local backup. All team members must be ready to explain the live build.

## 0 00 to 0 30 User task and problem

Shot: W1 My Requests. Point at the request cards and their office/update lines; do not begin with code or implementation details.

Narration: “Our user is Hira, a society president responsible for getting an event approved. In our earlier research, leads described visiting offices or contacting staff to find out where a request stood. Silence did not tell them whether it was moving or stalled. FAST EventFlow focuses on one task: find the current stage of a submitted request, understand the wait, and act on a recorded decision.”

## 0 30 to 1 00 Requirements and design response

Shot: Point to stage, holder, expected date and badge on the dashboard. Briefly open Help if needed, then return. Keep the interface readable.

Narration: “Our five requirements cover stage visibility, first-time submission, reasoned outcomes, normal versus overdue waiting, and accessible operation. We use a request dashboard as the hub. Each card carries its stage, responsible office and timing. Details bring the reason and next action together. New Request and Help stay in the main navigation. The displayed date is fixed at 4 November 2026 so the demonstration remains repeatable.”

## 1 00 to 3 00 Complete core workflow

1:00-1:25: Open Guest Speaker Session, #E-031, W3. Point to Mentor, Faculty Mentor, last update and 6 November expected date. Expand history.

Narration: “This request is with the Faculty Mentor. Its review is expected by 6 November, so it is on time. We can identify the stage and responsible office without contacting anyone. The history shows the recorded handoff, while the last-update timestamp makes the age of that information visible.”

1:25-1:50: Return to My Requests; open Annual TechFest, #E-024, W4. Point to two-day overdue badge and simulated escalation disclosure.

Narration: “TechFest is different. It is with the Department Office and was expected by 2 November, two days before the demo clock. The word Overdue and elapsed days carry the distinction without colour. The escalation message is explicitly simulated: no supervisor notification is actually sent.”

1:50-2:15: Expand Instructor demo controls, choose Changes needed and Apply simulated update. Close controls; show W5 reason.

Narration: “This control simulates a staff update. The department asks for changes because Demo Hall A has an examination on 22 November. The reason tells Hira what she can do: choose a different date or venue. This staff decision is fictional; navigation, editing and state changes in the browser are implemented.”

2:15-2:45: Edit and resubmit W6. Choose 23 November 2026, Demo Hall B and a short reviewer note. Submit. Pause on loading and W8 confirmation.

Narration: “Hira edits the existing request rather than starting again. The reason stays above the form. She changes the date and venue and submits. During processing, the action is disabled and shows a loading label. The receipt keeps the request ID and states the new Department review stage and expected date, 7 November.”

2:45-3:00: Open updated details; expand history. Return to the hub and briefly show the separate Refused sample #E-018.

Narration: “The updated details and history preserve the correction. A separate refused request explains that an institutional sponsor was missing, so a refusal also has a stated reason.”

## 3 00 to 4 00 Error path and recovery

3:00-3:20: Apply Changes needed to #E-024 again. Edit, clear date and venue, type “Please retain my note”, and submit.

Narration: “For the alternate path, we deliberately leave date and venue empty. Submission is blocked. The summary says nothing was sent, focus moves to it, and the note we entered remains. Each affected field has its own specific message.”

3:20-3:40: Use an error-summary link to focus the date; correct to 24 November and Demo Hall B; submit and show confirmation.

Narration: “The summary links take us directly to the fields that need attention. We correct them and submit again. The form succeeds without making us repeat the information already supplied.”

3:40-4:00: Load empty dashboard; open New Request W9; show required guidance and Help link. Do not submit another long example.

Narration: “The empty dashboard leads to a working creation form. Required information is explained before submission. In this slice an event-plan field replaces supporting documents; uploads and real university document rules are outside the demonstration.”

## 4 00 to 4 40 Accessibility evidence and limits

Shot: Show keyboard focus on the skip link and a field; show text statuses in grayscale or the captured mobile grayscale evidence. Briefly show the evidence summary with exact current test counts. Use only claims still true for the submitted version.

Narration: “The build has native keyboard controls, a visible focus outline, a skip link, labelled fields and error associations. Route changes focus the main heading; dynamic notices use a polite status region. Our recorded automated run passed eighteen browser scenarios and twenty-four axe snapshots without reported A or AA violations. Those checks establish behavior within their scope. They do not establish spoken comprehension, usability success rates or complete accessibility conformance. The team walkthrough form captures the actual keyboard and screen-reader observations required by the brief.”

## 4 40 to 5 00 Focused feedback question

Shot: Restore samples and show W1 with #E-024 and #E-031 visible together. End by 4:55 if possible.

Narration: “Our focused feedback question is: Can users distinguish an approval request that is progressing normally from one that is overdue without needing further explanation? Please focus on the status words, expected dates and placement of the timing information.”
