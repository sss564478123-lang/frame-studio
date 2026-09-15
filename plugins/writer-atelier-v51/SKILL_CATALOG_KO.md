# 한국어 스킬 카탈로그

| 표시 이름 | 스킬 ID | 언제 쓰는가 |
|---|---|---|
| 소설 총괄 라우터 | `novel-router` | 모든 소설 작업의 진입점과 전문 스킬 선택 |
| 정사·판본·AU 조사 전문가 | `novel-canon-research` | 원작 정사, 판본, 시점, AU 경계 복원 |
| 캐릭터 수행·말투 전문가 | `novel-character-performance` | 말투, 호칭, 행동, OOC, 관계별 register |
| 회차 상태·연속성 장부 전문가 | `novel-episode-state` | 시간·부상·물건·지식·비밀·미완 사건 상속 |
| 장면 인과·드라마투르기 전문가 | `novel-scene-architecture` | 장면 압력, 선택, 인과, 종료 상태 |
| 대사·상호작용 설계 전문가 | `novel-dialogue-craft` | 발언권, 의미 완결, uptake, 서브텍스트 |
| 최종 산문 집필 전문가 | `novel-fiction-prose` | 실제 회차 초고와 산문 작성의 단일 writer |
| 오리지널 정본·세계·인물 발전 전문가 | `novel-original-fiction` | 오리지널 설정의 누적 정본 관리 |
| 성숙한 관계·친밀감 전문가 | `novel-mature-romance` | 성인 인물 관계 진전, 경계, 상호성 |
| 대사 국소 개고 전문가 | `novel-dialogue-reviser` | 완성본의 대사 결함만 최소 수정 |
| 산문 국소 개고 전문가 | `novel-prose-reviser` | 반복 골격, 과설명, 나열체 등 최소 수정 |
| 정사·AU 독립 검수 전문가 | `novel-canon-critic` | 후보 본문의 정사/AU blocking 검증 |
| 연속성·물리 상태 독립 검수 전문가 | `novel-continuity-critic` | 시간·공간·몸·지식·물건·POV 모순 검증 |
| 최종 냉독·릴리스 판정 전문가 | `novel-episode-release` | source-blind 독자 관점 최종 품질 판정 |
| 회차 자료·출력 편집 전문가 | `novel-dossier-output` | PRE/PURE_BODY/POST 분리와 다음 화 인계 |

## 권장 원칙
스킬 이름은 런타임 호환을 위해 영문 slug를 사용하지만, **제목·설명·절차·판단 기준은 한국어**로 유지한다. 한 요청에서 모든 스킬을 로드하지 말고 라우터가 필요한 스킬만 선택한다.