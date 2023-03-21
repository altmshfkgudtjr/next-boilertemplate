/** 테마 분류 타입 */
export type Theme = 'light' | 'dark';

/** 색상표 타입 */
export type ThemeVariables = {
  surface: string;

  // Primary
  primary_050: string;
  primary_100: string;
  primary_200: string;
  primary_300: string;
  primary_400: string;
  primary_500: string;
  primary_600: string;
  primary_700: string;
  primary_800: string;
  primary_900: string;

  // Secondary
  secondary_050: string;
  secondary_100: string;
  secondary_200: string;
  secondary_300: string;
  secondary_400: string;
  secondary_500: string;
  secondary_600: string;
  secondary_700: string;
  secondary_800: string;
  secondary_900: string;

  // Grayscale
  grayscale_050: string;
  grayscale_100: string;
  grayscale_200: string;
  grayscale_300: string;
  grayscale_400: string;
  grayscale_500: string;
  grayscale_600: string;
  grayscale_700: string;
  grayscale_800: string;
  grayscale_900: string;

  // Suport
  purple: string;
  green: string;

  // Text
  text: {
    primary_high: string;
    primary_medium: string;
    primary_disabled: string;

    surface_high: string;
    surface_medium: string;
    surface_disabled: string;
  };

  // Outline
  outline: {
    surface: string;
  };

  // Condition
  condition: {
    success: string;
    warning: string;
    danger: string;
    done: string;
  };

  // Price
  price: {
    up: string;
    down: string;
    nc: string;
  };

  // Gradient
  gradient: {
    primary: string;
    secondary: string;
    secondary2: string;
    gray: string;
    lightGray: string;
    twoTone: string;
  };
};

/** 테마 색상표 타입 */
export type ThemePalette = Record<Theme, ThemeVariables>;
