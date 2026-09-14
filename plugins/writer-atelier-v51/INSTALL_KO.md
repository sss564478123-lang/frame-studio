# 플러그인/스킬 설치 안내

## 권장 설치 단위
이 번들의 `skills/` 아래 15개 디렉터리를 **각각 독립 스킬**로 등록한다. `novel-router`가 사용자 진입점이며 나머지 14개는 조건에 따라 선택적으로 로드한다.

## 중요한 구조 원칙
- 모든 스킬을 하나의 거대 SKILL.md로 합치지 않는다.
- 머신 식별자는 영문 slug를 유지한다. 제목과 설명은 한국어로 제공한다.
- 런타임이 평면 스킬 디렉터리를 요구하면 `skills/novel-*` 구조를 그대로 사용한다.
- 프로젝트 전용 고정 규칙을 지원하면 `PROJECT_INSTRUCTIONS_KO.md`의 내용만 프로젝트 설정에 넣는다.
- 프로젝트 설정에 각 SKILL.md 전문을 다시 복사하지 않는다.

## 권장 활성 흐름
정사 기반 회차: `novel-router → novel-canon-research → novel-character-performance → novel-episode-state → novel-scene-architecture → novel-dialogue-craft(필요 시) → novel-fiction-prose → novel-canon-critic + novel-continuity-critic → 국소 reviser(필요 시) → novel-episode-release → novel-dossier-output`.

오리지널 회차는 canon 연구 대신 `novel-original-fiction`을 사용한다. 대사 비중이 낮으면 `novel-dialogue-craft`를 생략할 수 있다. 관계 장면에서 실제로 필요할 때만 `novel-mature-romance`를 추가한다.

## 프로젝트 설정을 따로 두는 이유
스킬은 재사용 가능한 전문 기술이고 프로젝트 설정은 작품마다 계속 유지할 계약이다. 둘을 합치면 매 회차 writer가 검수 규칙까지 한꺼번에 읽어 체크리스트 문체로 수렴하기 쉽다.

## 설치 후 확인
1. `novel-router`가 14개 전문 스킬을 이름으로 참조하는지 확인한다.
2. 각 스킬 설명이 `Use when...` 조건으로 시작하는지 확인한다.
3. 실제 초고 작성 스킬은 `novel-fiction-prose` 하나인지 확인한다.
4. critic/reviser가 초고 전에 자동 상시 로드되지 않는지 확인한다.
5. 프로젝트 설정의 정본 권위와 기존 작품 설정이 충돌하지 않는지 확인한다.