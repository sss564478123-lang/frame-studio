'use client';

import { useMemo, useState } from 'react';

type Mode = 'shorts' | 'video' | 'mv';

const samples = {
  shorts: {
    title: '감성 있는 밤거리 쇼츠',
    captions: `첫 장면에서 시선 잡기
짧고 강한 문장으로 몰입
마지막 한 줄로 기억 남기기`,
    label: 'Shorts',
    tone: '세로형 · 빠른 몰입 · 첫 2초 훅',
    previewTitle: '짧고 강하게 시선 끄는 쇼츠',
  },
  video: {
    title: '브랜드 분위기 실제 영상',
    captions: `첫 컷에서 분위기 제시
중간에 정보 전달과 장면 전환
마지막에 기억에 남는 마감`,
    label: 'Real Video',
    tone: '가로형 · 분위기 + 정보 전달',
    previewTitle: '있어 보이는 브랜드 영상 흐름',
  },
  mv: {
    title: '가사형 감성 뮤직비디오',
    captions: `도입부는 잔잔하게 시작
후렴구에서 감정을 크게 올리기
마지막은 여운 남기기`,
    label: 'Music Video',
    tone: '감정선 · 후렴 강조 · 여운',
    previewTitle: '감정선이 살아 있는 뮤직비디오',
  },
};

