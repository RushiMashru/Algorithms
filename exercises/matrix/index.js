// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,  2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push([]);      
    }

    var counter = 1;
    var startRow = 0;
    var endRow = n - 1;
    var startCol = 0;
    var endCol = n - 1;



    while ((startCol <= endCol) && (startRow <= endRow)) {

        // For Top row
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }

        startRow++;

        // For Last Col
        for (let i = startRow; i <= endRow; i++) {
            result[i][endCol] = counter;
            counter++;
        }

        endCol--;

        // For Bottom row
        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;

        // For Start row        
        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;
    }

    return result;
}

module.exports = matrix;
