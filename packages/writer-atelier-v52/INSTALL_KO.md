# 작가공방 V52 설치 안내

## 1. 설치 단위
`skills/` 아래 15개 디렉터리를 각각 독립 스킬로 등록한다. 런타임이 Agent Skills 형식의 폴더 설치를 지원한다면 각 폴더의 `SKILL.md`를 그대로 사용한다. 하나의 거대 SKILL.md로 합치지 않는다.

## 2. 사용자 진입점
일반 소설 요청의 진입점은 `novel-router`다. 라우터는 요청을 보고 필요한 전문 스킬만 선택한다. 매회 15개를 전부 로드하지 않는다.

## 3. 프로젝트 설정
소설이 ChatGPT Project 같은 지속 프로젝트 안에 있다면 `PROJECT_INSTRUCTIONS_KO.md`를 프로젝트 고정 설정으로 사용하는 것을 권장한다. 이 파일은 전문 작법을 반복하지 않고 정본 권위, AU, 상태 상속, 출력, Writer/Critic 분리처럼 장기적으로 고정되어야 할 계약만 담는다.

## 4. 공유 엔진
`references/`와 `schemas/`는 스킬이 필요할 때만 읽는 공유 계약이다. 특히 `dialogue-fingerprint`는 모든 대사를 수치 목표에 맞추는 지침이 아니라 캐릭터의 상황별 말하기 범위를 기억하는 구조다.

## 5. 정적 분석기
`scripts/analyze_passage.py <본문파일>`을 실행하면 JSON으로 반복 표현 후보, 반복 문장 시작, 문단 통계, 대사 리듬 후보를 낸다. 결과는 critic의 추가 확인 대상으로만 사용한다. 경고가 있다는 이유만으로 자동 수정하지 않는다.

## 6. 권장 실행 흐름
정사 기반 회차: `novel-router → novel-canon-research → novel-character-performance → novel-episode-state → novel-scene-architecture → 필요 시 novel-dialogue-craft → novel-fiction-prose → novel-canon-critic + novel-continuity-critic → 필요한 국소 reviser → novel-episode-release → novel-dossier-output`.

오리지널은 `novel-canon-research` 대신 `novel-original-fiction`을 사용한다. 관계 장면이라도 필요하지 않으면 `novel-mature-romance`를 자동 호출하지 않는다.

## 7. 설치 후 검증
`python evals/validate_package.py`를 실행한다. 개발 환경에서는 패키지 루트의 테스트까지 함께 실행한다. 프로젝트 설정 글자수, 15개 스킬 존재, 단일 Writer 계약, 4개 스키마, 12개 이상 회귀 시나리오가 모두 확인되어야 한다.
