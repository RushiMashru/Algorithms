// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var  rev = [];
    for (let index = str.length; index >= 0; index--) {
        rev.push(str[index]); 
    }    
    return rev.join('');
}

module.exports = reverse;
