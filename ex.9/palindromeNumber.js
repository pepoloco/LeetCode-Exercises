// Given an integer x, return true if x is apalindrome, and false otherwise.
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

function palindrome(num) {
    const numToString = num.toString();
    const reversed = numToString.split('').reverse().join('');
    const isPalindrome = numToString === reversed;
    isPalindrome ? 'Is palindrome' : 'Is not palindrome';
    return isPalindrome

}
palindrome(101)