function firstNonRepeatingLetter(s) {
  // Convert the string to lowercase to ignore case sensitivity
  const lowercaseStr = s.toLowerCase();

  // Iterate through each character in the string
  for (let i = 0; i < lowercaseStr.length; i++) {
    const currentChar = lowercaseStr[i];
    // Check if the current character is repeated anywhere in the string
    if (lowercaseStr.indexOf(currentChar) === lowercaseStr.lastIndexOf(currentChar)) {
      // Return the corresponding character from the original string with correct case
      return s[i];
    }
  }

  // Return an empty string if all characters are repeating
  return "";
}
