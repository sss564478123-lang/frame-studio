'use client';

import React from 'react';
import { AbsoluteFill, interpolate, Sequence, useCurrentFrame } from 'remotion';
import type { SceneItem } from '@/lib/parse';

export type PreviewMode = 'shorts' | 'video' | 'mv';

export function VideoPreview({
  mode,
  title,
  scenes,
}: {
  mode: PreviewMode;
  title: string;
  scenes: SceneItem[];
}) {
  return (
    <AbsoluteFill
      style={{
        background:
          mode === 'shorts'
            ? 'linear-gradient(to bottom, #27272a, #09090b)'
            : mode === 'video'
            ? 'linear-gradient(to right, #18181b, #09090b)'
            : 'linear-gradient(to bottom right, #1f1f23, #000000)',
        color: 'white',
        fontFamily: 'sans-serif',
      }}
    >
      {scenes.map((scene, index) => {
        const start = index * 75;
        const duration = 75;

        return (
          <Sequence key={scene.id} from={start} durationInFrames={duration}>
            <SceneCard
              mode={mode}
              title={title}
              caption={scene.caption}
              index={index}
            />
          </Sequence>
        );
      })}
    </AbsoluteFill>
  );
}

function SceneCard({
  mode,
  title,
  caption,
  index,
}: {
  mode: PreviewMode;
  title: string;
  caption: string;
  index: number;
}) {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 8, 62, 74], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const scale = interpolate(frame, [0, 74], [1, 1.06], {
    extrapolateRight: 'clamp',
  });

  const translateY = interpolate(frame, [0, 14], [30, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: 'space-between',
        padding: mode === 'shorts' ? 36 : 44,
        opacity,
        transform: `scale(${scale})`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div
          style={{
            fontSize: 16,
            opacity: 0.75,
            border: '1px solid rgba(255,255,255,0.12)',
            background: 'rgba(0,0,0,0.22)',
            padding: '8px 12px',
            borderRadius: 999,
          }}
        >
          {mode === 'shorts' ? '9:16 Shorts' : mode === 'video' ? '16:9 Video' : 'Music Video'}
        </div>

        <div style={{ fontSize: 14, opacity: 0.45 }}>Scene {index + 1}</div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <div style={{ fontSize: mode === 'shorts' ? 22 : 20, opacity: 0.72 }}>{title}</div>

        <div
          style={{
            fontSize: mode === 'shorts' ? 52 : 42,
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: -1,
            textShadow: '0 10px 30px rgba(0,0,0,0.45)',
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(0,0,0,0.24)',
            backdropFilter: 'blur(6px)',
            padding: '20px 22px',
            borderRadius: 24,
          }}
        >
          {caption}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div
          style={{
            height: 8,
            width: '100%',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: 999,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${Math.min(((frame + 1) / 75) * 100, 100)}%`,
              background: 'white',
              borderRadius: 999,
            }}
          />
        </div>

        <div style={{ fontSize: 14, opacity: 0.45 }}>
          실제 영상 프리뷰 느낌
        </div>
      </div>
    </AbsoluteFill>
  );
}