/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Example 1:

Input: s = "()"
Output: true
*/

let isValid = function (s) {
    let splittedInput = s.split();
    console.log(splittedInput.length);
    while (splittedInput.length >= 0) {


        splittedInput.length--;
    }


}
const input = '()';
let checkFunc = isValid(input);