# GitHub 인기/실전 소설 Skill 조사 기록

2026-09-15 GitHub connector/API 기준으로 실제 저장소와 Skill 원문을 조회했다.

## 1. alfredxw/denova
- GitHub API 확인: **721 stars / 119 forks**.
- license: Apache-2.0.
- 설명: novel writing + AI agents + Skills + subagent workflow + version control을 포함하는 AI creative platform.
- 실제 조회 파일: `skills/novel-standard/SKILL.md`.
- 참고한 핵심: `main Agent drafts → review SubAgent → main Agent revises and updates state`.
- 적용: Sovereign Studio의 단일 Writer, 독립 reviewer, 최소 수정 원칙 강화.

## 2. jwynia/agent-skills
- GitHub API 확인: **157 stars / 19 forks**.
- fiction 영역에 dialogue, scene-sequencing, endings, story-sense, prose-style, cliche-transcendence, statistical-distance 등 다수의 독립 Skill 존재.
- `dialogue/SKILL.md`를 실제 조회했으며 `The Tennis Match`를 완벽한 교대·비슷한 길이의 응답·권력 차이 부재의 실패 패턴으로 설명한다.
- 개별 조사 Skill frontmatter에 `license: MIT`가 있으나 저장소 루트 LICENSE는 조회 시 확인되지 않아 원문 전체를 소버린 런타임에 복제하지 않고 설계 원리만 재구성했다.

## 3. miserylee/webnovel-handbook
- GitHub API 확인: MIT License.
- 실제 조회: antagonist/opposition 및 protagonist 성장 뒤 world-response 동기화 문서.
- 적용: 주인공이 성장하면 적대자·조직·시장·동맹·규칙도 실제 획득 정보에 따라 학습·변화하도록 설계.

## 4. anotherpanacea-eng/apodictic
- developmental editing 진단 자료가 깊어 비교 연구에 사용.
- GitHub API의 저장소 license가 `NOASSERTION`이므로 원문 다운로드/재배포 대상으로 사용하지 않고 구조적 아이디어 비교만 수행.

## 라이선스·저작권 원칙
외부 공개 Skill을 그대로 결합해 하나의 거대 복사본으로 만들지 않는다. 라이선스와 provenance를 기록하고, 실제 runtime Skill은 한국어 장편·패러디/AU 프로젝트의 요구에 맞춰 별도로 재설계한다.
