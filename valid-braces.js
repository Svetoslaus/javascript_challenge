function validBraces(braces){
  let stack = [];
  let pairs = { '{':'}', '[':']', '(':')' };
  
  for (let i = 0; i < braces.length; i++) {
    let char = braces[i];
    
    if (pairs[char]) {
      stack.push(char);
    } else {
      if (char !== pairs[stack.pop()]) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}
