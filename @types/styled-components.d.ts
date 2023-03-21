import 'styled-components';
// types
import type { ThemeVariables } from 'style/types/Palette';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeVariables {}
}
