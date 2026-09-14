# GitHub / Web 조사 요약 — 2026-09-15

## OpenAI Skills
OpenAI Help 기준 설치된 Skill은 필요할 때 하나 이상의 Skill이 자동으로 사용될 수 있다. 따라서 자동화를 위해 모든 전문가를 한 Skill에 합칠 필요가 없다.

## zenstory-ai/oh-story-claudecode
- 조사 시점 약 6.8k stars / 975+ forks, MIT.
- 실제 구조: `story` router와 `story-long-write`, `story-long-analyze`, `story-long-scan`, `story-deslop` 등 독립 Skill.
- 각 Skill은 필요한 reference만 on-demand로 읽고 장편 상태·대사·문체 drift를 별도 검증한다.
- `dialogue-mastery.md`에서 기계적인 문답식 대화, 동일 음성, 정보 전달식 대화, 감정 연결 부족을 별도 문제로 다룬다.

## PenglongHuang/chinese-novelist-skill
- 조사 시점 약 2.9k stars / 431 forks, MIT.
- preference memory, 중단 이후 이어쓰기, 장별 자동 검증을 사용한다.

## jwynia/agent-skills
- 실제 `skills/creative/fiction/character/dialogue/SKILL.md` 확인.
- text/subtext/context 층, 동일 음성, exposition dump, on-the-nose, single-function dialogue, pacing mismatch를 구분한다.
- `The Tennis Match`를 완벽한 교대·비슷한 응답 길이·권력 차이 부재의 실패 패턴으로 본다.

## alfredxw/denova
- 실제 `skills/novel-standard/SKILL.md` 확인.
- 핵심 흐름은 `main writer drafts → independent reviewer reviews → main writer revises`이며 reviewer가 직접 원고를 덮어쓰지 않는다.

## 적용 원칙
외부 공개 Skill 원문을 하나의 거대 복사본으로 결합하지 않는다. 출처와 라이선스를 연구 기록으로 남기고, runtime Skill은 한국어 장편·오리지널·패러디/AU 요구와 ChatGPT 독립 Skill 설치 구조에 맞게 새로 작성/재구성한다.
