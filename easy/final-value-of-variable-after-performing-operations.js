// V1:
// function finalValueAfterOperations(operations) {
//     let result = 0;

//     for (const op of operations) {
//         if (op.includes("++")) {
//             result++;
//         } else {
//             result--;
//         }
//     }

//     return result;
// }

// V2:
function finalValueAfterOperations(operations) {
    return operations.reduce((acc, op) => op.includes("++") ? acc + 1 : acc - 1, 0);
}


console.log(finalValueAfterOperations( ["--X","X++","X++"]))

// O(n), O(1)