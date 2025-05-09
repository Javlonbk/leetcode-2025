// function transformArray(nums) {
//     const newNums = [];
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] % 2 === 0){
//             newNums[i] = 0;
//         } else {
//             newNums[i] = 1;
//         }
//     }

//     return newNums.sort()
// };

// time: O(n log n);  space: 0(n);


// Opimized version without sort
function transformArray(nums) {
    let zeroCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            zeroCount++;
        }
    }
    
    const result = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        result[i] = i < zeroCount ? 0 : 1;
    }
    
    return result;
}

// time: O(n);  space: 0(n);

console.log(transformArray([4,3,2,1]))