

function typist(s) {
    let capsLockOn = false;
    let taps = 0;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (char === char.toUpperCase()) { // If the character is uppercase
            if (!capsLockOn) {
                taps++; // Toggle Caps Lock and count as a tap
                capsLockOn = true;
            }
        } else { // If the character is lowercase
            if (capsLockOn) {
                taps++; // Toggle Caps Lock and count as a tap
                capsLockOn = false;
            }
        }
        taps++; // Count the current character as a tap
    }

    return taps;
}

// Test cases
console.log(typist("a"));    // Output: 1
console.log(typist("aa"));   // Output: 2
console.log(typist("A"));    // Output: 2
console.log(typist("Aa"));   // Output: 4
