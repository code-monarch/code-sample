export const convertTime = (x: number) => {
  let date = new Date(x);
  return date.toLocaleTimeString("en-US");
};
