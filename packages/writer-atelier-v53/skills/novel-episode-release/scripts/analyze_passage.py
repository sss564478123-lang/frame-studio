#!/usr/bin/env python3
"""소설 본문의 반복/리듬 후보를 찾는 보조 분석기.

이 도구는 문학적 품질 점수나 PASS/FAIL을 산출하지 않는다. 출력은 사람이
다시 읽어볼 후보 구간을 좁히기 위한 진단 자료다.
"""
from __future__ import annotations
import argparse, json, re, statistics
from collections import defaultdict
from pathlib import Path

WORD_RE = re.compile(r"[가-힣A-Za-z0-9]+")
SENTENCE_RE = re.compile(r"(?<=[.!?。！？])\s+|\n+(?=[^\n])")
DIALOGUE_OPEN = ('“','"','‘','\'')

def _tokens(text: str):
    return [m.group(0).lower() for m in WORD_RE.finditer(text)]

def _sentences(text: str):
    return [s.strip() for s in SENTENCE_RE.split(text.strip()) if s.strip()]

def _paragraphs(text: str):
    return [p.strip() for p in re.split(r"\n\s*\n", text.strip()) if p.strip()]

def phrase_echo_candidates(text: str, min_n: int = 2, max_n: int = 4):
    tokens=_tokens(text); positions=defaultdict(list)
    for n in range(min_n,max_n+1):
        for i in range(len(tokens)-n+1):
            gram=tuple(tokens[i:i+n])
            if all(len(t) <= 1 for t in gram):
                continue
            positions[(n,gram)].append(i)
    out=[]
    for (n,gram),pos in positions.items():
        if len(pos) < 2: continue
        local=min((b-a for a,b in zip(pos,pos[1:])), default=9999)
        if local <= 80:
            out.append({"phrase":" ".join(gram),"n":n,"count":len(pos),"min_token_gap":local,"token_positions":pos[:8]})
    out.sort(key=lambda x:(-x['count'],-x['n'],x['min_token_gap'],x['phrase']))
    return out[:40]

def sentence_start_candidates(text: str):
    starts=defaultdict(list)
    for i,s in enumerate(_sentences(text)):
        toks=_tokens(s)
        if len(toks)>=2: starts[' '.join(toks[:2])].append(i)
        elif toks: starts[toks[0]].append(i)
    out=[{"start":k,"count":len(v),"sentence_indices":v[:10]} for k,v in starts.items() if len(v)>=2]
    return sorted(out,key=lambda x:(-x['count'],x['start']))[:30]

def dialogue_rhythm_candidates(text: str):
    paragraphs=_paragraphs(text); flags=[]; run=[]
    def flush():
        nonlocal run
        if len(run) >= 4:
            lengths=[len(_tokens(paragraphs[i])) for i in run]
            mean=sum(lengths)/len(lengths) if lengths else 0
            stdev=statistics.pstdev(lengths) if len(lengths)>1 else 0
            if mean <= 12 and stdev <= max(3,mean*0.45):
                flags.append({"paragraph_indices":run[:],"turn_count":len(run),"mean_words":round(mean,2),"word_length_stdev":round(stdev,2),"reason":"짧고 비슷한 길이의 대사 문단이 연속됨; 실제 상태 변화가 있는지 냉독 필요"})
        run=[]
    for i,p in enumerate(paragraphs):
        if p.lstrip().startswith(DIALOGUE_OPEN): run.append(i)
        else: flush()
    flush(); return flags

def analyze_text(text: str):
    paragraphs=_paragraphs(text); sentences=_sentences(text)
    para_lengths=[len(_tokens(p)) for p in paragraphs]; sent_lengths=[len(_tokens(s)) for s in sentences]
    return {"analysis_kind":"diagnostic-candidates-only","limitations":["이 결과만으로 문학적 품질을 판정하지 않음","반복은 의도적 장치일 수 있으므로 문맥 냉독 필요"],"counts":{"characters":len(text),"paragraphs":len(paragraphs),"sentences":len(sentences),"words":len(_tokens(text))},"rhythm":{"mean_sentence_words":round(sum(sent_lengths)/len(sent_lengths),2) if sent_lengths else 0,"mean_paragraph_words":round(sum(para_lengths)/len(para_lengths),2) if para_lengths else 0},"phrase_echo_candidates":phrase_echo_candidates(text),"sentence_start_candidates":sentence_start_candidates(text),"dialogue_rhythm_candidates":dialogue_rhythm_candidates(text)}

def main():
    ap=argparse.ArgumentParser(description='소설 본문의 반복/리듬 검토 후보를 JSON으로 출력합니다.')
    ap.add_argument('file',nargs='?',help='UTF-8 본문 파일. 생략하면 stdin 사용')
    ap.add_argument('--output',help='JSON 저장 경로'); args=ap.parse_args()
    if args.file: text=Path(args.file).read_text(encoding='utf-8')
    else:
        import sys; text=sys.stdin.read()
    payload=json.dumps(analyze_text(text),ensure_ascii=False,indent=2)
    if args.output: Path(args.output).write_text(payload,encoding='utf-8')
    else: print(payload)
if __name__=='__main__': main()
