function maxSequence(arr) {
  let max = 0;
  let currentMax = 0;
  arr.forEach(num => {
    currentMax += num;
    if (currentMax < 0) {
      currentMax = 0;
    }
    if (currentMax > max) {
      max = currentMax;
    }
  });
  return max;
}
