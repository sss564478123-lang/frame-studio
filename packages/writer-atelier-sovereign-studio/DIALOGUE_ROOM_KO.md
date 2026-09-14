# Dialogue Room — 대사 핑퐁·한 줄화 전용 전문 계층

사용자 강한 선호: **대사를 모든 턴 한 문장으로 쪼개지 않는다.** 짧은 대사를 금지하는 것이 아니라, 중요한 발화가 의미를 끝내기 전에 형식적으로 턴을 넘기는 것을 금지한다.

## 신규 10개 Skill
1. `novel-dialogue-floor-control` — 발화권, 의미 완결, 끼어듦 조건.
2. `novel-dialogue-length-dynamics` — 인물·상황에 따른 발화 길이 대비.
3. `novel-conversation-geometry` — 공간·권력·퇴로·행동이 대화를 바꾸는 구조.
4. `novel-long-speech-craft` — 고백·설명·협상·연설 같은 장문 대사의 내부 움직임.
5. `novel-group-dialogue-orchestration` — 3명 이상 대화의 순번제 방지.
6. `novel-subtext-pressure` — 직접 말할 수 없는 욕구와 침묵의 압력.
7. `novel-scene-breathing` — 폭로·충격 뒤 처리와 다음 선택 사이의 호흡.
8. `novel-paragraph-rhythm` — 모든 문단/대사를 한 줄로 쪼개는 화면 파편화 방지.
9. `novel-consequence-memory` — 지난 말·상처·약속·오해가 다음 장면에 실제로 남게 함.
10. `novel-reader-immersion` — 설정표가 아니라 현재 선택을 따라가게 하는 몰입 검수.

## 신규 독립 검수 Agent 5개
- `dialogue-floor-editor` — 의미 완결 전 강제 턴 넘김 검수.
- `long-speech-editor` — 긴 대사가 에세이·정보 덤프로 변하는지 검수.
- `group-dialogue-auditor` — A→B→C 순번제·회의록화 검수.
- `subtext-silence-reader` — 숨은 뜻이 너무 노골적이거나 너무 불투명한지 냉독.
- `immersion-breathing-reader` — 대사·설명·문단 호흡이 독자를 장면 밖으로 밀어내는 지점 검수.

## 자동 라우팅
사용자 피드백에 `핑퐁`, `전부 한 줄`, `대사가 짧다`, `좀 길게`, `티키타카가 기계적`이 있으면 `novel-dialogue-craft` + `novel-dialogue-floor-control`을 우선 호출한다. 모두 비슷한 길이면 length dynamics, 중요한 장문이면 long speech, 3명 이상이면 group dialogue를 추가한다.

## 실패 기준
- 한 문장 질문 → 한 문장 답 → 한 문장 재질문의 메트로놈 반복.
- 고백·설명이 의미를 끝내기 전에 매번 상대에게 턴을 넘김.
- 모든 인물의 턴 길이가 비슷함.
- 모든 대사 뒤 같은 종류의 몸짓이 붙음.
- 3인 대화가 공평한 순번제로 돎.
- 긴 발화가 인물의 말이 아니라 작가 설명문처럼 완벽함.
- 이미 대사로 드러난 감정을 서술이 즉시 다시 해설함.

## 보존 기준
짧은 명령, 충격, 거절, 회피, 과묵한 인물의 짧은 답은 기능이 있으면 그대로 둔다. 목표는 ‘무조건 장문’이 아니라 **의미가 필요한 만큼 지속되는 자연스러운 발화권**이다.
