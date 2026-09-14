# 작가공방 V52 런타임 흐름

이 문서는 “어떤 스킬이 언제 개입하는가”를 빠르게 이해하기 위한 운영 지도다. 모든 요청에서 아래 전체 체인을 실행하지 않는다. `novel-router`가 현재 실패 위험에 필요한 최소 집합만 선택한다.

## A. 정사 기반 새 회차
`novel-router → novel-canon-research → novel-character-performance → novel-episode-state → novel-scene-architecture → (대사 비중이 높으면 novel-dialogue-craft) → novel-fiction-prose → novel-canon-critic + novel-continuity-critic → 필요한 reviser 하나 → novel-episode-release → novel-dossier-output`

핵심은 Writer 이전에는 **사실·상태·인물 범위·장면 압력**만 만들고, 실패 taxonomy는 Writer 이후에 둔다는 점이다.

## B. 오리지널 새 회차
`novel-router → novel-original-fiction → novel-character-performance → novel-episode-state → novel-scene-architecture → 필요한 dialogue-craft → novel-fiction-prose → novel-continuity-critic → 필요한 reviser → novel-episode-release → novel-dossier-output`

## C. 기존 본문 퇴고
새 초고 Writer를 다시 부르지 않는다. 먼저 전체 본문을 읽고 문제를 `대사 / 산문 / 정사 / 연속성`으로 분리한다. 실제 문제가 확인된 영역의 reviser/critic만 사용한다.

## D. 정사 확인만 요청
`novel-canon-research` 중심으로 끝낸다. 소설 본문을 만들 이유가 없으면 `novel-fiction-prose`를 호출하지 않는다.

## E. 대사 문제만 요청
`novel-character-performance → novel-dialogue-craft`로 진단하고, 이미 완성된 본문 수리라면 `novel-dialogue-reviser`를 사용한다. 정적 분석 수치로 대사를 자동 팽창시키지 않는다.

## F. 릴리스 단계
하드 fact blocking이 0인 후보만 `novel-episode-release`에 들어간다. 첫 독서는 source-blind로 수행하고, `scripts/analyze_passage.py` 결과는 첫 독서 후 재확인 위치를 좁히는 용도로만 본다.

## 공유 엔진 로딩 규칙
- Scene Momentum: 이어쓰기/장면 관성 손실 위험이 있을 때만.
- Dialogue Fingerprint: 캐릭터 음성 드리프트가 실제 문제일 때만.
- Revision Budget: 후보 본문이 존재하고 수정 단계에 들어갔을 때만.
- Release Finding: 최종 냉독에서 고영향 문제를 구조화할 때만.
- Phrase Echo 분석기: 초고 완료 후 critic/release 보조로만.

## 중지 원칙
문제가 없는데 스킬이 남았다는 이유로 다음 스킬을 호출하지 않는다. PASS 이후 “더 좋아질 수도 있음”만으로 추가 개고를 시작하지 않는다. V52의 목표는 검수 횟수 최대화가 아니라 **독자에게 살아 있는 최종 본문을 남기는 것**이다.
