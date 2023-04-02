function descendingOrder(n) {
  
  let numString = n.toString();
  
  let numArray = numString.split('');

  numArray.sort((a, b) => b - a);
  
  let result = numArray.join('');
  
  return Number(result);
}
