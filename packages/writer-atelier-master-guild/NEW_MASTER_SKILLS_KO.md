# 작가공방 마스터 길드 — 신규 15개 거시 Skill 전체 원문

---

## novel-series-architect

---
name: novel-series-architect
description: Use when 장편소설·웹소설·다권 시리즈를 설계하거나 현재 아크가 흔들리고 장기 방향과 다음 회차의 구체성이 서로 맞지 않을 때.
---

# 장편·시리즈 아키텍트 — 작가공방 마스터 길드

## 핵심 원리
장기 연재는 미래 수백 화를 고정하는 일이 아니다. **시리즈 계약은 안정적으로, 현재 아크는 유연하게, 다음 회차만 구체적으로** 설계한다.

## 사용 시점
- 새 장편/연재의 큰 방향을 잡을 때
- 중반이 처지거나 플롯이 산만해졌을 때
- 장기 계획과 실제 승인 본문이 어긋났을 때

## 입력 계약
현재 승인 본문, 독자에게 약속한 핵심 경험, 장기 질문, 캐릭터 목적지, 열린 복선, 현재 아크 상태, 다음 회차 요구.

## 판단 절차
1. Series Horizon: 작품이 끝날 때까지 유지할 독자 계약·대질문·대형 변화만 잠근다.
2. Arc Horizon: 현재 아크가 답할 질문, 비가역 변화, 진입·종료 조건을 잡는다.
3. Episode Horizon: 다음 회차에서 실제로 변할 한두 상태와 국소 만족을 잡는다.
4. 승인 본문이 계획을 벗어났다면 본문을 되돌리지 말고 미래 계획을 재조정한다.
5. 조용한 회차에도 클리프행어를 강요하지 않는다.

## 출력 계약
`series_contract`, `current_arc`, `next_episode_targets`, `open_long_promises`, `plan_changes_due_to_prose`를 간결히 반환한다.

## 경계
수백 화 장면 목록을 미리 확정하지 않는다. 장면 산문을 작성하지 않는다. 모든 아크를 동일 구조로 찍어내지 않는다.

## 인계
현재 아크 목표는 `novel-scene-architecture`, 장기 캐릭터 변화는 `novel-character-arc`, 열린 약속은 `novel-foreshadowing-payoff`로 넘긴다.

## 로컬 자원
`assets/story-horizons.schema.json`과 `references/THREE_HORIZONS_KO.md`를 필요할 때만 로드한다.

## 완료 기준
시리즈·아크·다음 회차의 계획 해상도가 분리되고 실제 승인 본문과 충돌하지 않는다.

---

## novel-character-arc

---
name: novel-character-arc
description: Use when 인물이 너무 빨리 변하거나, 사건을 겪어도 아무 변화가 없거나, 장기 성장·퇴행·가치 변화의 속도를 설계해야 할 때.
---

# 캐릭터 성장·변화 아크 전문가 — 작가공방 마스터 길드

## 핵심 원리
인물 변화는 성격표를 교체하는 것이 아니라 **압력 속에서 선택이 누적되어 믿음과 행동 범위가 달라지는 과정**이다.

## 사용 시점
- 장기 성장/타락/회복/평면 아크 설계
- 큰 사건 뒤 성격이 갑자기 바뀌는 문제 진단
- 여러 아크가 겹칠 때 속도 조율

## 입력 계약
현재 믿음, 욕망, 실제 필요, 두려움, 방어기제, 관계, 최근 선택, 실패·성공, 확정 미래 방향.

## 판단 절차
1. 현재 self-story와 오해를 분리한다.
2. 변화 압력을 외부 사건이 아니라 선택 비용으로 연결한다.
3. milestone마다 얻는 것과 잃는 것을 둔다.
4. 퇴행 가능성과 옛 습관의 잔존을 보존한다.
5. 한 장면에서 인격 전체가 바뀌지 않게 변화량을 제한한다.

## 출력 계약
`arc_state`, `pressure`, `next_test`, `earned_change`, `residual_old_pattern`, `do_not_jump_to`를 반환한다.

## 경계
행복/슬픔 같은 단기 감정 변화를 성장으로 오인하지 않는다. 작가가 원하는 결말 때문에 인물을 끌고 가지 않는다.

