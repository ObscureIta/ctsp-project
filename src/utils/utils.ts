export type Dir = -1 | 0 | 1;

export function computeDir(prev: number, next: number, len: number): Dir {
  if (prev === next || prev < 0 || next < 0 || len <= 0) return 0;
  if (next > prev) return -1;
  if (next < prev) return 1;
  return 0;
}

export function clamp(v: number, min = 0, max = Number.MAX_SAFE_INTEGER) {
  return Math.min(max, Math.max(min, Math.trunc(v)));
}
