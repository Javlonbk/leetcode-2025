function evalRPN(tokens) {
    let stack = [];
    let operators = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
    }

    for (let token of tokens) {
        if (token in operators) {
            let a = stack.pop();
            let b = stack.pop();
            let operator = operators[token];
            stack.push(Math.trunc(operator(b, a)));
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
}

console.log(evalRPN(tokens = ["2","1","+","3","*"]));

// time: O(n)
// space: O(n)