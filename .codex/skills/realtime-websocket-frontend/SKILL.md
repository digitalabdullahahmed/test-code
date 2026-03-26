---
name: realtime-websocket-frontend
description: Design reliable real-time frontend behavior for Next.js applications. Use this for websocket or realtime subscriptions, live notifications, optimistic live UI, connection state handling, and maintainable real-time UX patterns.
---

# Realtime Websocket Frontend

Use this skill whenever the task affects live updates, websocket behavior, or streaming-like realtime UI.

## Core rules

- realtime state must have clear ownership
- connection state should be visible when it matters
- fallback behavior matters when realtime is unavailable
- optimistic live behavior must not corrupt user trust

## Required concerns

- reconnect strategy
- loading and offline behavior
- deduplication of repeated events
- ordering assumptions
- optimistic update rollback where needed

## Review checklist

Reject or fix:
- no reconnection thinking
- duplicate realtime events corrupting UI state
- hidden connection failure
- realtime logic smeared across unrelated components
