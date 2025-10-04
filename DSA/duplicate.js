// function countDuplicates(arr){
//     const map = {};
//     const duplicates = [];

//     for (let char of arr){
//         map[char] = (map[char] || 0) + 1;
//     }

//     for (let key in map){
//         if (map[key] > 1){
//             duplicates.push(key)
//         }
//     }
//     return duplicates
// }


function countDuplicates(arr){
    const obj = {};
    const duplicates = [];

    for (char of arr){
        obj[char] = (obj[char] || 0) +1;
    }
    for (char in obj){
        if(obj[char] > 1){
            duplicates.push(char)
        }
    }

    return duplicates
}

console.log(countDuplicates(['x', 'y', 'x', 'z', 'y', 'x'])); // ['x', 'y']
