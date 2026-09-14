# 작가공방 소버린 스튜디오

장편 인기작가의 설계 사고와 전문 편집실의 독립 검수를 **50개 독립 Agent Skill + 18개 편집 Agent**로 분리한 소설 제작 시스템이다. 패러디/AU, 크로스오버, 오리지널, 웹연재, 장르소설을 모두 지원한다.

## 핵심
- 전체 소설 산문의 유일한 Writer: `novel-fiction-prose`
- 50개 Skill을 동시에 로드하지 않는 progressive disclosure
- canon / AU / approved prose / episode state 권위 분리
- 18개 검수 Agent의 독립 관점 + 편집장 합의
- Scene/Sequel, Ending Debt, Mystery Clue Ledger, Opposition Response, Reader Load, Progression Economy 추가
- GitHub 공개 Skill 연구 스냅샷과 라이선스 provenance 포함

## 기본 실행
`novel-router → 필요한 설계/조사 Skill → novel-fiction-prose → 필요한 독립 검수 Agent → chief-editor → 국소 reviser → source-blind release`

## 중요한 원칙
전문가 수는 컨텍스트 크기가 아니다. 요청 하나에 필요한 최소 모듈만 불러야 한다.
