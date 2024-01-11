/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
Example 1:

Input: s = "()"
Output: true
*/

function isValid(s) {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (let char of s) {
        if (map[char]) {
            // If it's an opening bracket, push to stack
            stack.push(char);
        } else {
            // Check if the stack is not empty and the char is the closing bracket of the top element in stack
            if (stack.length === 0 || map[stack.pop()] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const input = '()';
let checkFunc = isValid(input);
console.log(checkFunc); // Output: true
