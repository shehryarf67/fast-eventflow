# Wireframe inventory and review

The original supplied eight-screen HTML is preserved byte for byte in `sources`. The Part A working copy keeps its grayscale frames, status treatment, navigation map and annotations. It adds navigation actions and the missing creation and Help destinations. Fields in Part A are explicitly static sketches; Part B supplies real form behavior.

## Screen mapping and hierarchy

| ID | Screen and behavior | Hierarchy and Gestalt principle | Requirement |
| --- | --- | --- | --- |
| W1 | My Requests with links to request details | Title then status then metadata; proximity groups each request | R1 and R4 |
| W2 | Empty dashboard leading to W9 | Empty headline then explanation and primary action; proximity groups the next step | R2 |
| W3 | On-time detail with office, timestamp and history | Title and stage precede timing metadata; continuity links the stage sequence | R1 and R4 |
| W4 | Overdue detail and simulated escalation | Exception precedes metadata; common region isolates the overdue explanation | R4 |
| W5 | Decision and stated reason, with correction action where allowed | Reason precedes action; similarity reuses the exception treatment | R3 |
| W6 | Edit and resubmit with reviewer reason above fields | Label, field and message stay together through proximity | R2 |
| W7 | Shared validation error state and recovery | Summary precedes affected fields; similarity makes error marks recognizable | R2 and R5 |
| W8 | Submission or resubmission confirmation | Result then updated stage and expected date; similarity repeats the request structure | R1 and R2 |
| W9 | Added new request form | Preparation then required fields then action; proximity groups each field | R2 |
| W10 | Added Help | Task-based headings; similarity preserves stage and action vocabulary | R2 and R5 |

## Substantive modifications

1. Added W9 and W10 so New Request and Help have defined destinations in both parts. Added a text flow beside the preserved diagram for creation, shared errors and return routes.
2. Connected request titles and action buttons to relevant wireframe tabs. Retained arrow-key, Home and End tab selection. Added return actions on the original frames and replaced dead history buttons with expandable sketches.
3. Added hierarchy and Gestalt notes for W2, W9 and W10. Preserved existing W1 and W3-W8 annotations. These are design rationales for team review, not participant feedback.
4. Labelled escalation and availability as illustrative. Removed the working copy's unsupported promise that specific real venues were free. The original remains unchanged for comparison.
5. Changed field-sketch labels to text descriptions rather than implying association with actual inputs. Added a main landmark and a focusable skip destination. Darkened muted footer text from #8A8A93 to #62626B.
6. Distinguished the original October snapshots from the functional build's fixed 4 November clock. The event conflict in Part B is on 22 November, allowing future-date correction in a current demonstration.

## Review conclusions

The original structure covered status, delay, decision and correction, but New Request and Help were destinations without screens, several frame buttons were inert and the fields were sketches. The extension preserves that structure while making the path inspectable. The Part B form intentionally allows submission attempts with missing fields so W7 can explain errors; it disables submission during processing to prevent duplicate sends. This resolves the project specification's tension between disabling empty forms and demonstrating missing-field errors.

The reason block stays visible while editing. Correction preserves the request ID, society, plan and history. Decision outcomes are terminal for overdue calculation; a refused request is not mislabelled overdue. W8 offers both updated details and the hub, avoiding a confirmation dead end. Usability criteria remain evaluation targets, not consequences of this review.
