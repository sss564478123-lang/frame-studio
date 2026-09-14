# 작가공방 V53 설치 안내

## 1. ChatGPT Skills에 개별 설치
사용 중인 ChatGPT 화면에 **Plugins → Skills → Create → Upload from your computer**가 보이면 `dist/individual-skills/` 아래 필요한 ZIP을 개별 업로드할 수 있다. 공식 도움말상 Skills의 제공·설치·동기화는 플랜, 워크스페이스, 제품 표면에 따라 달라질 수 있다.

최소 권장 설치는 `novel-router` + 사용 목적에 맞는 전문 스킬이다. 정사 기반 장편이라면 15개 전체 설치가 가장 완전하지만, 런타임에서는 라우터가 필요한 스킬만 활성화해야 한다.

## 2. 플러그인/다중 Skill 컨테이너
플러그인은 여러 Skills를 포함할 수 있다. 플러그인 제작 환경에서는 `skills/` 디렉터리 또는 `dist/Writer_Atelier_V53_All_Skills.zip`을 소스로 사용한다. **OpenAI의 공개 문서에 명시되지 않은 플러그인 manifest 형식을 임의로 만들지 않았다.** 사용 중인 플러그인 편집기/관리 화면이 요구하는 컨테이너 형식에 맞춰 이 Skills 묶음을 가져간다.

## 3. 소설 Project 설정
소설 Project의 지침/설정 칸에는 `PROJECT_INSTRUCTIONS_KO.md` 내용을 사용한다. 각 SKILL.md 전문을 프로젝트 설정에 다시 붙여 넣지 않는다. Project는 작품의 고정 맥락과 계약을 유지하고, Skills는 필요할 때 전문 워크플로를 제공하도록 분리한다.

## 4. 권장 순서
1. Project 설정 적용
2. `novel-router` 설치
3. 전문 Skills 설치
4. 새 채팅에서 짧은 테스트 회차 작성
5. `novel-episode-release`까지 냉독 확인
6. 장기 연재 전에 이어쓰기/상태 회귀 시나리오 확인

## 5. 검증
패키지 루트에서 `python evals/validate_package.py`를 실행한다. 공식 `skills-ref` 도구를 사용할 수 있는 환경이라면 각 스킬에 `skills-ref validate skills/<skill-name>` 검증을 추가할 수 있다.
