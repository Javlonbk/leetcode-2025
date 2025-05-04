// V1: Using Array method in JS
// function getConcatenation(nums){
//     const ans = [];
//     return ans.concat(nums, nums)
// }
// O(n), O(n)

// V2: Using loop
// function getConcatenation(nums){
//     const ans = [];
//     for (let n of nums){
//         ans.push(n)
//     }
//     for (let n of nums){
//         ans.push(n)
//     }

//     return ans
// }
// O(n), O(n)

// V3: Using spread operator
function getConcatenation(nums){
    const ans = [...nums, ...nums];

    return ans
}
// O(n), O(n)


console.log(getConcatenation(nums = [1,2,1]))

