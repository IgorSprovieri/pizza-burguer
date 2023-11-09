export const wait = (seconds: number) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return res(true);
    }, seconds * 1000);
  });
};
