// V1
// function isValid(s) {
//     let stack = [];

//     for (let ch of s) {
//         if (ch === "(" || ch === "{" || ch === "[") {
//             stack.push(ch);
//         } else if(stack[stack.length - 1] === "(" && ch == ")"){
//             stack.pop();
//         }else if(stack[stack.length - 1] === "{" && ch == "}"){
//             stack.pop();
//         }else if(stack[stack.length - 1] === "[" && ch == "]"){
//             stack.pop();
//         } else {
//             return false;
//         }
//     }
    
//     return stack.length == 0;
// }

// V2


function isValid(s) {
    const stack = [];
    const map = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (const ch of s) {
        if (ch in map) {
            if (stack.pop() !== map[ch]) {
                return false;
            }
        } else {
            stack.push(ch);
        }
    }

    return stack
}


console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))

// O(n)
// O(n)