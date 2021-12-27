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
