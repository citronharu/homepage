const MAX_SCALE = 1.6;
const MIN_SCALE = 1;
const INFLUENCE_RADIUS = 120;

export function getDockIconScale(
  mouseX: number,
  iconCenterX: number
): number {
  const distance = Math.abs(mouseX - iconCenterX);
  if (distance >= INFLUENCE_RADIUS) return MIN_SCALE;

  const t = 1 - distance / INFLUENCE_RADIUS;
  const eased = t * t * (3 - 2 * t);
  return MIN_SCALE + (MAX_SCALE - MIN_SCALE) * eased;
}