## 인계
현재 장면에 필요한 변화 압력만 `novel-character-performance`와 Writer에게 전달한다.

## 로컬 자원
상태를 구조화할 때 `assets/character-arc.schema.json`을 사용한다.

## 완료 기준
다음 변화가 이전 선택에서 인과적으로 이어지고 과속·정지가 없다.

---

## novel-relationship-arc

---
name: novel-relationship-arc
description: Use when 우정·가족·사제·라이벌·적대·연애 관계가 장기적으로 가까워지거나 멀어지는 과정을 설계해야 할 때.
---

# 관계 변화 아크 전문가 — 작가공방 마스터 길드

## 핵심 원리
관계는 호감도 숫자가 아니라 **신뢰, 기대 역할, 권력, 거리, 상처, 정보 비대칭, 상호 의존**의 조합이다.

## 사용 시점
- 두 인물의 관계가 갑자기 친밀해지거나 원상복구될 때
- 호칭·말투 변화가 관계 변화와 맞지 않을 때
- 다자 관계의 동맹/질투/배신을 추적할 때

## 입력 계약
관계의 기존 정본, 최근 사건, 각자의 기대와 두려움, 말하지 않은 것, 호칭/접촉/거리, 비밀.

## 판단 절차
1. 현재 관계 벡터를 기술한다.
2. 이번 사건이 어느 축을 움직이는지 한정한다.
3. 말과 행동이 같은 방향인지 어긋나는지 본다.
4. 관계 변화의 증거를 실제 장면 행동으로 요구한다.
5. 해결 뒤에도 남는 잔여 감정을 기록한다.

## 출력 계약
`relationship_delta`, `trust`, `power`, `distance`, `unresolved_residue`, `address_shift`를 반환한다.

## 경계
한 번의 친절을 영구적 친밀감으로 승격하지 않는다. 연애가 아닌 관계를 자동으로 로맨스화하지 않는다.

## 인계
`novel-character-performance`와 `novel-episode-state`에 관계 delta만 넘긴다.

## 로컬 자원
관계 delta를 구조화할 때 `assets/relationship-vector.schema.json`을 사용한다.

## 완료 기준
관계 변화가 사건·선택에 의해 획득됐고 이후 호칭·행동·기대에 반영될 수 있다.

---

## novel-genre-director

---
name: novel-genre-director
description: Use when 주 장르가 불분명하거나 보조 장르가 본편을 침범하고, 독자가 기대한 감정 경험과 실제 전개가 어긋날 때.
---

# 장르·독자 약속 총괄 전문가 — 작가공방 마스터 길드

## 핵심 원리
장르는 배경 태그가 아니라 **독자에게 약속하는 주된 감정 경험**이다. 설정과 감정 장르를 구분한다.

## 사용 시점
- 새 작품의 장르 계약 설정
- 미스터리/스릴러/호러/관계/드라마 등의 만족 조건 점검
- 보조 장르가 주 장르를 압도할 때

## 입력 계약
작품 컨셉, 독자에게 주려는 감정, 설정 장르, 현재 아크, 주요 키 모먼트, 보조 플롯.

## 판단 절차
1. Primary emotional genre를 한 문장으로 잡는다.
2. Secondary genre가 무엇을 보조하는지 명시한다.
3. 오프닝/현재 아크/결말의 genre promise가 일치하는지 본다.
4. 필수 만족 요소가 빠졌는지 진단한다.
5. 장르 관습을 복제하지 않고 예상 감정은 예상 밖 방식으로 제공한다.

## 출력 계약
`primary_promise`, `secondary_support`, `required_satisfactions`, `misalignment`, `freshness_opportunities`를 반환한다.

## 경계
SF/판타지/현대물을 자동으로 감정 장르로 취급하지 않는다. 장르 규칙을 체크리스트처럼 장면마다 강제하지 않는다.

## 인계
핵심 감정 목표는 `novel-series-architect`, 장면별 구현은 `novel-scene-architecture`로 넘긴다.

## 완료 기준
독자가 무엇을 기대해야 하고 작품이 무엇을 갚아야 하는지가 명확하다.

---

## novel-theme-motif

