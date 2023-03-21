/** 미디어쿼리 Value */
export const mediaValue = {
  xsmall: 300,
  small: 360,
  medium: 768,
  large: 1168,

  article: 744,
  marketList: 480,
};

/** 미디어쿼리 프리셋 */
export const mediaQuery = {
  small: `@media (min-width: ${mediaValue.small}px)`,
  medium: `@media (min-width: ${mediaValue.medium}px)`,
  large: `@media (min-width: ${mediaValue.large}px)`,

  article: `@media (min-width: ${mediaValue.article}px)`,
  marketList: `@media (min-width: ${mediaValue.marketList}px)`,
  custom: value => `@media (min-width: ${value}px)`,
};

/** 디바이스쿼리 프리셋 */
export const deviceQuery = {
  touch: `@media (hover: none) and (pointer: coarse)`,
  cursor: `@media (hover: hover) and (pointer: fine)`,
};
