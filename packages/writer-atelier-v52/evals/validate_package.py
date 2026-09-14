#!/usr/bin/env python3
from pathlib import Path
import json, re, sys
ROOT=Path(__file__).resolve().parents[1]
errors=[]
skills=['novel-router','novel-canon-research','novel-character-performance','novel-episode-state','novel-scene-architecture','novel-dialogue-craft','novel-fiction-prose','novel-original-fiction','novel-mature-romance','novel-dialogue-reviser','novel-prose-reviser','novel-canon-critic','novel-continuity-critic','novel-episode-release','novel-dossier-output']
sections=['## 사용 시점','## 입력 계약','## 판단 절차','## 출력 계약','## 경계','## 인계','## 완료 기준']
for slug in skills:
    p=ROOT/'skills'/slug/'SKILL.md'
    if not p.exists(): errors.append(f'missing skill: {slug}'); continue
    text=p.read_text(encoding='utf-8')
    if f'name: {slug}' not in text: errors.append(f'{slug}: name mismatch')
    if not re.search(r'^description:\s*Use when',text,re.M): errors.append(f'{slug}: description trigger format')
    if not re.search(r'^# .*?[가-힣]',text,re.M): errors.append(f'{slug}: Korean title missing')
    for sec in sections:
        if sec not in text: errors.append(f'{slug}: missing {sec}')
router=(ROOT/'skills/novel-router/SKILL.md').read_text(encoding='utf-8') if (ROOT/'skills/novel-router/SKILL.md').exists() else ''
for slug in skills[1:]:
    if slug not in router: errors.append(f'router missing {slug}')
if '실제 회차 산문 작성자는 `novel-fiction-prose` 하나' not in router: errors.append('single writer wording missing')
proj=ROOT/'PROJECT_INSTRUCTIONS_KO.md'
if not proj.exists(): errors.append('project instructions missing')
else:
    n=len(proj.read_text(encoding='utf-8'))
    if not 7000 <= n <= 8000: errors.append(f'project instructions chars={n}, expected 7000..8000')
manifest=ROOT/'PACKAGE_MANIFEST.json'
if not manifest.exists(): errors.append('manifest missing')
else:
    m=json.loads(manifest.read_text(encoding='utf-8'))
    if m.get('version')!='52.0.0': errors.append('manifest version')
    if m.get('skill_count')!=15: errors.append('manifest skill count')
    if m.get('single_prose_writer') is not True: errors.append('single prose writer off')
    if m.get('automatic_literary_pass_fail') is not False: errors.append('automatic literary pass/fail must be false')
for name in ['scene-momentum','dialogue-fingerprint','revision-budget','release-finding']:
    p=ROOT/'schemas'/f'{name}.schema.json'
    if not p.exists(): errors.append(f'missing schema {name}'); continue
    d=json.loads(p.read_text(encoding='utf-8'))
    if d.get('type')!='object' or not d.get('required'): errors.append(f'invalid schema {name}')
reg=ROOT/'evals/heldout-regressions.json'
if not reg.exists(): errors.append('regression suite missing')
else:
    d=json.loads(reg.read_text(encoding='utf-8'))
    if len(d.get('scenarios',[]))<12: errors.append('regression scenarios < 12')
    tags={t for s in d.get('scenarios',[]) for t in s.get('risk_tags',[])}
    for tag in ['robotic-prose','phrase-echo','short-dialogue-overcompression','metronomic-dialogue']:
        if tag not in tags: errors.append(f'missing regression tag {tag}')
print('PASS' if not errors else 'FAIL')
print(f'skills={sum((ROOT/"skills"/s/"SKILL.md").exists() for s in skills)}/15')
print(f'project_chars={len(proj.read_text(encoding="utf-8")) if proj.exists() else 0}')
print(f'regression_scenarios={len(json.loads(reg.read_text(encoding="utf-8")).get("scenarios",[])) if reg.exists() else 0}')
for e in errors: print('-',e)
sys.exit(1 if errors else 0)
