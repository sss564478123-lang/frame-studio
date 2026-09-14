# 작가공방 소버린 스튜디오 설계

## 목표
장편·웹연재·패러디/AU·크로스오버·오리지널을 한 시스템에서 다루되, 거대한 단일 프롬프트가 아니라 **50개 독립 전문 Skill + 18개 독립 편집 Agent + 단일 Prose Writer**로 분리한다.

## 설계 원칙
1. 전체 산문 Writer는 `novel-fiction-prose` 하나다.
2. 설계·조사 Skill은 Writer에게 긍정적 사실/제약/목표만 전달한다.
3. 검수 Agent는 완성 후보를 서로 독립적으로 읽고 finding만 편집장에 넘긴다.
4. 50개 Skill을 동시에 로드하지 않는다. 라우터가 최소 집합만 고른다.
5. 실제 승인 본문이 계획보다 우선한다.
6. 패러디에서는 canon과 AU consequence를 모두 존중한다.
7. 오리지널에서는 세계 설정이 행동 비용과 인과에 실제로 작동해야 한다.

## 이번 확장
기존 마스터 길드에 Story Sense, Scene/Sequel, Opening/Ending, Cliche/Distinctness, Antagonist/Supporting Cast, Subplot, Oblique Exposition, Embodiment, Action, Mystery Fair Play, Reader Load, Progression, World Response, Reverse Outline, Developmental Revision, Cultural Authenticity, Humor Timing을 추가한다.

## 편집실
기존 10개 Agent에 인과 레드팀, 장면 전환 감사, 적대자 지능, 장르 베테랑 독자, 미스터리 공정성, 몸/공간 가독성, 결말 회수, 성장 밸런스 감사를 추가한다. 각 Agent는 다른 finding을 보기 전에 독립 판정을 완료한다.
