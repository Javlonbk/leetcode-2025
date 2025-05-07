function subseXORSum(nums) {
    let sum = 0;

    function backtrack(index, currentXOR){
        if (index === nums.length) {
            sum += currentXOR
            return;
        }
       
        // Include nums[index]
        backtrack(index + 1, currentXOR ^ nums[index]); 

        // Exclude nums[index]
        backtrack(index + 1, currentXOR)
    }
    backtrack(0,0);
    return sum;
};

console.log(subseXORSum([5,1,6]))
