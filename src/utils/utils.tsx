import decode from 'jwt-decode' // import dependency

export const filterArrayObjectByValue = (
  value: string,
  arrayObj: Array<any>
) => {
  return value === ""
    ? arrayObj
    : arrayObj.filter((item) => {
        return JSON.stringify(item).toLowerCase().includes(value.toLowerCase());
      });
};

export const getUserIdFromToken = (state: any) => {
  const accessToken = state && state.token ? state.token : '';
  const nearToken = accessToken && decode(accessToken);
  return nearToken.near_api.user_info.user_id;
}