export const generateArray = (start, stop) =>
  Array.from({ length: stop - start + 1 }, (_, index) => start + index);
