---
name: file-storage-upload-management
description: Design and implement production-grade file handling for NestJS backends. Use this for uploads, object storage, validation, file metadata, signed URLs, secure download flows, lifecycle management, media processing, and file-related security review.
---

# File Storage Upload Management

Use this skill whenever the task affects uploads, file storage, media handling, or file security.

## Core rules

- Treat files as untrusted input.
- Separate metadata from binary storage concerns.
- Validate type, size, and ownership.
- Avoid serving sensitive files naively.

## Required concerns

- file size limits
- content-type validation
- extension mismatch checks where practical
- storage location strategy
- metadata persistence
- authorization for read and write access
- signed URL or proxy strategy where appropriate
- cleanup and lifecycle rules

## Review checklist

Reject or fix:
- trusting client-provided MIME type alone
- storing sensitive files with weak access control
- no size limits
- no ownership checks
- file cleanup and orphan handling ignored
