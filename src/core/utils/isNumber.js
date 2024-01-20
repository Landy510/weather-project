export const isNumber = (num) => {
  return typeof num === 'number' && isFinite(num);
}