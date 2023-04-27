function toCamelCase(str){
  let arr = str.split(/[-_]/);
  let newStr = arr[0];
  for (let i = 1; i < arr.length; i++){
    newStr += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return newStr;
}