---
name: novel-theme-motif
description: Use when 작품의 주제가 설교처럼 직접 설명되거나, 상징과 반복 이미지가 임의적이거나, 사건들이 하나의 질문으로 묶이지 않을 때.
---

# 주제·모티프·상징 전문가 — 작가공방 마스터 길드

## 핵심 원리
주제는 정답 문장이 아니라 **서로 다른 믿음을 가진 인물들이 선택하고 대가를 치르는 과정에서 드러나는 질문**이다.

## 사용 시점
- 장편의 중심 주제 질문 설계
- 모티프/상징 반복의 의미 변화 관리
- 대사로 주제를 직접 설명하는 문제 수정

## 입력 계약
작품 핵심 질문, 인물별 가치관, 주요 선택, 결과, 반복 이미지/물건/행동.

## 판단 절차
1. theme question을 만든다.
2. 서로 다른 답을 인물/세력에 배치한다.
3. 사건 결과가 각 답을 시험하게 한다.
4. 모티프는 동일 의미가 아니라 상황에 따라 의미가 변하게 한다.
5. 결말의 입장은 설명이 아니라 누적 결과로 나타나게 한다.

## 출력 계약
`theme_question`, `competing_answers`, `tests`, `motif_state`, `overstatement_risks`를 반환한다.

## 경계
등장인물의 입을 작가의 확성기로 쓰지 않는다. 상징을 모든 장면에 억지로 반복하지 않는다.

## 인계
장면에서 필요한 주제 압력만 `novel-scene-architecture`에 전달한다.

## 완료 기준
주제가 선택과 결과로 읽히며 대사 설명 없이도 추적 가능하다.

---

## novel-foreshadowing-payoff

---
name: novel-foreshadowing-payoff
description: Use when 복선, 미스터리 질문, 강조된 물건·능력·위협·관계 문제가 장기 연재에서 잊히거나 회수가 갑작스러울 때.
---

# 복선·서사 약속·회수 전문가 — 작가공방 마스터 길드

## 핵심 원리
복선은 기억 목록이 아니라 **독자에게 진 서사적 부채**다. 식재·강화·복잡화·회수 상태를 실제 본문 기준으로 관리한다.

## 사용 시점
- 장기 복선 추적
- Chekhov 요소/질문/위협/설정의 회수 계획
- 회수가 뜬금없거나 너무 뻔한 문제 진단

## 입력 계약
승인 본문에서 실제 등장한 setup, 질문, 위협, 능력, 물건, 관계 문제와 현재 계획.

## 판단 절차
1. 약속 유형을 분류한다: setup/foreshadow/question/threat/relationship/chekhov.
2. `planted → reinforced → complicated → paid_off/reopened/abandoned` 상태를 기록한다.
3. planned payoff와 actual prose를 구분한다.
4. 회수 전 필요한 증거를 확인한다.
5. 너무 오래 묵은 약속과 과잉 복선을 진단한다.

## 출력 계약
`promise_ledger`, `due_risks`, `reinforcement_candidates`, `earned_payoffs`를 반환한다.

## 경계
아직 본문에 식재되지 않은 계획을 이미 존재하는 복선처럼 취급하지 않는다. 모든 사소한 디테일을 복선으로 만들지 않는다.

## 인계
현재 회차에서 건드릴 약속만 `novel-series-architect`와 Writer에 전달한다.

## 로컬 자원
장기 약속 장부는 `assets/narrative-promise-ledger.schema.json`을 사용한다.

## 완료 기준
중요 약속의 상태와 실제 근거가 명확하며 회수가 획득되어 있다.

---

## novel-suspense-information

---
name: novel-suspense-information
description: Use when 비밀·단서·폭로·오해·dramatic irony를 설계하거나 미스터리의 공정성, 스릴러의 정보 압력을 점검해야 할 때.
---

# 긴장·미스터리·정보 비대칭 전문가 — 작가공방 마스터 길드

## 핵심 원리
긴장은 정보량 자체보다 **누가 무엇을 언제 알고, 무엇을 잘못 알고, 무엇을 두려워하는가**에서 나온다.

## 사용 시점
- 미스터리 단서와 오도 배치
- 독자와 POV의 지식 차이 설계
- 폭로가 너무 빠르거나 숨김이 부자연스러울 때

