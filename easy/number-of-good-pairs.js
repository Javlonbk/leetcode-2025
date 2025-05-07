// V1: Using inner loop
// function numIdenticalPairs(nums) {
//     let pairs = 0;

//     for (let i = 0; i < nums.length; i++) {

//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) pairs++;
//         }

//     }
//     return pairs
// }
// O(n^2)

// V2: Using Hash Map
function numIdenticalPairs(nums) {
    let count = new Map();
    let pairs = 0;

    for (let num of nums){
        if (count.has(num)){
            pairs += count.get(num);
            count.set(num,count.get(num) + 1)
        }else {
            count.set(num, 1)
        }
    }
    return pairs
}



console.log(numIdenticalPairs([1,2,3,1,1,3]));