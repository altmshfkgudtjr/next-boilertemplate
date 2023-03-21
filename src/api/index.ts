import axios from 'axios';
// types
import type { DefaultResponse } from 'axios';

/**
 * URL Replace
 * - next.config.js 프록시 참조
 *
 * @param {string} url
 * @returns {string} URL
 */
const replaceURL = url => {
  let targetURL = url;

  if (url.startsWith('/api/서버별칭/')) {
    targetURL = url.replace('/api/서버별칭/', `${process.env.NEXT_PUBLIC_API_SERVER}/`);
  }
  return targetURL;
};

/**
 * Request 성공 handler
 */
const requestSuccessHandler = config => {
  if (process.env.NODE_ENV === 'production') {
    Object.assign(config, { url: replaceURL(config.url) });
  }

  /* Next.js ServerSide */
  if (typeof window === 'undefined') {
    Object.assign(config, { url: replaceURL(config.url) });
    return config;
  }

  return config;
};

/**
 * Request 실패 handler
 */
const requestErrorHandler = err => {
  return Promise.reject(err);
};

/**
 * Response 성공 handler
 */
const responseSuccessHandler = res => {
  const response: DefaultResponse = res.data;

  if (200 <= res.status && res.status < 300) {
    return response;
  } else {
    return responseErrorHandler(res);
  }
};

/**
 * Response 실패 handler
 * @param err 에러 객체
 */
const responseErrorHandler = err => {
  return Promise.reject(err);
};

/**
 * Axios 객체
 */
const request = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

/**
 * Axios Request 미들웨어
 */
request.interceptors.request.use(
  config => requestSuccessHandler(config),
  err => requestErrorHandler(err),
);

/**
 * Axios Response 미들웨어
 */
request.interceptors.response.use(
  res => responseSuccessHandler(res) as any,
  err => responseErrorHandler(err),
);

export default request;
