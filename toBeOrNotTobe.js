// Write a function expect that helps developers test their code.It should take in any value val and return an object with the following two functions.

//     toBe(val) accepts another value and returns true if the two values === each other.If they are not equal, it should throw an error "Not Equal".
//         notToBe(val) accepts another value and returns true if the two values !== each other.If they are equal, it should throw an error "Equal".
let expected = function (val) {

    return {
        toBe: function (value1) {
            if (val === value1) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function (value2) {
            if (val !== value2) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };

}
