function plusOne(digits) {
    // Start from the last digit and process each digit
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            // If the current digit is less than 9, just add 1 and return the array
            digits[i]++;
            return digits;
        }
        // If the current digit is 9, it becomes 0 and we need to carry over
        digits[i] = 0;
    }
    
    // If all digits were 9, we need to add a new digit at the start
    return [1, ...digits];
}

// Example usage
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])); // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]