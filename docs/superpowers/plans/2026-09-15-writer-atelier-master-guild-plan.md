# Writer Atelier Master Guild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans task-by-task.

**Goal:** 기존 작가공방을 30개 독립 Skill과 10개 편집 에이전트로 확장한다.
**Architecture:** 단일 Writer, 선택적 거시 전문가, 독립 편집위원회, 편집장 합의 구조.
**Tech Stack:** Markdown Agent Skills, JSON Schema, Python validation, ZIP distribution.
**Spec:** `docs/superpowers/specs/2026-09-15-writer-atelier-master-guild-design.md`

## Global Constraints
- 이름에 버전 번호를 쓰지 않는다.
- Skill frontmatter는 name/description을 포함하고 description은 `Use when`으로 시작한다.
- 프로젝트 설정은 7000~8000자다.
- Writer는 하나다.
- 검수 에이전트는 독립 판정 후 편집장이 조정한다.
- 기존 승인 본문 우선, 정사/AU 분리, PRE/PURE_BODY/POST를 유지한다.

### Task 1: 구조 RED 테스트
- 패키지/스킬/에이전트/검수계약/회귀 시나리오 요구를 먼저 테스트하고 실패를 확인한다.

### Task 2: 신규 15개 거시 Skill
- 장편, 아크, 장르, 테마, 복선, 정보, 세계, 고증, AU, 크로스오버, POV, 감정, 서술 음성, 편집위원회를 독립 Skill로 작성한다.

### Task 3: 10개 편집 에이전트
- 9개 독립 검수자와 편집장 역할, 입력 범위, 금지사항, 출력 계약을 작성한다.

### Task 4: 편집위원회 데이터 계약
- finding/decision JSON Schema와 독립 검수/충돌 해결 프로토콜을 작성한다.

### Task 5: 라우터·카탈로그·프로젝트 설정
- 새 Skill 라우팅과 에이전트 활성화 프로필을 연결하고 7~8천자 프로젝트 계약을 유지한다.

### Task 6: 30+ 회귀 시나리오와 validator
- 장기연재, AU, 크로스오버, 다중 POV, 복선, 과개고 등을 포함한 회귀 테스트를 확장한다.

### Task 7: 배포
- 전체 ZIP, 전체 Skill ZIP, 전체 Agent ZIP, 개별 Skill ZIP을 생성하고 무결성/테스트를 검증한다.
