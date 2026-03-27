# How To Use Project Next Step Guide

This file explains how to use the `project-next-step-guide` workflow in simple terms.

It is made for product builders and non-specialists who want the AI to tell them the right next move.

## What this workflow does

When you give a broad request, it should:
- read the current project
- understand what already exists
- understand what you are really asking for
- decide whether the request needs:
  - a new module
  - an extension of an existing module
  - only a local change
- detect missing prerequisites
- tell you the correct next step

It should not jump randomly into implementation.

## When to use it

Use it when you say things like:
- I want to build this app step by step
- what should I build next?
- does this need a new module?
- what is missing before I build this feature?
- based on the current project, what is the correct next move?

## What the answer should include

A strong answer should include:
- current project state
- what you are really asking for
- module decision
- missing prerequisites
- correct next step
- why this step comes next
- a recommended prompt to run next

## Good example requests

```text
Use the project-next-step-guide workflow. Based on the current repository and my goal to build a gold prices app, tell me the correct next implementation step.
```

```text
Use the project-next-step-guide workflow. I want to add price alerts. Tell me whether this needs a new module or belongs to an existing one, what is missing first, and what I should ask you to build next.
```

```text
Use the project-next-step-guide workflow. Read the current project and tell me what should come next before I start building the dashboard.
```

## Important expectation

If the workflow works correctly, it should sometimes tell you:
- not yet
- this is not the next step
- this belongs to an existing module
- this needs auth first
- this needs contracts first

That is good behavior, not refusal.

It means the AI is thinking in dependency order instead of acting randomly.
