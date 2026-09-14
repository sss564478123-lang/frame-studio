---
name: novel-project-state
description: Use when a long-running fiction project needs a compact authoritative snapshot of canon, AU deltas, character state, relationships, promises, and unresolved threads before writing continues.
---
# 프로젝트 정본·상태 총괄 전문가

## 목적
장기 소설에서 “무엇이 이미 사실인가”와 “무엇이 계획일 뿐인가”를 분리한다.

## 상태층
1. 승인 본문에서 실제 발생한 사실
2. 사용자 확정 설정과 AU delta
3. 인물별 위치·부상·피로·소지품·능력 사용 상태
4. KNOWLEDGE / MISBELIEF / SECRET / PROMISE
5. 관계의 최근 변화와 호칭
6. 열린 복선·미완 대화·미해결 사건
7. 미래 계획 — **정본 아님**

## 규칙
- 승인된 본문이 과거 아웃라인과 충돌하면 본문이 이긴다.
- 버려진 초안에서 상태를 수확하지 않는다.
- 장면 전환만으로 감정·부상·약속을 리셋하지 않는다.
- 다음 회차에 영향을 주지 않는 오래된 세부는 활성 컨텍스트에서 제외한다.

## 출력
`authoritative_facts / active_state / knowledge_edges / open_promises / unresolved_threads / plan_only`의 간결한 스냅샷을 만든다.