## 입력 계약
독자 지식, 각 POV 지식, 오해, 비밀, 단서, 폭로 후보, 시간 압력.

## 판단 절차
1. Reader/POV/Opponent knowledge를 분리한다.
2. 각 단서가 어떤 가설을 가능하게 하는지 본다.
3. 오도는 거짓말이 아니라 같은 사실의 다른 해석으로 우선 설계한다.
4. 정답 공개 전에 fair-play 단서가 존재하는지 확인한다.
5. 독자가 너무 앞서거나 너무 뒤처지는 구간을 조정한다.

## 출력 계약
`knowledge_matrix`, `clues`, `misdirections`, `reveal_order`, `fair_play_risks`를 반환한다.

## 경계
POV가 알고 있는 사실을 독자에게 숨기기 위해 부자연스럽게 생각을 회피하게 하지 않는다.

## 인계
`novel-multi-pov-director`와 `novel-scene-architecture`에 공개 순서만 전달한다.

## 로컬 자원
정보 비대칭은 `assets/knowledge-matrix.schema.json`으로 구조화할 수 있다.

## 완료 기준
폭로가 인과적으로 준비되고 지식 상태 모순 없이 긴장을 만든다.

---

## novel-world-systems

---
name: novel-world-systems
description: Use when 정치·경제·마법·기술·조직·계급·문화 같은 세계 설정이 사건과 선택에 실제 영향을 줘야 하거나 세계 규칙이 모순될 때.
---

# 세계관 시스템·인과 전문가 — 작가공방 마스터 길드

## 핵심 원리
세계관은 설정집이 아니라 **행동 가능한 선택지와 비용을 만드는 시스템**이다.

## 사용 시점
- 오리지널 세계관 시스템 설계
- 능력/마법/기술 규칙의 비용과 한계
- 제도·경제·조직이 서사에 작동하지 않을 때

## 입력 계약
현재 세계 규칙, 자원, 권력 구조, 기관, 기술/마법, 지리, 사건, 인물의 접근 권한.

## 판단 절차
1. 현재 장면에 영향을 주는 시스템만 불러온다.
2. 규칙마다 가능/불가능/비용/악용 가능성을 본다.
3. 한 규칙의 변화가 경제·정치·생활에 만드는 2차 효과를 점검한다.
4. 예외는 원인이 있어야 한다.
5. 설명보다 결과와 제약으로 세계를 보여준다.

## 출력 계약
`active_rules`, `costs`, `constraints`, `second_order_effects`, `contradictions`를 반환한다.

## 경계
이야기에 쓰이지 않을 백과사전 설정을 대량 생성하지 않는다. 세계 규칙으로 캐릭터 선택을 대신 결정하지 않는다.

## 인계
활성 규칙만 `novel-scene-architecture`, `novel-continuity-critic`에 전달한다.

## 로컬 자원
활성 세계 규칙은 `assets/world-rule.schema.json`으로 구조화할 수 있다.

## 완료 기준
세계 규칙이 실제 선택·비용·결과와 연결되고 모순 없이 작동한다.

---

## novel-research-realism

---
name: novel-research-realism
description: Use when 역사·의학·법·군사·과학·건축·직업·기술 등 현실 고증이 장면의 설득력이나 사실 정확도에 영향을 줄 때.
---

# 현실 고증·전문 조사 전문가 — 작가공방 마스터 길드

## 핵심 원리
현실 고증은 정보량 경쟁이 아니라 **장면의 선택을 바꾸는 사실을 정확히 가져오는 작업**이다.

## 사용 시점
- 전문직/역사 시대/기술 장면 조사
- 사실과 창작 편의의 경계 설정
- 세부 고증이 과하거나 부족할 때

## 입력 계약
장면 목표, 시대/국가/직업/기술, 필요한 사실 범위, 이미 확정된 작품 변경점.

## 판단 절차
1. 현재 장면에서 틀리면 독자가 깨질 사실을 우선한다.
2. 확정 사실/조건부 사실/자료 차이/창작 변경을 구분한다.
3. 전문용어는 캐릭터 관점에서 필요한 만큼만 전달한다.
4. 불확실한 수치는 단정하지 않는다.
5. 조사 결과를 본문 설명문으로 그대로 복사하지 않는다.

