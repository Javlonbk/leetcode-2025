function binarySearch(arr, target){
   let low = 0;
   let high = arr.length - 1;

   while (low <= high){
    let mid = Math.floor((low + high)/2);

    if(arr[mid] === target){
        return mid
    }else if (arr[mid] < target){
        low = mid + 1
    }else{
        high = mid - 1
    }
   }
    return -1

}


const myArray = [5, 11, 12, 22, 25, 34, 64, 90]; // sorted!
const target = 64;

const index = binarySearch(myArray, target);
console.log(index)