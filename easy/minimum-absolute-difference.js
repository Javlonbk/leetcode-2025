var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);

    const result = [];
    let minDiff = Infinity;

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];

        if (diff < minDiff) {
            minDiff = diff;
            result.length = 0; // clear previous pairs
            result.push([arr[i - 1], arr[i]]);
        } else if (diff === minDiff) {
            result.push([arr[i - 1], arr[i]]);
        }
    }

    return result;
};

// Time: O(n log n) (sorting dominates)
// Space: O(n) (result array)

console.log(minimumAbsDifference([4, 2, 1, 3]));