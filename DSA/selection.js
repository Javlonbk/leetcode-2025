function selectionSort(arr){ //2, 5, 1 / 1, 5, 2
    let n = arr.length;

    for (let i = 0; i < n-1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < 3; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr
}


const myArray = [2, 5, 1 ];
console.log("Sorted array:", selectionSort(myArray));
