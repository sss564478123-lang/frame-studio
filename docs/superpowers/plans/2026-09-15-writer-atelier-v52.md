# Writer Atelier V52 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** V51.1의 의미를 보존하면서 독립 배포 가능한 V52 전문가 소설 스킬 패키지를 구축한다.

**Architecture:** 15개 독립 스킬을 유지하고, 깊은 품질 제어는 references/schemas/scripts/evals로 분리한다. 실제 Writer는 하나만 유지하며 critic/reviser는 초고 이후에만 작동한다.

**Tech Stack:** Markdown SKILL.md, JSON/JSON Schema, Python 3 표준 라이브러리, pytest.

**Spec:** `docs/superpowers/specs/2026-09-15-writer-atelier-v52-design.md`

## Global Constraints
- 기존 V51.1의 권위 순서와 NO_DRAFT/PRE-PURE_BODY-POST 계약을 보존한다.
- 스킬은 총 15개이며 실제 prose writer는 하나다.
- 사용자 가독성 콘텐츠는 한국어다.
- 프로젝트 설정은 7,000~8,000자다.
- 자동 분석 수치만으로 문학적 PASS/FAIL을 선언하지 않는다.

---

### Task 1: 패키지 계약 테스트
**Files:** `tests/test_package.py`
- [ ] 패키지가 없는 상태에서 15개 스킬과 필수 파일 존재 검사를 작성한다.
- [ ] `pytest -q`를 실행해 실패를 확인한다.

### Task 2: 독립 패키지 기본 구조와 15개 스킬
**Files:** `packages/writer-atelier-v52/README_KO.md`, `INSTALL_KO.md`, `SKILL_CATALOG_KO.md`, `PACKAGE_MANIFEST.json`, `skills/*/SKILL.md`
- [ ] V51.1 스킬을 복사하되 버전/라우팅/공유 reference 인계를 V52에 맞춘다.
- [ ] 각 스킬의 사용 시점, 입력·출력 계약, 판단 절차, 경계, 인계, 완료 기준을 유지한다.

### Task 3: 공유 기억·검수 계약 실체화
**Files:** `references/*.md`, `schemas/*.schema.json`
- [ ] 4개 한국어 reference를 작성한다.
- [ ] 대응하는 4개 JSON Schema를 작성한다.
- [ ] JSON 파싱과 필수 key 테스트를 통과시킨다.

### Task 4: 정적 분석 도구
**Files:** `scripts/analyze_passage.py`, `tests/test_analyze_passage.py`
- [ ] 먼저 실패 테스트를 작성한다.
- [ ] 표준 라이브러리만으로 반복 n-gram, 문장 시작, 대사 리듬 후보 분석기를 구현한다.
- [ ] 문학 품질 자동 PASS/FAIL 필드는 만들지 않는다.

### Task 5: 회귀 평가 패키지
**Files:** `evals/heldout-regressions.json`, `evals/RELEASE_PROTOCOL_KO.md`, `evals/validate_package.py`
- [ ] 12개 이상 회귀 시나리오를 작성한다.
- [ ] 최상위 4개 회귀 태그를 연결한다.
- [ ] 패키지 validator를 실행한다.

### Task 6: 프로젝트 설정
**Files:** `PROJECT_INSTRUCTIONS_KO.md`
- [ ] V51.1의 설정 의미를 보존한다.
- [ ] 작법 세부를 중복하지 않는다.
- [ ] 7,000~8,000자 자동 검증을 통과시킨다.

### Task 7: 배포 검증 및 ZIP
- [ ] 전체 pytest와 validator를 실행한다.
- [ ] ZIP을 만들고 `unzip -t`로 무결성을 확인한다.
- [ ] SHA-256을 계산한다.
- [ ] GitHub 별도 branch에 패키지와 설계/계획 문서를 반영한다.
