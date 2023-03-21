// types
import { ThemeVariables } from 'style/types/Palette';

/** 라이트 테마 색상표 */
const lightTheme: ThemeVariables = {
  surface: '#ffffff',

  // Primary
  primary_050: '#EBF7FF',
  primary_100: '#D0ECFF',
  primary_200: '#90D7FF',
  primary_300: '#30A8FF',
  primary_400: '#0C88FA',
  primary_500: '#2948F2',
  primary_600: '#162EB1',
  primary_700: '#112176',
  primary_800: '#0C1B51',
  primary_900: '#051137',

  // Secondary
  secondary_050: '#FAF8F6',
  secondary_100: '#FDF8EB',
  secondary_200: '#FFF2D4',
  secondary_300: '#F9E9C5',
  secondary_400: '#FAE1A9',
  secondary_500: '#FFD470',
  secondary_600: '#FBAB61',
  secondary_700: '#FF7245',
  secondary_800: '#AA4129',
  secondary_900: '#603228',

  // Grayscale
  grayscale_050: '#F6F6F6',
  grayscale_100: '#F0EEEE',
  grayscale_200: '#DEDEDE',
  grayscale_300: '#CACACA',
  grayscale_400: '#B9B9B9',
  grayscale_500: '#969696',
  grayscale_600: '#707070',
  grayscale_700: '#5B5B5B',
  grayscale_800: '#3D3D3D',
  grayscale_900: '#252525',

  // Suport
  purple: '#972DEB',
  green: '#14E481',

  // Text
  text: {
    primary_high: 'rgba(255,255,255,1)',
    primary_medium: 'rgba(255,255,255,.74)',
    primary_disabled: 'rgba(255,255,255,.38)',

    surface_high: 'rgba(0,0,0,.87)',
    surface_medium: 'rgba(0,0,0,.6)',
    surface_disabled: 'rgba(0,0,0,.38)',
  },

  // Outline
  outline: {
    surface: 'rgba(0,0,0,.12)',
  },

  // Condition
  condition: {
    success: '#00AB58',
    warning: '#F8C30A',
    danger: '#FF1F1F',
    done: '#9FA6AE',
  },

  // Price
  price: {
    up: '#F03944',
    down: '#2267ED',
    nc: '#7A7A7A',
  },

  // Gradient
  gradient: {
    primary: 'linear-gradient(180deg, #30A8FF 0%, #90D7FF 100%)',
    secondary: 'linear-gradient(180deg, #FFD070 0%, #FFF2D4 100%)',
    secondary2: 'linear-gradient(180deg, #FF7245 0%, #FFD070 100%)',
    gray: 'linear-gradient(180deg, #969696 0%, #F0EEEE 100%)',
    lightGray: 'linear-gradient(90deg, #DEDEDE 0%, #F7F7F7 100%)',
    twoTone:
      'linear-gradient(282.67deg, rgba(255, 242, 212, 0.2) 0.61%, #EBF7FF 47.11%, rgba(208, 236, 255, 0.2) 98.27%)',
  },
};

export default lightTheme;
