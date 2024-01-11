/*14. Longest Common Prefix
Easy
16.2K
4.3K
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

let longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return ''
    }
    let longestPrefix = ''
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]
        if (!char) {
            return ''
        }
        if (strs.every(str => str[i] === char)) {
            longestPrefix += char
        } else {
            break;
        }
    }

    return longestPrefix
}
const input = ["flower", "flow", "flight"];
const result = longestCommonPrefix(input);
console.log(result); 
