// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// this solution uses an array helper the reduce function. this will most likely impress the interviewer
function reverse(str) {
    // debugger
    return str.split('').reduce((rev, char) => rev = char + rev, '')
}

// using a for of loop
// function reverse(str) {
//     let reversed = ''
//     for (let char of str) {
//         reversed = char + reversed
//     }
//     return reversed
// }

// simple solution but interviewers will probably ask for something that doesn't use .reverse()
// function reverse(str) {
//     return str.split('').reverse().join('')
// }

reverse('hello')
module.exports = reverse;
