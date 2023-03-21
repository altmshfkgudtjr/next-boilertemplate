/**
 * 상태코드 에러 핸들러
 * @code 400
 */
export const handle400 = () => {};

/**
 * 상태코드 에러 핸들러
 * @code 401
 */
export const handle401 = () => {};

/**
 * 상태코드 에러 핸들러
 * @code 404
 */
export const handle404 = () => {};

const Error_4XX = {
  400: {
    default: handle400,
  },
  401: {
    default: handle401,
  },
  404: {
    default: handle404,
  },
};

export default Error_4XX;
