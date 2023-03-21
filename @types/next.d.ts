import 'next/app';
// types
import type { AppProps } from 'next/app';
import type { Props as AuthorityProps } from 'hooks/useAuthWall';

declare module 'next/app' {
  /** Next.js App Props 커스텀 타입 */
  export interface CustomAppProps extends Omit<AppProps, 'Component'> {
    Component: AppProps['Component'] & {
      getLayout: Function;
    };
  }
}
