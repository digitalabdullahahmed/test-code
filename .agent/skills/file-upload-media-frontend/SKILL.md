---
name: file-upload-media-frontend
description: Build strong frontend file and media interaction experiences in Next.js. Use this for upload UI, previews, validation, drag and drop, progress indicators, media forms, and client-side file interaction UX aligned to secure backend file handling.
---

# File Upload Media Frontend

Use this skill whenever the task affects uploads, previews, media forms, or file interaction UX.

## Core rules

- uploaded files are untrusted
- preview and progress UX must be clear
- validation should happen early and visibly
- frontend and backend validation must align

## Required concerns

- file size and type feedback
- drag-and-drop behavior if used
- progress indicators
- preview states
- retry or replacement flows
- accessible file input behavior

## Review checklist

Reject or fix:
- uploads with no visible progress
- no client-side feedback for invalid files
- inaccessible custom file input
- frontend assumptions that bypass backend validation