## 출력 계약
`confirmed_facts`, `uncertainties`, `intentional_deviations`, `scene_relevant_constraints`를 반환한다.

## 경계
검색 결과를 소설 본문에 출처 메타로 넣지 않는다. 조사량을 전문성으로 착각하지 않는다.

## 인계
장면에 필요한 사실만 Writer/정사 검수에 전달한다.

## 완료 기준
사실 경계가 명확하고 고증이 서사를 압도하지 않는다.

---

## novel-parody-au-architect

---
name: novel-parody-au-architect
description: Use when 원작 기반 패러디·회귀·빙의·환생·IF·AU에서 변경점이 이후 정사 사건에 어떤 파급을 만드는지 설계해야 할 때.
---

# 패러디·AU 분기 설계 전문가 — 작가공방 마스터 길드

## 핵심 원리
AU의 핵심은 원작 장면 복사가 아니라 **분기점이 만든 파급을 정사 압력과 함께 추적하는 것**이다.

## 사용 시점
- 미래지식/회귀/빙의/능력 변경 AU
- 원작과 너무 똑같이 흘러가는 문제
- 너무 빨리 정사가 붕괴해 작품 정체성이 사라지는 문제

## 입력 계약
원작 기준시점, 확정 canon, AU delta, 주인공 지식, 비밀, 이미 발생한 AU 결과.

## 판단 절차
1. divergence를 한 문장으로 고정한다.
2. first-order, second-order consequence를 분리한다.
3. 어떤 canon event가 여전히 구조적 압력 때문에 발생하는지 본다.
4. 어떤 사건은 변경 때문에 더 이상 그대로 일어날 수 없는지 표시한다.
5. 주인공이 미래지식으로 행동하면 적·동료도 그 변화에 반응하게 한다.
6. 결과를 다시 승인 본문에서 검증한다.

## 출력 계약
`divergence`, `consequence_cascade`, `canon_pressure`, `invalidated_canon`, `new_equilibrium`, `secrets_at_risk`를 반환한다.

## 경계
AU인데 원작 장면을 이유 없이 복제하지 않는다. 원작을 존중한다는 이유로 인과를 무시하지 않는다.

## 인계
`novel-canon-research`, `novel-series-architect`, `novel-episode-state`에 분기 결과를 인계한다.

## 로컬 자원
AU 파급은 `assets/consequence-cascade.schema.json`을 사용한다.

## 완료 기준
정사와 AU의 경계가 명확하고 변경의 파급이 누적된다.

---

## novel-crossover-harmonizer

---
name: novel-crossover-harmonizer
description: Use when 둘 이상의 작품·세계관을 결합하며 시간축, 우주론, 능력체계, 지식, 강함 비교가 충돌할 때.
---

# 크로스오버 세계·능력 정합성 전문가 — 작가공방 마스터 길드

## 핵심 원리
크로스오버는 승패를 먼저 정하는 일이 아니라 **각 세계의 규칙을 보존하면서 교차 규칙을 합의하는 작업**이다.

## 사용 시점
- 두 작품 이상의 크로스오버
- 능력 상호작용/세계 이동/시간축 조정
- 한 작품의 규칙이 다른 작품을 일방적으로 덮어쓸 때

## 입력 계약
각 작품의 선택 판본, 기준시점, 능력·세계 규칙, 인물 지식, 교차 방식.

## 판단 절차
1. A/B 세계의 불변 규칙을 따로 정리한다.
2. 직접 비교 가능/불가능 항목을 구분한다.
3. 충돌 지점마다 bridge rule을 만든다.
4. 힘의 결과는 규칙·상성·상황에서 나오게 한다.
5. 두 세계 모두의 정체성이 살아 있는지 검수한다.

## 출력 계약
`world_A_rules`, `world_B_rules`, `bridge_rules`, `incomparable_items`, `interaction_cases`를 반환한다.

## 경계
팬덤 파워스케일을 사실처럼 채택하지 않는다. 한 세계의 용어로 다른 세계를 무리하게 번역하지 않는다.

## 인계
정사 사실은 각 `novel-canon-research`, 현재 장면 규칙은 `novel-world-systems`로 넘긴다.

