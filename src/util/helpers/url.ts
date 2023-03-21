/** URL Parameter 생성 */
export const getParameters = (obj: object) => {
  const params = new URLSearchParams();
  Object.keys(obj).forEach(key => {
    if (obj[key] === undefined) {
      return;
    } else if (Array.isArray(obj[key])) {
      for (let value of obj[key]) {
        params.append(key, value);
      }
    } else {
      params.append(key, obj[key]);
    }
  });
  return params;
};
