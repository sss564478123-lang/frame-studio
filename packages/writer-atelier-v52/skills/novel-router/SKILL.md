---
name: novel-router
description: Use when 소설·웹소설·팬픽·패러디·AU·크로스오버 작업을 시작하거나 이어가며 어떤 전문 소설 스킬을 불러야 할지 결정해야 할 때.
---
# 소설 총괄 라우터 — 작가공방 V52

## 핵심 원리
이 스킬은 모든 작법을 직접 수행하지 않는다. 사용자 계약을 잠그고 현재 작업에 필요한 전문 스킬만 골라 호출한다. **실제 회차 산문 작성자는 `novel-fiction-prose` 하나만 유지**하며 조사·상태·검수 스킬은 작가에게 필요한 사실 또는 완성본에 대한 독립 판정을 제공한다.

## 사용 시점
- 새 작품·새 회차·이어쓰기·퇴고·정사 검증·대사 수정의 진입점이 필요할 때
- 요청이 여러 전문 영역을 동시에 포함해 책임 분리가 필요할 때
- 장기 프로젝트에서 이전 회차의 정사·상태·출력 계약을 이어가야 할 때

## 입력 계약
입력에서 가능한 범위까지 작품, 판본/매체, 기준시점, POV, 주인공, 확정 AU, 직전 승인 본문, 사용자 최신 지시, 요청 산출물을 확인한다. 정사 기반 장면을 결정하는 핵심값이 비어 있으면 임의 선택하지 않고 `NO_DRAFT`로 잠근다.

## 판단 절차
1. 최신 사용자 지시와 승인 본문을 최상위 권위로 잠근다.
2. 작업을 `기획 / 조사 / 초고 / 이어쓰기 / 퇴고 / 검수 / 출력정리`로 분류한다.
3. 아래 전문 스킬 중 필요한 것만 선택한다.
4. 초고 전에는 critic 스킬을 writer 문맥에 섞지 않는다.
5. 후보 본문이 완성된 뒤에만 critic/reviser/release를 단계적으로 사용한다.
6. 수정은 문제 구간만 대상으로 하고, 고친 뒤 다시 전체 맥락에서 읽는다.

### 전문 스킬 선택표
- 정사·판본·AU: `novel-canon-research`
- 캐릭터 말투·행동·호칭·관계 수행: `novel-character-performance`
- 시간·부상·물건·지식·비밀·미완 사건: `novel-episode-state`
- 장면 목적·압력·인과·전환: `novel-scene-architecture`
- 대사·발언권·서브텍스트·반응: `novel-dialogue-craft`
- 실제 초고·최종 산문: `novel-fiction-prose`
- 오리지널 세계/인물 정본: `novel-original-fiction`
- 성숙한 관계·친밀감: `novel-mature-romance`
- 대사 국소 개고: `novel-dialogue-reviser`
- 산문 국소 개고: `novel-prose-reviser`
- 정사/AU 독립 검수: `novel-canon-critic`
- 연속성/물리/지식 독립 검수: `novel-continuity-critic`
- source-blind 최종 냉독: `novel-episode-release`
- 본문 전/후 자료와 상태 인계: `novel-dossier-output`

## 출력 계약
연재 기본 출력은 `본문 전 자료 → 순수 소설 본문 → 본문 후 자료`다. 사용자가 `본문만`, `소설만`, `PROSE_ONLY`를 요구하면 순수 본문만 낸다. 순수 본문에는 검색·출처·AI·스킬·검수·점수·상태표·정사 설명을 넣지 않는다.

## 경계
14개 전문 스킬을 매번 전부 호출하지 않는다. 기획이 필요 없으면 기획하지 않고, 정사 검증이 필요 없으면 조사하지 않는다. 하나의 장면을 여러 writer가 순차적으로 전면 재작성하게 하지 않는다.

## 인계
다음 스킬에는 전체 데이터베이스가 아니라 현재 장면의 선택을 바꾸는 사실·제약·목표만 전달한다. critic에게는 최종 후보 본문과 검증에 필요한 사실을 넘기되 writer의 초고 과정은 숨긴다.

## V52 공유 자원 라우팅
공유 자원은 상시 로드하지 않는다. 장면 관성이 중요할 때만 `references/SCENE_MOMENTUM_KO.md`, 캐릭터 음성 드리프트가 문제일 때만 `references/DIALOGUE_FINGERPRINT_KO.md`, 완성본 수정 단계에서만 `references/REVISION_BUDGET_KO.md`, 최종 냉독 단계에서만 `references/SOURCE_BLIND_RELEASE_KO.md`를 사용한다. 정적 분석기 결과도 초고 이전에는 Writer에게 넣지 않는다.

## 완료 기준
요청이 적절한 전문 스킬 집합으로 라우팅되고, 권위·출력·정사/AU·writer/critic 분리 계약이 깨지지 않았으면 종료한다.
