# Writer Atelier V53 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a standalone, specification-aligned V53 fiction skills package and distributable ZIPs without modifying the V52 package or application code.

**Architecture:** Fork from the V52 semantic contract but relocate runtime resources into their owning skill directories. Keep one router, fourteen specialists, one full prose writer, independent critics, project instructions, tests, and generated distributions.

**Tech Stack:** Markdown/YAML Agent Skills, JSON/JSON Schema, Python 3, pytest, ZIP, SHA-256.

**Spec:** `docs/superpowers/specs/2026-09-15-writer-atelier-v53-design.md`

## Global Constraints
- Keep exactly 15 primary skills.
- Keep `novel-fiction-prose` as the only full-draft writer.
- Preserve V52 authority, NO_DRAFT, canon/AU separation, writer/critic separation, and PRE/PURE_BODY/POST.
- Keep project instructions between 7,000 and 8,000 characters.
- Skill names must match parent directories and use lowercase alphanumeric plus hyphens.
- Skill runtime resource references must be one level deep and local to the skill root.
- Do not claim static heuristics prove literary quality.

### Task 1: Define failing package contract tests
**Files:** Create `/mnt/data/writer_atelier_v53_tests/test_package.py`.
- [x] Assert root docs, 15 skills, frontmatter, resource locality, project length, router ownership, regressions, and distribution ZIPs.
- [x] Run pytest before implementation and confirm failures because V53 does not yet exist.

### Task 2: Build V53 skill source tree
**Files:** Create `packages/writer-atelier-v53/skills/**` from V52 semantics.
- [x] Add version/display/role metadata.
- [x] Relocate fingerprint, momentum, revision budget, release protocol, analyzer, schemas, and templates into owner skill folders.
- [x] Replace package-global relative references with one-level local resource references.

### Task 3: Add package documentation and project contract
**Files:** Create/update README, INSTALL, ARCHITECTURE, RUNTIME_FLOW, WEB_RESEARCH_2026, manifest, changelog, and project instructions.
- [x] Keep project instructions at 7,765 characters.
- [x] Explain individual-skill upload and multi-skill bundle usage without inventing undocumented plugin manifest fields.

### Task 4: Add validation and regression assets
**Files:** `evals/validate_package.py`, `evals/test_analyze_passage.py`, held-out regressions, release protocol.
- [x] Validate Agent Skills constraints and 14+ regression scenarios.
- [x] Run analyzer unit tests.

### Task 5: Build distributions and checksums
**Files:** `tools/build_distribution.py`, `dist/**`, `CHECKSUMS_SHA256.txt`.
- [x] Build 15 individual skill ZIPs and one all-skills ZIP.
- [x] Build outer package ZIP and verify `unzip -t`.
- [x] Record SHA-256.

### Task 6: Publish source package to isolated GitHub branch
**Files:** `packages/writer-atelier-v53/**`, design and plan docs.
- [ ] Create branch from main.
- [ ] Commit text/source package without modifying app code or V52.
- [ ] Create PR and leave unmerged for review.
