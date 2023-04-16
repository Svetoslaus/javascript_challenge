function towerBuilder(nFloors) {
  let output = [];
  
  for (let i = 0; i < nFloors; i++) {
    let numStars = (i * 2) + 1;
    let numSpaces = nFloors - 1 - i;
    let floor = " ".repeat(numSpaces) + "*".repeat(numStars) + " ".repeat(numSpaces);
    output.push(floor);
  }
  return output;
}
