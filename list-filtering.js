function filter_list(l) {
   var nonNegativint = []
  for(var i = 0; i < l.length; i++){
  if(Number.isInteger(l[i])){
  nonNegativint.push(l[i])
    } 
  }
  return nonNegativint
}
