from pathlib import Path
import json,re,sys,zipfile
import yaml
ROOT=Path(__file__).resolve().parents[1]
SKILLS=['novel-router','novel-canon-research','novel-character-performance','novel-episode-state','novel-scene-architecture','novel-dialogue-craft','novel-fiction-prose','novel-original-fiction','novel-mature-romance','novel-dialogue-reviser','novel-prose-reviser','novel-canon-critic','novel-continuity-critic','novel-episode-release','novel-dossier-output']
errors=[]
for slug in SKILLS:
 p=ROOT/'skills'/slug/'SKILL.md'
 if not p.exists(): errors.append(f'missing {slug}'); continue
 text=p.read_text('utf-8')
 m=re.match(r'^---\n(.*?)\n---\n',text,re.S)
 if not m: errors.append(f'{slug}: frontmatter missing'); continue
 try: data=yaml.safe_load(m.group(1))
 except Exception as e: errors.append(f'{slug}: yaml {e}'); continue
 name=data.get('name',''); desc=data.get('description','')
 if name!=slug: errors.append(f'{slug}: name != parent')
 if not re.fullmatch(r'[a-z0-9]+(?:-[a-z0-9]+)*',name): errors.append(f'{slug}: invalid name')
 if not (1<=len(name)<=64): errors.append(f'{slug}: name length')
 if not (1<=len(desc)<=1024): errors.append(f'{slug}: description length')
 if 'Use when' not in desc: errors.append(f'{slug}: trigger phrase missing')
 if data.get('metadata',{}).get('version')!='53.0.0': errors.append(f'{slug}: version metadata')
 if len(text.splitlines())>=500: errors.append(f'{slug}: SKILL.md >=500 lines')
 for rel in re.findall(r'`((?:references|assets|scripts)/[^`]+)`',text):
  q=p.parent/rel
  if not q.exists(): errors.append(f'{slug}: missing resource {rel}')
  if len(Path(rel).parts)!=2: errors.append(f'{slug}: deep resource ref {rel}')
 if '../' in text: errors.append(f'{slug}: parent-relative ref found')
project=ROOT/'PROJECT_INSTRUCTIONS_KO.md'
chars=len(project.read_text('utf-8')) if project.exists() else 0
if not 7000<=chars<=8000: errors.append(f'project chars {chars}')
reg=json.loads((ROOT/'evals/heldout-regressions.json').read_text('utf-8'))
if len(reg.get('scenarios',[]))<14: errors.append('regression scenarios <14')
router=(ROOT/'skills/novel-router/SKILL.md').read_text('utf-8')
for slug in SKILLS[1:]:
 if slug not in router: errors.append(f'router missing {slug}')
dist_dir=ROOT/'dist/individual-skills'
if dist_dir.exists():
 for slug in SKILLS:
  z=dist_dir/f'{slug}.zip'
  if not z.exists(): errors.append(f'missing zip {slug}'); continue
  with zipfile.ZipFile(z) as f:
   if f'{slug}/SKILL.md' not in f.namelist(): errors.append(f'zip bad {slug}')
else:
 print('INFO: generated distribution ZIPs absent; run tools/build_distribution.py to build them')
print('PASS' if not errors else 'FAIL')
print(f'skills={len(SKILLS)}/15')
print(f'project_chars={chars}')
print(f'regression_scenarios={len(reg.get("scenarios",[]))}')
for e in errors: print('-',e)
sys.exit(1 if errors else 0)
