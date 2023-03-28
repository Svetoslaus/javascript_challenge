function duplicateCount(str) {
  
  str = str.toLowerCase();

  
  const charCount = {};

  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    
    if (char >= 'a' && char <= 'z' || char >= 0 && char <= 9) {

    
      if (charCount[char]) {
        charCount[char] += 1;
      } 
      
    
      else {
        charCount[char] = 1;
      }
    }
  }

  // loop over object and count duplicates
  let duplicateCount = 0;
  for (let key in charCount) {
    if (charCount[key] > 1) {
      duplicateCount += 1;
    }
  }

  return duplicateCount;
}