export default function HomePage() {
  const [mode, setMode] = useState<Mode>('shorts');
  const [title, setTitle] = useState(samples.shorts.title);
  const [captions, setCaptions] = useState(samples.shorts.captions);

  const current = samples[mode];

  const captionList = useMemo(
    () => captions.split('\n').map((line) => line.trim()).filter(Boolean),
    [captions]
  );

  const applySample = (nextMode: Mode) => {
    setMode(nextMode);
    setTitle(samples[nextMode].title);
    setCaptions(samples[nextMode].captions);
  };

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#111111]">
      <section className="px-6 pt-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-black/10 bg-white/90 px-5 py-3 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
          <div className="text-sm font-semibold tracking-[-0.02em]">Frame Studio</div>
          <div className="hidden gap-2 md:flex">
            <Pill>Shorts</Pill>
            <Pill>Real Video</Pill>
            <Pill>Music Video</Pill>
          </div>
          <button className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white">
            먼저 써보기
          </button>
        </div>
      </section>

      <section className="px-6 pb-10 pt-12 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-black/65">
                복잡한 편집 전에 결과 느낌부터 잡는 시작 화면
              </div>

              <h1 className="text-4xl font-bold leading-[1.02] tracking-[-0.05em] md:text-6xl">
                보기만 해도
                <br />
                써보고 싶어지는
                <br />
                영상 제작 시작점
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-black/60 md:text-lg">
                쇼츠, 실제 영상, 뮤직비디오를 어려운 툴처럼 시작하지 않고
                먼저 결과 분위기부터 빠르게 잡아보는 화면.
                입력은 단순하게, 첫인상은 훨씬 있어 보이게.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
                  지금 바로 시작
                </button>
                <button
                  onClick={() => applySample(mode)}
                  className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold"
                >
                  예시 자동 채우기
                </button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <SoftCard
                  title="쉽게 시작"
                  desc="제목과 자막만 바꿔도 결과 분위기가 확 달라진다."
                />
                <SoftCard
                  title="더 있어 보이게"
                  desc="그냥 입력 도구가 아니라 결과물 느낌부터 잡아준다."
                />
                <SoftCard
                  title="실전 확장"
                  desc="나중에는 실제 렌더와 고퀄 엔진 연결까지 확장 가능."
                />
              </div>
            </div>

            <div className="grid gap-4">
              <HeroPreview
                title={current.previewTitle}
                label={current.label}
                tone={current.tone}
                captions={captionList}
                mode={mode}
              />

              <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <MiniPreviewCard
                  active={mode === 'shorts'}
                  title="Shorts"
                  desc="짧고 강한 훅"
                  onClick={() => applySample('shorts')}
                />
                <MiniPreviewCard
                  active={mode === 'video'}
                  title="Real Video"
                  desc="브랜드/홍보 흐름"
                  onClick={() => applySample('video')}
                />
                <MiniPreviewCard
                  active={mode === 'mv'}
                  title="Music Video"
                  desc="감정선 중심"
                  onClick={() => applySample('mv')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <div className="text-sm font-semibold text-black/40">결과 예시</div>
            <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] md:text-3xl">
              어떤 결과를 만들 수 있는지 먼저 보여주기
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <ResultCard
              badge="9:16"
              title="짧고 세게 들어오는 쇼츠"
              desc="첫 장면부터 시선을 잡고, 짧은 문장으로 몰입시키는 구조."
            />
            <ResultCard
              badge="16:9"
              title="브랜드 톤이 느껴지는 실제 영상"
              desc="너무 광고 같지도, 너무 밋밋하지도 않게 흐름을 정리하는 구조."
            />
            <ResultCard
              badge="MV"
              title="감정선이 살아 있는 뮤직비디오"
              desc="도입부, 후렴구, 마무리 여운까지 감정의 높낮이를 잡는 구조."
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6">
            <div className="text-sm font-semibold text-black/40">바로 체험</div>
            <h2 className="mt-2 text-2xl font-bold tracking-[-0.03em] md:text-3xl">
              지금 입력해보고 결과 느낌 바꾸기
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              <div className="mb-5 flex flex-wrap gap-2">
                <ModeChip active={mode === 'shorts'} onClick={() => applySample('shorts')}>
                  Shorts
                </ModeChip>
                <ModeChip active={mode === 'video'} onClick={() => applySample('video')}>
                  Real Video
                </ModeChip>
                <ModeChip active={mode === 'mv'} onClick={() => applySample('mv')}>
                  Music Video
                </ModeChip>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-black/55">제목</label>
                  <input
                    className="w-full rounded-2xl border border-black/10 bg-[#faf8f4] px-4 py-3 outline-none"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-black/55">자막 흐름</label>
                  <textarea
                    className="h-52 w-full rounded-2xl border border-black/10 bg-[#faf8f4] px-4 py-3 outline-none"
                    value={captions}
                    onChange={(e) => setCaptions(e.target.value)}
                  />
                </div>

                <button className="w-full rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white">
                  이 흐름으로 계속 만들기
                </button>
              </div>
            </div>

            <div className="rounded-[30px] border border-black/10 bg-[#111111] p-6 text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/45">현재 결과 느낌</div>
                  <div className="mt-1 text-lg font-semibold">{current.label}</div>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                  Auto Preview
                </div>
              </div>

              <div
                className={`overflow-hidden rounded-[28px] border border-white/10 ${
                  mode === 'shorts' ? 'aspect-[9/16]' : 'aspect-video'
                } bg-[linear-gradient(180deg,#2b2b2b_0%,#101010_100%)] p-6`}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/75">
                      {current.label}
                    </div>
                    <div className="text-xs text-white/35">{current.tone}</div>
                  </div>

                  <div>
                    <div className="mb-3 text-sm text-white/45">{title}</div>
                    <div className="space-y-3">
                      {captionList.slice(0, 3).map((line, index) => (
                        <div
                          key={index}
                          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xl font-bold leading-snug"
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="h-2 rounded-full bg-white/10">
                      <div
                        className={`h-2 rounded-full bg-white ${
                          mode === 'shorts' ? 'w-2/3' : mode === 'video' ? 'w-1/2' : 'w-3/4'
                        }`}
                      />
                    </div>
                    <div className="text-xs text-white/35">
                      실제 렌더 전 단계의 결과 프리뷰 느낌
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {captionList.slice(0, 3).map((line, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-full border border-black/10 bg-[#f7f4ef] px-3 py-1 text-xs font-medium text-black/70">
      {children}
    </div>
  );
}

function SoftCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-[24px] border border-black/10 bg-white p-5">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-sm leading-6 text-black/55">{desc}</div>
    </div>
  );
}

function HeroPreview({
  title,
  label,
  tone,
  captions,
  mode,
}: {
  title: string;
  label: string;
  tone: string;
  captions: string[];
  mode: Mode;
}) {
  return (
    <div className="rounded-[32px] border border-black/10 bg-[#111111] p-5 text-white shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
      <div
        className={`overflow-hidden rounded-[28px] border border-white/10 ${
          mode === 'shorts' ? 'aspect-[9/16]' : 'aspect-video'
        } bg-[linear-gradient(180deg,#2b2b2b_0%,#101010_100%)] p-6`}
      >
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/75">{label}</div>
            <div className="text-xs text-white/35">{tone}</div>
          </div>

          <div>
            <div className="mb-3 text-sm text-white/45">{title}</div>
            <div className="space-y-3">
              {captions.slice(0, 3).map((line, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xl font-bold leading-snug"
                >
                  {line}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="h-2 rounded-full bg-white/10">
              <div
                className={`h-2 rounded-full bg-white ${
                  mode === 'shorts' ? 'w-2/3' : mode === 'video' ? 'w-1/2' : 'w-3/4'
                }`}
              />
            </div>
            <div className="text-xs text-white/35">결과를 먼저 상상하게 만드는 프리뷰</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniPreviewCard({
  active,
  title,
  desc,
  onClick,
}: {
  active: boolean;
  title: string;
  desc: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-[24px] border p-4 text-left transition ${
        active
          ? 'border-black bg-black text-white'
          : 'border-black/10 bg-white text-black hover:bg-black/[0.03]'
      }`}
    >
      <div className="text-sm font-semibold">{title}</div>
      <div className={`mt-2 text-sm ${active ? 'text-white/70' : 'text-black/55'}`}>{desc}</div>
    </button>
  );
}

function ResultCard({
  badge,
  title,
  desc,
}: {
  badge: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)]">
      <div className="mb-4 inline-flex rounded-full border border-black/10 bg-[#f7f4ef] px-3 py-1 text-xs font-semibold text-black/65">
        {badge}
      </div>
      <div className="text-xl font-bold tracking-[-0.02em]">{title}</div>
      <div className="mt-3 text-sm leading-6 text-black/55">{desc}</div>
    </div>
  );
}

function ModeChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        active
          ? 'bg-black text-white'
          : 'border border-black/10 bg-[#faf8f4] text-black/70 hover:bg-[#f1ede6]'
      }`}
    >
      {children}
    </button>
  );
}