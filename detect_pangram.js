const isPangram = (str) => {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   const string = str.toLowerCase();
  
  
   for(let char of alphabet) {
     if (!string.includes(char)){
       return false;
     }
     }
   return true;
}
