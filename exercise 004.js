// Exercice 4
// https://projecteuler.net/problem=4

// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

let number = 1

function testPalindrome(n) {
    n = n + "";
    return n.split("").reverse().join("");
}

let numPalendrome = 1;

for (let i = 1; i < 1000; i++) {
    for (let j = 1; j < 1000; j++) {
        number = i * j;
        if (number == testPalindrome(number)) {
            if (numPalendrome < number) {
                numPalendrome = number
            }
        } else { }
    }
}

console.log("We Have a Champion! " + numPalendrome)
