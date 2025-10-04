
const myArray = [64, 34, 25, 12, 22, 11, 90, 5];

function insertionSort(arr){
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let insertIndex = i;
        const currentValue = arr[i];
        
        for (let j = i - 1; j >= 0; j--) {
            if(arr[j] > currentValue){
                arr[j + 1] =  arr[j];
                insertIndex = j
            }else{
                break
            }
        }

        arr[insertIndex] = currentValue;
    }
    return arr;

}


console.log(insertionSort(myArray));
