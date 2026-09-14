# Writer Atelier Sovereign Studio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans or subagent-driven-development.

**Goal:** Upgrade Master Guild into a 50-skill / 18-agent fiction authoring and editorial system grounded in GitHub research.

**Architecture:** Preserve the single prose writer and progressive-disclosure router. Add missing macro/micro craft specialists, independent editorial agents, schemas, research provenance, and expanded regression coverage.

**Tech Stack:** Markdown Agent Skills, JSON Schema, Python pytest/validator, ZIP distribution.

**Spec:** `docs/SOVEREIGN_STUDIO_DESIGN_KO.md`

## Global Constraints
- Single full-prose writer: `novel-fiction-prose`.
- Do not load all skills simultaneously.
- Approved prose outranks prior plans.
- Preserve NO_DRAFT and PURE_BODY contracts.
- Third-party research must retain provenance/license notes.

### Task 1: Research corpus
- [x] Search GitHub fiction skill repositories.
- [x] Record at least 10 licensed source snapshots with provenance.

### Task 2: TDD structure gate
- [x] Add failing tests for 50 skills, 18 agents, schemas, research corpus, regressions and manifest.
- [x] Observe RED on Master Guild baseline.

### Task 3: Twenty specialist skills
- [x] Add all 20 new self-contained Skill folders.
- [x] Add trigger-only descriptions and boundaries.

### Task 4: Eight independent review agents
- [x] Add independent input scopes and finding contracts.

### Task 5: State schemas and router
- [x] Add 9 schemas.
- [x] Extend router while preserving minimal loading and single writer.

### Task 6: Regression and distribution
- [x] Expand held-out cases to 60.
- [x] Run full pytest and package validator.
- [x] Build individual-skill zips and full package zip.
- [x] Verify archive integrity and SHA-256.

### Task 7: GitHub delivery
- [x] Create isolated branch.
- [x] Commit reviewable source/docs.
- [x] Open PR without merging.
