// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {

//     // Notes: 1) Can make helper function and get Char Map
//             //2) Use Object.Keys(charmap).length to get length
//             //3) If length are not matched then return false
    
//     let charsA = {};
//     let charsB = {};
//     const s1 = stringA.replace("/[^\w]/g", "").toLowerCase();
//     const s2 = stringB.replace("/[^\w]/g", "").toLowerCase();
//     const mChars = s1.length > s2.length ? charsA : charsB;
//     const cChars = s1.length > s2.length ? charsB : charsA;

//     for (const char of s1) {
//         !charsA[char] ? charsA[char] = 1 : charsA[char]++;
//     }

//     for (const char of s2) {
//         !charsB[char] ? charsB[char] = 1 : charsB[char]++;
//     }

//     for (const key in mChars) {
//         if (!mChars[key] || !cChars[key] || mChars[key] != cChars[key]) {
//            return false;
//         }
//     }

//     return true;
// }

module.exports = anagrams;


function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace("/[^\w]/g","").toLowerCase().split('').sort().join('');
}