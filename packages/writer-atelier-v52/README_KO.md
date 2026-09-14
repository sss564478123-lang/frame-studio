# 작가공방 V52 — 독립 전문가 소설 스킬 패키지

작가공방 V52는 하나의 거대한 프롬프트가 아니라 **총괄 라우터 1개 + 전문 스킬 14개 + 공유 기억/검수 엔진 + 회귀 평가 도구**로 구성된 독립 배포 패키지다.

## 설계 목표
V51.1까지 확정한 정사 우선순위, AU 분리, 승인 본문 우선, NO_DRAFT, PRE/PURE_BODY/POST, 단일 Writer, Writer/Critic 분리 의미를 그대로 보존한다. V52의 변화는 그 의미를 바꾸는 것이 아니라, 문서에만 있던 고급 품질 제어를 실제 파일·스키마·검증 도구로 분리해 실행 가능하게 만든 것이다.

## 핵심 구조
- `skills/` — 15개 독립 SKILL.md. 실제 산문 Writer는 `novel-fiction-prose` 하나다.
- `references/` — 장면 모멘텀, 대사 상황 지문, 수정 예산, source-blind 릴리스의 한국어 전문 계약.
- `schemas/` — 공유 상태를 기계적으로 검증하기 위한 JSON Schema.
- `scripts/analyze_passage.py` — 표현 반복·문장 시작·대사 리듬의 **검토 후보**를 찾는 정적 분석기. 문학 점수나 자동 PASS/FAIL은 만들지 않는다.
- `evals/` — 구조 validator와 held-out 회귀 시나리오.
- `PROJECT_INSTRUCTIONS_KO.md` — 소설 프로젝트에 고정할 7,000~8,000자 프로젝트 헌법.

## 왜 스킬을 합치지 않는가
정사 조사, 캐릭터 수행, 장면 설계, 대사 설계, 초고 작성, 검수는 서로 다른 실패 모드를 가진다. 전부 한 문맥에 넣으면 Writer가 장면을 경험시키는 대신 검사표를 피하는 문장을 만들기 쉽다. V52는 전문가를 많이 두되, **실제 문장을 쓰는 권한은 한 Writer에게만 집중**한다.

## V52의 새 실체화 기능
1. Phrase Echo 후보 분석 — 금지어가 아니라 근접 반복 군집을 찾는다.
2. Scene Momentum Memory — 장면에서 실제로 무엇이 움직였는지 기억한다.
3. Dialogue Situational Fingerprint — 캐릭터 말투를 상황별 분포로 기록한다.
4. Revision Budget — 전면 재작성의 연쇄를 막고 표적 수리 횟수를 제한한다.
5. Source-Blind Release — 제작 과정을 보지 않고 PURE_BODY만 최종 냉독한다.
6. Held-out Regression Suite — 과묵한 인물, 긴 고백, 친구 농담, 논쟁, 다인 대화, 전투 등 최악 조건을 별도 점검한다.

## 철학
정적 수치는 진단 보조다. 반복 횟수, 문장 길이, 대사 길이, 교대 횟수를 맞추는 것이 좋은 소설의 목적이 아니다. 최종 판단은 정사·연속성 hard fact 검증과 독립적인 source-blind 독서 효과를 결합해 내린다.