## 로컬 자원
교차 규칙은 `assets/crossover-bridge.schema.json`을 사용한다.

## 완료 기준
교차 규칙이 명시적이고 어느 한 세계도 임의로 붕괴하지 않는다.

---

## novel-multi-pov-director

---
name: novel-multi-pov-director
description: Use when 여러 시점 인물이 같은 작품을 이끌거나, POV 전환이 잦고 정보 중복·톤 붕괴·dramatic irony를 관리해야 할 때.
---

# 다중 POV·정보 배치 전문가 — 작가공방 마스터 길드

## 핵심 원리
POV 전환은 카메라 이동이 아니라 **독자가 얻을 정보·감정·해석이 달라질 때만 가치가 있다**.

## 사용 시점
- 앙상블/다중주인공/교대 POV
- 같은 사건을 여러 번 반복 설명할 때
- 어느 POV가 장면을 맡아야 할지 불분명할 때

## 입력 계약
POV별 목표·지식·감정·고유 접근권한, 현재 사건, 독자 지식, 장면 순서.

## 판단 절차
1. 각 POV의 독점 가치가 무엇인지 확인한다.
2. 동일 사건 재서술은 새 정보/새 해석이 없으면 제거한다.
3. 전환 지점은 압력이나 정보 상태 변화와 맞춘다.
4. 각 POV의 제한지식을 지킨다.
5. 독자가 아는 것과 인물이 아는 것의 차이를 활용하되 혼란을 만들지 않는다.

## 출력 계약
`pov_assignment`, `exclusive_value`, `knowledge_gap`, `transition_reason`, `duplication_risk`를 반환한다.

## 경계
전환 자체를 속도감으로 착각하지 않는다. 머리 속을 자유롭게 넘나드는 head-hopping을 허용하지 않는다.

## 인계
`novel-suspense-information`과 Writer에 현재 POV가 접근 가능한 것만 전달한다.

## 로컬 자원
POV별 지식과 기능은 `assets/pov-map.schema.json`을 사용한다.

## 완료 기준
각 POV가 고유한 기능을 하고 중복 없이 정보·감정을 확장한다.

---

## novel-emotional-orchestration

---
name: novel-emotional-orchestration
description: Use when 작품이 계속 같은 감정 강도로 진행되거나 큰 사건 뒤 감정이 리셋되고, 장기 감정의 상승·하강·회복을 조율해야 할 때.
---

# 감정 파형·여운 오케스트레이션 전문가 — 작가공방 마스터 길드

## 핵심 원리
감정은 매 장면 최고점으로 올리는 것이 아니라 **압축·폭발·잔향·회복·새 압력의 파형**으로 설계한다.

## 사용 시점
- 클라이맥스 전후 감정 강도 조절
- 큰 사건 후 후유증/잔여 감정 추적
- 조용한 장면의 기능 설계

## 입력 계약
최근 장면들의 감정 상태, 큰 사건, 각 인물의 coping, 현재 장면 기능, 예정된 키 모먼트.

## 판단 절차
1. 직전 감정의 잔향을 확인한다.
2. 이번 장면의 감정 기능을 상승/유지/회복/전환 중 하나로 잡는다.
3. 고강도 장면 사이에 대비가 필요한지 본다.
4. 감정 표현 방식은 인물마다 다르게 둔다.
5. 회복은 망각이 아니라 상태 변화로 기록한다.

## 출력 계약
`incoming_residue`, `scene_emotional_function`, `intensity_direction`, `release_needed`, `outgoing_residue`를 반환한다.

## 경계
모든 장면에 울음·고백·폭발을 넣지 않는다. 감정 강도를 숫자 할당량으로 Writer에게 강제하지 않는다.

## 인계
현재 장면의 감정 목적만 `novel-character-performance`와 Writer에 전달한다.

## 로컬 자원
감정 잔여와 장면 기능은 `assets/emotional-wave.schema.json`으로 구조화할 수 있다.

## 완료 기준
감정 변화가 직전 사건을 기억하고 다음 장면에 잔여를 남긴다.

---

## novel-narrative-voice

---
name: novel-narrative-voice
description: Use when 인물 대사는 구분되지만 서술 자체가 평평하거나, 회차마다 문체가 흔들리거나, AI식 중립 문체·상투적 비유가 반복될 때.
---

