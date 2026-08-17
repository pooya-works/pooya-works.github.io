---
title: "Building PaperRenamer"
day: "Day 001"
description: "Why the first Pooya Works project starts with messy academic PDF filenames."
date: "2026-08-17"
project: "PaperRenamer"
---

## Why I built it

Academic PDFs are useful, but their filenames are often not. A folder full of `main.pdf`, `document.pdf`, and publisher IDs becomes hard to search after only a few downloads.

## What problem it solves

PaperRenamer starts with one practical task: choose a PDF and generate a clean filename from the likely paper year, first author, and title.

## How it should work

The first version should stay local, small, and easy to understand. It should preserve the original file when requested and give clear feedback when a PDF does not contain enough readable metadata.

## What I want to learn

The interesting part is not just renaming files. It is learning how often useful metadata can be extracted locally, where the failure cases are, and whether the workflow feels faster than manual cleanup.
