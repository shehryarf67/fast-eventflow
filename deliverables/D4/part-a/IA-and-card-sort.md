# Information architecture and card sorting

## Proposed structure and rationale

The proposed navigation is hub-and-spoke. My Requests is the recurring hub: a society lead can identify a request, open its stage and return to the list. New Request is a distinct entry for first-time submission; Help explains stages and correction without introducing an administrative menu. Request history and decision reasons belong within the relevant request because their meaning depends on its ID.

This is the team's proposed structure, grounded in the D2 affinity synthesis. D2 affinity grouping concerns research observations; the D4 feature card sort concerns how people organize portal functions. These are separate artifacts. The supplied results form records the D4 activity when completed, and the navigation can then be revised against that evidence.

D2 C1 and C2 support making stage, holder and update visible together. C3 supports ownership and history within a request. C4 supports field guidance, reasoned decisions and correction. C5 supports expected dates; C6 corroborates planning risk but does not justify a separate logistics module. S1-06 is a suggested solution and is not used as a need. The proposed structure keeps the prototype focused on visibility and action rather than replacing the entire approval process.

## Content inventory and feature cards

The numbered labels below are the printable card pack. Give participants the labels and descriptions without the proposed navigation column. Proposed categories express the current design hypothesis, not recorded sorting results.

| Card | Label and content | Proposed location | Requirement |
| --- | --- | --- | --- |
| C01 | Find my submitted event requests | My Requests | R1 |
| C02 | See the current approval stage | Request detail | R1 |
| C03 | See which office holds the request | Request detail | R1 |
| C04 | See when the request was last updated | Request detail | R1 |
| C05 | See the expected review date | Request detail | R4 |
| C06 | Identify an overdue request | My Requests and detail | R4 |
| C07 | Read a decision and its reason | Request detail | R3 |
| C08 | Read the approval history | Request detail | R1 and R3 |
| C09 | Correct a request needing changes | Request correction | R2 and R3 |
| C10 | Save unfinished form entries | New or correction form | R2 |
| C11 | Check which fields need attention | Form error state | R2 and R5 |
| C12 | Submit a new event request | New Request | R2 |
| C13 | Confirm that submission was received | Confirmation | R2 |
| C14 | Learn what approval stages mean | Help | R2 |
| C15 | Find keyboard and form guidance | Help | R5 |
| C16 | Understand an overdue escalation label | Overdue detail and Help | R4 |

## Navigation diagram

See `Information-architecture.svg` for the grayscale diagram. The top navigation contains My Requests, New Request and Help. My Requests branches to on-time, overdue and decision details. Changes needed branches to Edit and resubmit. New and correction forms share validation and confirmation patterns. Each detail or confirmation offers a return to My Requests.

The primary path is W1 → W4 → W5 → W6 → W8 → W1. W4 → W5 represents a staff update, explicitly simulated by a demo control. The error path is W6 → W7 → correction → W8; creation follows W1 or W2 → W9 → W7 if invalid → W9 correction → W8. W10 Help is available globally. Browser Back and direct hash routes work alongside visible navigation links.

## Card sorting session pack

Use the separate printable HTML pack. Allow approximately twenty minutes: two minutes for the task and consent, eight for independent grouping, five for naming and explaining groups, and five for discussion. Invite appropriate society leads or clearly identified stand-ins. Use anonymous IDs and role categories; avoid identifying society or staff names. Obtain agreement before recording any notes or images.

Read this neutral instruction: “These cards describe things an event-request portal might let you do. Group things where you would expect to find them together. Make as many or as few groups as you need. Name each group. Put confusing cards aside or rename them. There are no correct answers; explain the choices that matter to you.”

Shuffle all sixteen cards. Start with an open sort; do not reveal My Requests, New Request and Help in advance. Record each person's grouping before discussion. Ask where they would look to find an overdue request, understand a refusal, correct it and begin a new submission. If comparing the proposed navigation afterward, label that separately as a closed-sort check. Do not treat agreement in discussion as independent participant agreement.

## Analysis and decision rules

Keep the original placements, proposed group names, ambiguous cards and explanations. Count actual placements before calculating any agreement; report the denominator and method. For a very small sort, prefer qualitative disagreement and reasoning over percentages. Decide whether recurring group names improve navigation; inspect any split between decision history and request details. Log the final navigation decision, affected screens, rationale and subsequent prototype changes.

The accompanying results template has no prefilled participant outcomes. Use it for the activity rather than relabelling the D2 affinity wall. Add the actual date, IDs, group labels, card membership and decisions, then replace the proposed IA description with the supported result.

## Requirements to navigation

| Requirement | Navigation mechanism | Why it belongs there |
| --- | --- | --- |
| R1 | Dashboard → request detail → history | Locate the same request and inspect its current owner without another person |
| R2 | New Request or Changes needed → form → errors or confirmation | Preparation and recovery remain beside the task |
| R3 | Dashboard → decision reason → correction if allowed | The outcome and next action share the request context |
| R4 | Dashboard status → expected date and overdue detail | Compare normal and late requests before inspecting timing evidence |
| R5 | Global skip link and Help; native controls across routes | Preserve a consistent keyboard entry and meaningful reading order |
