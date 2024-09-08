export const getRandNums = (length, min, max) => {
  // return Array.from({ length }, () => Math.floor(Math.random() * 100))
  return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min)
}