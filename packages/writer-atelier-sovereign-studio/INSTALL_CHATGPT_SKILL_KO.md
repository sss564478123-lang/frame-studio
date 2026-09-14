# ChatGPT Plugins → Skills 설치 가이드

## 기존 FINAL ZIP이 왜 `유효하지 않은 스킬`로 보일 수 있었나
`Writer_Atelier_Sovereign_Studio_FINAL.zip`과 `Writer_Atelier_Sovereign_Studio_All_Skills.zip`은 여러 독립 Skill을 담는 개발/배포 묶음이다. ChatGPT의 한 번의 Skill 업로드 단위로 쓰는 파일이 아니다.

Agent Skills 표준의 기본 단위는 하나의 skill directory 안에 최소 하나의 `SKILL.md`가 있는 구조다. ChatGPT 업로드용 정본은 이 요구에 맞춰 별도로 만든다.

## 업로드할 파일
`dist/Writer_Atelier_Sovereign_Studio_ChatGPT_Skill.zip`

구조:
```text
writer-atelier-sovereign-studio/
├── SKILL.md
└── references/
    ├── ROUTING_INDEX.md
    ├── skill--novel-....md
    └── agent--....md
```

ZIP 전체에 `SKILL.md`는 정확히 1개다. `SKILL.md` frontmatter는 호환성을 위해 `name`과 `description`만 사용한다.

## 설치 순서
1. ChatGPT 사이드바 → Plugins.
2. Skills 탭 → Create → Upload from your computer.
3. `Writer_Atelier_Sovereign_Studio_ChatGPT_Skill.zip` 업로드.
4. 설치 후 새 채팅에서 해당 Skill을 선택하거나 @-mention한다.

## 그래도 거부되면
`Writer_Atelier_Skill_Upload_Smoke_Test.zip`을 먼저 올린다. 이것도 거부되면 파일 구조보다 현재 계정/워크스페이스의 Skills 업로드 지원, 관리자 권한 또는 제품 제공 범위 문제일 가능성이 높다.

## 개발용과 설치용 구분
- 개발/보관: FINAL ZIP, All-Skills ZIP, 60개 개별 Skill ZIP.
- ChatGPT Plugins → Skills 설치: 단일 ChatGPT Skill ZIP 하나.
