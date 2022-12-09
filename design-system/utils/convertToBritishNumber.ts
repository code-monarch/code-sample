// Put this in a utils function
export const convertToBritishNumber = (x: number | string) => {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
