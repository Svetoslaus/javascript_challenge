function isAlphanumeric(input) {
  // Check if the input is not an empty string
  if (input.length === 0) {
    return false; // Empty string is not valid
  }
  
  // Regular expression pattern to match alphanumeric characters
  var pattern = /^[a-zA-Z0-9]+$/;
  
  // Check if the input matches the pattern
  if (pattern.test(input)) {
    return true; // Input is alphanumeric
  } else {
    return false; // Input is not alphanumeric
  }
}

// Example usage
var userInput = "Hello123";
console.log(isAlphanumeric(userInput)); // Output: true

userInput = "Hello World";
console.log(isAlphanumeric(userInput)); // Output: false

userInput = "123_abc";
console.log(isAlphanumeric(userInput)); // Output: false

userInput = "";
console.log(isAlphanumeric(userInput)); // Output: false (empty string is not valid)
