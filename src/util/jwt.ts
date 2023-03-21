/**
 * JWT Token Decoder
 * - Enabled on Browser and Node
 */
export const jwtDecode = <T>(token: string): T | null => {
  try {
    const decodeToken = (base64Url: string, isServer: boolean) => {
      if (isServer) {
        return Buffer.from(base64Url, 'base64').toString();
      } else {
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        return decodeURIComponent(
          window
            .atob(base64)
            .split('')
            .map(function (c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join(''),
        );
      }
    };

    const isServer = typeof window === 'undefined';
    const jsonPayload = decodeToken(token.split('.')[1], isServer);

    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
};
