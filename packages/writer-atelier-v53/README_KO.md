# 작가공방 V53 — Production Expert Package

정사 기반 패러디·AU·오리지널 장편을 위한 **15개 독립 Agent Skill 패키지**다. V52의 의미를 유지하면서 2026 공개 Agent Skills 규격에 맞춰 각 스킬을 자기완결 구조로 재배치했다.

## 가장 중요한 설계
- 소설 스킬 하나에 모든 규칙을 합치지 않는다.
- 실제 산문 Writer는 `novel-fiction-prose` 하나다.
- 정사 조사·상태·장면·대사·검수는 독립 책임으로 분리한다.
- 각 Skill의 세부 리소스는 해당 Skill 폴더 안에만 둔다.
- 프로젝트 설정은 7,000~8,000자 고정 계약으로 별도 유지한다.
- 정적 분석 결과는 수정 명령이 아니라 독자 냉독을 위한 후보 위치다.

## 배포물
- `skills/`: 원본 15 Skill
- `dist/individual-skills/`: ChatGPT Skills 등에서 개별 업로드하기 쉬운 ZIP 15개
- `dist/Writer_Atelier_V53_All_Skills.zip`: 전체 Skills 묶음
- `PROJECT_INSTRUCTIONS_KO.md`: 소설 Project에 넣을 고정 설정
- `evals/`: 규격/회귀 검증

설치 전에 `INSTALL_KO.md`, 전체 흐름은 `RUNTIME_FLOW_KO.md`, 구조 근거는 `WEB_RESEARCH_2026_KO.md`를 확인한다.
