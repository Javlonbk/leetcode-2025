// 4. How do you find the middle element of a singly linked list in one pass?

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

// two-pointer technique
function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }

    return slow
}

console.log(findMiddle(node1))