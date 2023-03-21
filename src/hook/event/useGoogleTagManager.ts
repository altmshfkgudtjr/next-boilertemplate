import { useRouter } from 'next/router';
import { useLayoutEffect, useEffect, useRef } from 'react';
// util
import Auth from 'util/auth';

/**
 * 구글 태그매니저 페이지 변경을 위한 Hook
 */
const useGoogleTagManager = () => {
  const router = useRouter();

  /**
   * GTM을 위한 페이지 변경 이벤트
   * -
   * Next.js는 초기 1회를 제외하고는 Client에서 페이지 변경이 일어나, GTM이 페이지변경을 알아채지 못합니다.
   * 그러므로, 따로 이벤트를 두어서 GTM이 페이지 변경을 알아채게 합니다.
   */
  const onPageChangeEvent = url => {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', onPageChangeEvent);
    return () => {
      router.events.off('routeChangeComplete', onPageChangeEvent);
    };
  }, [router.events]);
};

/**
 * 로그인 유저 Tracking Hook
 */
export const useUserIdTracking = () => {
  const once = useRef(false);

  useLayoutEffect(() => {
    if (once.current) {
      return;
    } else {
      once.current = true;
    }

    const isDev = process.env.NODE_ENV === 'development';
    const data = Auth.getTokenInfo();
    if (!data?.accessToken || !data?.info) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    if (data.info.userId) {
      const tempUserId = cyrb128(data.info.userId).join('');

      window.dataLayer.push({
        user_id: isDev ? 'developer' : tempUserId,
        crm_id: isDev ? 'developer' : data.info.userId,
      });
    }
  }, []);
};

/** 임시 유저 랜덤 함수 */
function cyrb128(str) {
  let h1 = 1779033703,
    h2 = 3144134277,
    h3 = 1013904242,
    h4 = 2773480762;
  for (let i = 0, k; i < str.length; i++) {
    k = str.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
  h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
  h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
  return [(h1 ^ h2 ^ h3 ^ h4) >>> 0, (h2 ^ h1) >>> 0, (h3 ^ h1) >>> 0, (h4 ^ h1) >>> 0];
}

export default useGoogleTagManager;
