export type SceneItem = {
  id: string;
  caption: string;
};

export function buildScenesFromText(captionsRaw: string): SceneItem[] {
  const captions = captionsRaw
    .split('\n')
    .map((v) => v.trim())
    .filter(Boolean);

  const safeCaptions = captions.length > 0 ? captions : ['첫 장면'];

  return safeCaptions.map((caption, index) => ({
    id: `scene-${index + 1}`,
    caption,
  }));
}