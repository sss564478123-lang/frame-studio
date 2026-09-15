from pathlib import Path
import json, sys
root=Path(__file__).resolve().parents[1]
core=root/'core'
errors=[]
skills=list(core.glob('*/SKILL.md'))
if len(skills)!=14: errors.append(f'core skills={len(skills)} expected=14')
router=(root/'SKILL.md').read_text(encoding='utf-8')
for p in skills:
    text=p.read_text(encoding='utf-8'); slug=p.parent.name
    if f'name: {slug}' not in text: errors.append(f'{slug}: frontmatter name mismatch')
    if '# ' not in text or '## 임무' not in text: errors.append(f'{slug}: Korean readable sections missing')
    if f'core/{slug}/SKILL.md' not in router: errors.append(f'{slug}: router missing')
contract=json.loads((root/'evals/v51-contract.json').read_text(encoding='utf-8'))
if not contract.get('writer_critic_separation'): errors.append('writer/critic separation off')
if not contract.get('single_prose_writer'): errors.append('single prose writer off')
if not (root/'PROJECT_INSTRUCTIONS.md').exists(): errors.append('project instructions missing')
project=(root/'PROJECT_INSTRUCTIONS.md').read_text(encoding='utf-8')
for required in ['본문 전 자료','순수 소설 본문','본문 후 자료','NO_DRAFT','source-blind']:
    if required not in router and required not in project: errors.append('missing '+required)
print('PASS' if not errors else 'FAIL')
for e in errors: print('-',e)
sys.exit(1 if errors else 0)
