// V1- O(n^2);
// function bubbleSort(arr){
//     let n = arr.length

//     for (let i = 0; i < n - 1; i++) {

//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }        
//     }
//     return arr;
// }


// V2 O(n)
function bubbleSort(arr) {
    let n = arr.length
    let swapped;

    for (let i = 0; i < n - 1; i++) {
        swapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if(!swapped) break;
    }
    return arr;
}





let result = bubbleSort([1, 2, 3])





console.log(result);


