// 2. Given an array with 100 elements (numbers from 0 to 99). One element has been removed from the array. How would you find the removed element? How would you solve this if the array is sorted, or the array is not sorted?

let arr = Array.from({length: 100}, (_, i) => i);
arr.splice(10,1)

// Sorted
// function findMissingSorted(arr){
//     let low = 0;
//     let high = arr.length -1 
    
//     while (low <= high){
//         let mid = Math.floor((high + low)/2);

//         if (arr[mid] === mid){
//             low = mid + 1
//         }else{
//             high = mid - 1
//         }
//     }
//     return low
// }


function findMissingSorted(arr){
    let low = 0; 
    let high = arr.length - 1; //99

    while (low <= high){
        let mid = Math.floor((high + low)/2);
        if (arr[mid] === mid){
            low = mid+1
        } else{
            high = mid - 1
        }
    }
    return low
}

console.log(findMissingSorted(arr))
// console.log(arr)

// Not sorted
// function findMissing(arr){
//     const n = 100;
//     const expectedSum = n*(n-1)/2;
//     const sum = arr.reduce((acc, curr) => acc + curr, 0);
//     return expectedSum - sum
// }

// console.log(findMissing(arr))


// const arr = [1,2,3,4,5];
// const index = Math.floor(arr.length/2);

// arr.splice(index, 1);

// console.log(arr)