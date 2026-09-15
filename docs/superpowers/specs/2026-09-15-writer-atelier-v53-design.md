# Writer Atelier V53 Design

## Goal
Create a new, standalone Korean-first fiction Agent Skills package that preserves V52 semantics while aligning the package with the 2026 Agent Skills open specification and current OpenAI Skills/Plugins guidance.

## Non-negotiable semantics
User instruction > approved prose/settings > established in-story events > confirmed AU > selected canon > derived state > current-scene constraints > generic craft. Approved prose outranks derived ledgers. Canon and AU remain distinct. Canon-dependent missing values can trigger NO_DRAFT. Default serial output remains PRE → PURE_BODY → POST. PURE_BODY contains no production meta.

## Architecture
The package contains one router plus fourteen specialist skills. The only full-draft prose writer is `novel-fiction-prose`. Research/state/scene/dialogue skills provide evidence, constraints, or intent. Critics inspect completed candidates. Revisers make targeted repairs only after a reader-visible failure is confirmed.

Each skill is self-contained. Optional detail lives under that skill's one-level `references/`, `assets/`, or `scripts/` directories. No skill reaches upward into package-global runtime resources. This makes each skill independently zip-installable and matches progressive disclosure: startup sees metadata, activation loads SKILL.md, and detailed resources load only on demand.

## Resource ownership
- `novel-router`: revision budget reference/schema/template.
- `novel-character-performance`: situational dialogue fingerprint reference/schema/template.
- `novel-episode-state`: scene momentum reference/schema/template.
- `novel-episode-release`: source-blind release reference, finding schema/template, passage analyzer script.
- `novel-dossier-output`: serial output template.

## Distribution
The source package keeps all 15 skill directories. A distribution builder creates 15 individual skill ZIPs and one all-skills ZIP. The top-level package ZIP includes documentation, project instructions, evaluation assets, source skills, generated distributions, checksums, and the distribution builder.

## Validation
Validation checks Agent Skills name/description constraints, parent-directory equality, metadata version, SKILL.md size, local one-level resource references, no parent-relative paths, router coverage, project instruction length (7,000–8,000 characters), at least 14 held-out regressions, individual ZIP integrity, and analyzer behavior.

## Project instructions
Project instructions remain a separate 7,000–8,000 character constitution rather than a copy of the craft skills. This preserves long-running canon/state/output contracts without flooding the writer context with every craft rule.

## Web-grounded design rationale
OpenAI Academy recommends small skill building blocks rather than one massive end-to-end skill for complex workflows. Agent Skills specification recommends progressive disclosure, skill-local resources, shallow relative references, lowercase-hyphen names matching directory names, and compact SKILL.md files. OpenAI help documentation confirms skills can include instructions, examples, code, and supporting resources, while plugins can package multiple skills.
