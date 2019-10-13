// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, col = 0, str = '') {
    let mid = Math.floor(((2 * n - 1) / 2));
    let lm = ((n * 2) - 1);
    
    if (n === row) {
        return;
    }

    if (str.length === lm) {
        console.log(str);
        return pyramid(n, row + 1);
    }

    if (mid - row <= col && mid + row >= col) {
        str += '#';
    } else {
        str += ' ';
    }

    pyramid(n, row, col + 1, str);
}

module.exports = pyramid;

// function pyramid(n) {
//     let mid = Math.floor(((2*n - 1)/2));    
//     for (let i = 0; i < n; i++) {
//         var str = '';
//         for (let j = 0; j < ((n*2) - 1); j++) {         
//             if(mid - i <= j && mid + i>=j) {
//                 str += '#';
//             } else {
//                 str += ' ';
//             }            
//         }
//         console.log(str);
//     }
// }