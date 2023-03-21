// utils
import { jwtDecode } from 'util/jwt';
import * as storageUtils from 'util/helpers/storage';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'util/constants/token';

class Auth {
  /** Storage 타입 호출 함수 */
  static getStorageType = () => (storageUtils.getLocalStorage(ACCESS_TOKEN) ? 'Local' : 'Session');

  /** Storage에 저장된 토큰 호출 함수 */
  static getToken = () => {
    const accessToken =
      Auth.getStorageType() === 'Local'
        ? storageUtils.getLocalStorage<string>(ACCESS_TOKEN)
        : storageUtils.getSessionStorage<string>(ACCESS_TOKEN);
    const refreshToken =
      Auth.getStorageType() === 'Local'
        ? storageUtils.getLocalStorage<string>(REFRESH_TOKEN)
        : storageUtils.getSessionStorage<string>(REFRESH_TOKEN);

    return { accessToken, refreshToken };
  };

  static saveTokenToLocal = (accessToken: string, refreshToken: string) => {
    storageUtils.saveLocalStorage(ACCESS_TOKEN, accessToken);
    storageUtils.saveLocalStorage(REFRESH_TOKEN, refreshToken);
  };

  static saveTokenToSession = (accessToken: string, refreshToken: string) => {
    storageUtils.saveSessionStorage(ACCESS_TOKEN, accessToken);
    storageUtils.saveSessionStorage(REFRESH_TOKEN, refreshToken);
  };

  /** Storage에 토큰 저장 함수 */
  static saveToken = (accessToken: string, refreshToken: string) => {
    if (Auth.getStorageType() === 'Local') {
      Auth.saveTokenToLocal(accessToken, refreshToken);
    } else {
      Auth.saveTokenToSession(accessToken, refreshToken);
    }
  };

  /** Storage에 토큰 제거 함수 */
  static removeToken = () => {
    if (Auth.getStorageType() === 'Local') {
      storageUtils.removeLocalStorage(ACCESS_TOKEN);
      storageUtils.removeLocalStorage(REFRESH_TOKEN);
    } else {
      storageUtils.removeSessionStorage(ACCESS_TOKEN);
      storageUtils.removeSessionStorage(REFRESH_TOKEN);
    }
  };

  /** JWT Access Token에서 정보 파싱 함수 */
  static getTokenInfo = () => {
    const { accessToken, refreshToken } = Auth.getToken();
    if (!accessToken || !refreshToken) {
      Auth.removeToken();
      return null;
    }

    const tokenInfo = jwtDecode<UserAccessToken>(accessToken);
    if (!tokenInfo) {
      return null;
    }

    return {
      accessToken,
      refreshToken,
      info: tokenInfo as UserAccessToken,
    };
  };
}

type UserAccessToken = {
  userId: string;
};

export default Auth;
