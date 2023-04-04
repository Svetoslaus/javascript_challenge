function divisors(n) {
  let result = [];
  for (let i = 2; i < n; i++) {
     if(n % i === 0) {
       result.push(i);
     }
  }
  if(result.length === 0){
    return `${n} is prime`;
  }
  return result;
};
