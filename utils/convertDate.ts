// Converts Milliseconds time to human readable time
export const convertDate = (x: number | string) => {
  const options:Intl.DateTimeFormatOptions = {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = new Date(x);
  return date.toLocaleDateString("en-GB", options);
};
