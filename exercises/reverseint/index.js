// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var rev = []
    var sn = n.toString();
    var ans;
    for (let index = sn.length; index >= 0; index--) {
        if (sn.length == 1 && sn[index - 1] == 0) {
            rev.push(sn[index - 1]);
            ans = 0;
            break;
        }
        if ((Math.sign(n) === -1) && index == 0){
            ans = parseInt(rev.join(''));
            ans = (ans - (2 * ans));
            break;          
        }
        rev.push(sn[index - 1]);
        ans = parseInt(rev.join(''));
    }

    return parseInt(ans);
}

module.exports = reverseInt;
