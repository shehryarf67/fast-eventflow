# Silent prototype walkthrough

File: D08-Shmeezki&Mahid-D4-Prototype.mp4

Recorded on 4 November 2026 from the submitted build 1.0, using actual Microsoft Edge browser interactions automated with Playwright. No prototype functionality was replaced for the recording. The staff update controls remain visibly simulated. The automated-evidence slide reproduces the existing verification record and its limitations.

The video is silent footage for the team to narrate and caption. It is not the final narrated and captioned course submission. Use ../Video-script.md as the narration guide, adjusting the spoken timing to the recorded actions.

## Recording sequence

| Approximate interval | Visual content |
| --- | --- |
| 0:00-0:30 | Request dashboard and normal versus overdue examples |
| 0:30-1:00 | Stage, office, expected date, Help and navigation |
| 1:00-3:00 | On-time details, history, overdue detail, simulated decision, editing, successful resubmission and refusal |
| 3:00-4:00 | Reset sample scenario, blank-field errors, retained note, correction, confirmation and empty/new request states |
| 4:00-4:40 | Keyboard focus, skip link, automated evidence and grayscale statuses |
| 4:40-4:55 | Dashboard comparison held for the focused feedback question |

At the start of the error segment, sample data is reset so it is an independent replay of the correction scenario. At the end, narrate the question from the script while the two contrasting request statuses are visible.

## Export and checks

The capture was exported as H.264 MP4, 1920 by 1080, 25 frames per second, yuv420p, with fast-start metadata. Duration is exactly 295 seconds (4:55). There is no audio or subtitle track. The full source capture was uniformly normalized to the target duration rather than truncating the final demonstration. FFmpeg decoded the complete exported file without errors. Sampled frames were visually checked for readable text, status details, validation messages, focus outline, the evidence slide and the final dashboard.

Video-verification.json contains the file hash, size and technical verification. The executable prototype remains unchanged from the SHA256 recorded in ../evidence/test-results.json. The earlier consolidated report remains the design/build record; this note records the additional silent footage.

Before submission, add original team narration, captions and the focused question; check the final exported duration stays at most five minutes. Recheck speech/caption synchronization and local playback.

## Reproduction

With Playwright available through NODE_PATH, run node tools/record-video.cjs from the repository, then tools/export-video.ps1 with a full FFmpeg executable supporting libx264. FFmpeg 7.1 was obtained via imageio-ffmpeg 0.6.0 in the ignored work directory for this recording. The recording and export helpers are development tools, not application dependencies.
