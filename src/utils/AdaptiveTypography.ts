export function AdaptiveTypography(
  minFontSize: number,
  maxFontSize: number,
  minScreenWidth: number = 320,
  maxScreenWidth: number = 1320
): string {
  const slope = (maxFontSize - minFontSize) / (maxScreenWidth - minScreenWidth)
  const viewportBased = `${slope * 100}vw`
  const intercept = minFontSize - slope * minScreenWidth
  return `clamp(${minFontSize}px, ${viewportBased} + ${intercept}px, ${maxFontSize}px)`
}
