// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    var mainA = [];
    var index = 0;
    
    while(index < array.length) {
        mainA.push(array.slice(index,index + size)); 
        index = index + size;
    }   
    return mainA;
}

module.exports = chunk;

// function chunk(array, size) {
//     var mainA = [];
//     var chunk = [];

//     for (const ele of array) {
//         if(chunk.length === size) {
//             mainA.push(chunk);
//             chunk = [];
//             chunk.push(ele);
//         } else {
//             chunk.push(ele);           
//         }
//     }
//     mainA.push(chunk);
//     console.log(mainA);
//     return mainA;
// }