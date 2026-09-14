# 작가공방 V53 아키텍처

V53은 **15개 독립 Agent Skill + 프로젝트 고정 계약 + 배포/검증 계층**으로 구성한다.

핵심은 세 가지다. 첫째, 실제 산문은 `novel-fiction-prose` 한 스킬만 쓴다. 둘째, 각 전문 스킬은 자기 폴더의 `references/`, `assets/`, `scripts/`만 필요할 때 읽어 progressive disclosure를 지킨다. 셋째, Writer의 초고 문맥과 Critic의 실패 taxonomy를 분리한다.

## 책임 계층
- **라우팅:** novel-router
- **근거/상태:** canon-research, character-performance, episode-state
- **장면/상호작용:** scene-architecture, dialogue-craft
- **작성:** fiction-prose 단일 Writer
- **국소 수리:** dialogue-reviser, prose-reviser
- **독립 검수:** canon-critic, continuity-critic, episode-release
- **출력/인계:** dossier-output
- **선택 전문:** original-fiction, mature-romance

## 이식성
공식 Agent Skills 규격의 `skill-name/SKILL.md` 구조, lowercase-hyphen name, name=parent-directory, 1024자 이하 description, 스킬 루트 기준 1단계 resource reference를 검증한다. 패키지 공용 자원을 스킬이 직접 상대경로로 읽지 않으므로 개별 ZIP으로 떼어내도 기능 경계가 유지된다.
