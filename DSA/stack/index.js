// stack:  push, pop, top and empty
class MyStack {
    constructor() {
    }
    arr = [];

    push(x) {
        this.arr.push(x);
    }

    pop() {
        return this.arr.pop();
    }

    top() {
        return this.arr[this.arr.length - 1];
    }

    empty() {
        return this.arr.length === 0;
    }
}

let obj = new MyStack();
obj.push(1);
obj.push(2);
console.log(obj.top());
// obj.empty();
// obj.pop();

console.log(obj);

// push(x): O(1) - adds to end of array
// pop(): O(1) - removes from end of array
// top(): O(1) - accesses last element
// empty(): O(1) - checks length