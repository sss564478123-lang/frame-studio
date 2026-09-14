# 2026 웹 검증 기록

V53은 2026-09-15 기준 공개 자료를 다시 확인해 구조를 조정했다.

## 공식 Agent Skills 규격
- https://agentskills.io/specification
- 스킬은 최소 `SKILL.md`를 가진 독립 디렉터리다.
- `name`은 64자 이하 lowercase letters/numbers/hyphens, 부모 디렉터리명과 일치해야 한다.
- `description`은 1024자 이하이며 무엇을 하고 언제 쓰는지 설명한다.
- `scripts/`, `references/`, `assets/`는 선택 리소스다.
- progressive disclosure를 위해 SKILL.md는 작게 유지하고 세부 리소스는 필요할 때 읽는다.
- 파일 참조는 스킬 루트 기준 상대경로를 쓰고 깊은 참조 체인을 피한다.

## OpenAI Skills/Plugins
- https://openai.com/academy/skills/
- https://help.openai.com/en/articles/20001066-skills-in-chatgpt
- https://help.openai.com/en/articles/20001256-plugins-in-chatgpt-and-codex
OpenAI는 복잡한 워크플로를 하나의 거대 스킬보다 작은 빌딩 블록으로 나누는 방식을 권장한다. ChatGPT의 Skills는 업로드가 가능한 환경에서 컴퓨터에서 업로드할 수 있고, 플러그인은 여러 Skills를 포함할 수 있다. 실제 사용 가능 여부는 플랜·워크스페이스·표면에 따라 달라질 수 있다.

## 소설 스킬 비교
- SkillMedev Fiction Scene Writer / Manuscript Reviser
- jwynia agent-skills Dialogue / story-analysis
공통적으로 장면 Writer와 revision/diagnosis 책임을 분리하고, 동일 voice·평면 대사·과개고를 별도 문제로 다룬다. V53은 이 원리를 그대로 복사하지 않고 기존 작가공방의 정사/AU/상태/한국어 소설 계약에 맞춰 재구성했다.
