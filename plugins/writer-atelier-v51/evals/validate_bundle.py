from pathlib import Path
import re, sys
root = Path(__file__).resolve().parents[1]
errors=[]
required_skills=[
'novel-router','novel-canon-research','novel-character-performance','novel-episode-state',
'novel-scene-architecture','novel-dialogue-craft','novel-fiction-prose','novel-original-fiction',
'novel-mature-romance','novel-dialogue-reviser','novel-prose-reviser','novel-canon-critic',
'novel-continuity-critic','novel-episode-release','novel-dossier-output']
if not root.exists():
    errors.append('plugin bundle root missing')
else:
    for slug in required_skills:
        p=root/'skills'/slug/'SKILL.md'
        if not p.exists():
            errors.append(f'missing skill {slug}')
            continue
        text=p.read_text(encoding='utf-8')
        if f'name: {slug}' not in text: errors.append(f'{slug}: name mismatch')
        m=re.search(r'^description:\s*(.+)$',text,re.M)
        if not m or not m.group(1).strip().startswith('Use when'):
            errors.append(f'{slug}: description must start Use when')
        for sec in ['## 사용 시점','## 입력 계약','## 판단 절차','## 출력 계약','## 경계','## 인계','## 완료 기준']:
            if sec not in text: errors.append(f'{slug}: missing {sec}')
        first_heading=next((ln for ln in text.splitlines() if ln.startswith('# ')), '')
        if not re.search(r'[가-힣]', first_heading):
            errors.append(f'{slug}: Korean readable title missing')
    router=(root/'skills'/'novel-router'/'SKILL.md')
    if router.exists():
        rt=router.read_text(encoding='utf-8')
        for slug in required_skills[1:]:
            if slug not in rt: errors.append(f'router missing {slug}')
    for q in ['README_KO.md','INSTALL_KO.md','PROJECT_INSTRUCTIONS_KO.md','SKILL_CATALOG_KO.md','evals/regression-scenarios.md']:
        if not (root/q).exists(): errors.append(f'missing {q}')
    project_path=root/'PROJECT_INSTRUCTIONS_KO.md'
    if project_path.exists():
        project_len=len(project_path.read_text(encoding='utf-8'))
        if not 7000 <= project_len <= 8000:
            errors.append(f'project instructions chars={project_len} expected 7000-8000')
print('PASS' if not errors else 'FAIL')
for e in errors: print('-',e)
sys.exit(1 if errors else 0)
