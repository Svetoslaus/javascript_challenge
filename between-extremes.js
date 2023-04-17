function betweenExtremes(arr) {
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);
  let diff = maxNum - minNum;
  return diff;
}
