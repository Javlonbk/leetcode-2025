// queue: push, pop, peek, empty
class MyQueue {
    constructor() {
    }
    arr = [];
    push(x) {
        this.arr.push(x);
    }

    pop() {
        return this.arr.shift();
    }

    peek() {
        return this.arr[0];
    }

    empty() {
        return this.arr.length === 0;
    }

}

 let obj = new MyQueue()
 obj.push(1);
 obj.push(2);
 obj.push(3);
 obj.push(4);

 console.log(obj);
 
 obj.pop();

 console.log(obj);
 console.log(obj.peek());
 console.log(obj.empty());

// push(x): O(1) - adds to end of array
// pop(): O(n) - shift() removes first element, shifts all remaining elements left
// peek(): O(1) - accesses first element
// empty(): O(1) - checks length