# 서술자 음성·작품 고유 문체 전문가 — 작가공방 마스터 길드

## 핵심 원리
작품의 voice는 특정 작가 흉내가 아니라 **시선 선택, 거리, 리듬, 어휘, 생략, 비유 방향의 일관된 편향**이다.

## 사용 시점
- 오리지널 작품의 서술 음성 설계
- 패러디에서 원작 분위기를 존중하되 복제하지 않을 때
- 회차별 문체 drift 진단

## 입력 계약
승인 본문 샘플, POV, 장르, 시대, 원하는 독서 속도, 금지된 상투 패턴.

## 판단 절차
1. narrative distance와 attention bias를 찾는다.
2. 문장 길이가 아니라 길이의 범위와 전환 습관을 본다.
3. 감정을 직접 명명하는 정도, 감각 선택, 유머, 비유 방향을 추출한다.
4. 평범한 기능문을 허용해 모든 문장을 장식하지 않는다.
5. 특정 현존 작가의 고유 문체 복제를 목표로 삼지 않는다.

## 출력 계약
`voice_fingerprint`, `preserve`, `avoid`, `drift_signals`, `scene_specific_adjustment`를 반환한다.

## 경계
문체 규칙을 문장별 체크리스트로 강제하지 않는다. 상투어 금지목록만으로 문체를 만들지 않는다.

## 인계
`novel-fiction-prose`에는 긍정적 voice target만 전달하고 critic 판정은 숨긴다.

## 로컬 자원
작품 고유 음성은 `assets/voice-fingerprint.schema.json`으로 보존한다.

## 완료 기준
서술 음성이 식별 가능하면서도 장면 필요에 따라 유연하다.

---

## novel-editorial-council

---
name: novel-editorial-council
description: Use when 완성된 회차·장면·아크를 여러 독립 관점에서 검수하고 서로 충돌하는 편집 의견을 최소 수정으로 조정해야 할 때.
---

# 다중 관점 편집위원회 오케스트레이터 — 작가공방 마스터 길드

## 핵심 원리
여러 검수자는 품질을 높이기 위해 **서로 다른 실패를 독립적으로 찾고**, 편집장은 다수결이 아니라 증거·오류비용·보존가치를 기준으로 결정한다.

## 사용 시점
- 중요 회차/클라이맥스/아크 종료 검수
- 정사 기반 패러디·AU 최종 검수
- 장기 연재에서 여러 위험을 동시에 확인할 때

## 입력 계약
최종 후보 본문, 작업 유형, 필요한 사실 장부. 각 검수 에이전트에 필요한 정보만 따로 제공한다.

## 판단 절차
1. light/canon-au/serial/release-critical 프로필 중 최소 집합을 고른다.
2. 각 에이전트는 다른 에이전트 finding을 보지 않고 독립 검수한다.
3. finding은 정확한 구간·독자 효과·심각도·최소 수정으로 제한한다.
4. 편집장은 중복을 합치고 사실 오류를 우선한다.
5. 취향 충돌은 기본적으로 원문 보존 쪽으로 판단한다.
6. 수정 후 전체를 다시 읽되 전면 재작성하지 않는다.

## 출력 계약
`accepted_findings`, `rejected_findings`, `deferred_findings`, `minimal_repairs`, `release_decision`을 반환한다.

## 경계
에이전트 수를 품질 점수로 착각하지 않는다. 다수결로 문체를 평준화하지 않는다. 검수자가 본문 전체를 전면 재작성하게 하지 않는다.

## 인계
수정이 필요하면 `novel-dialogue-reviser` 또는 `novel-prose-reviser`에 정확한 범위만 넘긴다. 통과하면 `novel-episode-release`로 인계한다.

## 검수 에이전트
세부 역할은 루트 `agents/`와 `council/EDITORIAL_COUNCIL_KO.md`를 따른다.

## 로컬 자원
세부 프로토콜은 `references/EDITORIAL_COUNCIL_KO.md`, 결과 스키마는 `assets/`를 사용한다.

## 완료 기준
독립 검수→충돌 조정→최소 수리→재냉독이 완료되고 추가 수정이 취향 영역이면 종료한다.
