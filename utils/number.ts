export const getRandomNumber = (max: number, min = 1) => {
  return Math.floor(Math.random() * max) + min;
};
