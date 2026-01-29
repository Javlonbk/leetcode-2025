function countStudents(students, sandwiches) {
    let count0 = 0;
    let count1 = 0;

    for (let s of students){
        s === 0 ? count0++ : count1++;
    }

    for (let sw of sandwiches) {
        if (sw == 0 && count0 > 0) {
            count0--;
        } else if (sw === 1 && count1 > 0) {
            count1--;
        } else {
            break;
        }
    }

    return count0 + count1;
}

console.log(countStudents(students = [1,1,0,0], sandwiches = [0,1,0,1]))
console.log(countStudents(students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]))

// O(n)
// O(1)
