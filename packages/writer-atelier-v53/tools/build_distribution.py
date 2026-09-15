from pathlib import Path
import shutil, zipfile
ROOT=Path(__file__).resolve().parents[1]
DIST=ROOT/'dist'
INDIV=DIST/'individual-skills'
SKILLS=sorted(p for p in (ROOT/'skills').iterdir() if p.is_dir())
if DIST.exists(): shutil.rmtree(DIST)
INDIV.mkdir(parents=True)
for skill in SKILLS:
    with zipfile.ZipFile(INDIV/f'{skill.name}.zip','w',zipfile.ZIP_DEFLATED) as z:
        for p in sorted(skill.rglob('*')):
            if p.is_file(): z.write(p,Path(skill.name)/p.relative_to(skill))
with zipfile.ZipFile(DIST/'Writer_Atelier_V53_All_Skills.zip','w',zipfile.ZIP_DEFLATED) as z:
    for skill in SKILLS:
        for p in sorted(skill.rglob('*')):
            if p.is_file(): z.write(p,Path('skills')/skill.name/p.relative_to(skill))
(DIST/'README_KO.md').write_text('''# 배포 ZIP 안내\n\n`individual-skills/`의 ZIP은 각 스킬을 독립 업로드하기 위한 산출물이다. `Writer_Atelier_V53_All_Skills.zip`은 다중 Skill 컨테이너/플러그인 제작용 전체 묶음이다.\n\n이 ZIP들은 `tools/build_distribution.py`로 원본 `skills/`에서 다시 생성할 수 있다. GitHub 소스 브랜치에서는 바이너리 ZIP 대신 이 빌드 스크립트와 원본 Skill 폴더를 기준으로 관리할 수 있다.\n''','utf-8')
print(f'Built {len(SKILLS)} individual skill zips + all-skills bundle')
