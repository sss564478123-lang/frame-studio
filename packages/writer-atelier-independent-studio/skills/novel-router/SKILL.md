---
name: novel-router
description: Use when starting or continuing a fiction task and selecting the smallest useful set of independent novel skills without merging their responsibilities.
---
# 소설 독립 Skill 라우터

## 역할
이 Skill은 **다른 Skill의 내용을 자기 안에 복사하지 않는다.** 사용자 요청을 분류하고, 설치되어 있는 독립 Skill 중 필요한 최소 집합을 추천·적용하는 진입점이다.

## 권위
사용자의 최신 명시 지시 > 승인된 실제 본문·확정 설정 > 확정 AU delta > 선택 정사 > 파생 장부 > 일반 작법 순으로 판단한다.

## 자동 라우팅
- 패러디·팬픽·AU: `novel-canon-research` → `novel-parody-au-architect` → 필요 시 `novel-crossover-harmonizer`.
- 오리지널: `novel-original-fiction` → 장편이면 `novel-series-architect` → 필요 시 `novel-world-systems`.
- 이어쓰기: `novel-project-state` + `novel-episode-state` + `novel-scene-architecture`.
- 대사 핑퐁/한 줄: `novel-dialogue-craft` + `novel-dialogue-floor-control`; 긴 고백·협상은 `novel-long-speech-craft`; 3인 이상은 `novel-group-dialogue-orchestration`; 직전 말을 안 듣는 문제는 `novel-listener-uptake`.
- 시간 점프: `novel-timeflow-director`; 장면 시작/종료가 상투적이면 `novel-scene-entry-exit`; 한 회차가 과밀/공허하면 `novel-episode-density`.
- 최종 산문: `novel-fiction-prose` 한 명이 통합 집필한다.
- 검수: 사실/연속성 → 구조 → 독자 관점 → 레드팀 → 필요 시 `novel-chief-editor` 순으로 최소 호출한다.

## 금지
- 모든 Skill을 매 요청마다 호출하지 않는다.
- 여러 Writer가 같은 원고를 순차적으로 전면 재작성하게 하지 않는다.
- critic 체크리스트를 초고 Writer에게 미리 주입해 문체를 평준화하지 않는다.
- Skill이 설치되어 있지 않으면 해당 Skill을 호출했다고 꾸미지 않는다.

## 출력
사용자가 원하면 선택한 Skill 이름을 짧게 밝힐 수 있으나, 소설 본문에는 Skill·검색·검수 메타를 넣지 않는다.
