# 작가공방 V52 한국어 스킬 카탈로그

| 표시 이름 | Skill ID | 핵심 책임 |
|---|---|---|
| 소설 총괄 라우터 | `novel-router` | 요청 분류, 권위 잠금, 필요한 전문가 선택 |
| 정사·판본·AU 조사 전문가 | `novel-canon-research` | 공식 정사, 판본, 기준시점, AU delta |
| 캐릭터 수행·말투 전문가 | `novel-character-performance` | OOC, 관계별 register, 호칭, 행동 선택 |
| 회차 상태·연속성 장부 전문가 | `novel-episode-state` | 시간, 몸, 물건, 지식, 비밀, 미완 사건 |
| 장면 인과·드라마투르기 전문가 | `novel-scene-architecture` | 장면 압력, 선택, 반응, 상태 변화 |
| 대사·상호작용 설계 전문가 | `novel-dialogue-craft` | 발언권, 의미 완결, uptake, 서브텍스트 |
| 최종 산문 집필 전문가 | `novel-fiction-prose` | 실제 초고와 최종 산문의 유일한 Writer |
| 오리지널 정본·세계 전문가 | `novel-original-fiction` | 오리지널 내부 정사와 세계 규칙 누적 |
| 성숙한 관계·친밀감 전문가 | `novel-mature-romance` | 성인 관계, 경계, 상호성, 관계 delta |
| 대사 국소 개고 전문가 | `novel-dialogue-reviser` | 확인된 대사 결함만 최소 수리 |
| 산문 국소 개고 전문가 | `novel-prose-reviser` | 반복 골격, 과설명, 나열체 등 최소 수리 |
| 정사·AU 독립 검수 전문가 | `novel-canon-critic` | 정사/판본/AU/지식 hard blocking |
| 연속성·물리 상태 검수 전문가 | `novel-continuity-critic` | 시간/공간/몸/물건/지식/POV 모순 |
| 최종 냉독·릴리스 전문가 | `novel-episode-release` | source-blind 실제 독서 효과 판정 |
| 회차 자료·출력 편집 전문가 | `novel-dossier-output` | PRE/PURE_BODY/POST와 다음 화 인계 |

## 선택 원칙
전문가 수가 많다는 것은 동시에 많이 호출한다는 뜻이 아니다. 한 요청에 실제로 필요한 최소 집합만 로드하고, 특히 Writer와 Critic을 시간적으로 분리한다.
