// Функция palindrome().

// const palindrome = (str) => {
//     str = str.trim().toLowerCase();
//     let res = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         res += str[i];
//     };
//     return (res === str);
// };

// console.log(palindrome('HelLo') === true);
// console.log(palindrome('racecar') === true);


// ---------------------------------------------------------

// const palindrome = (str) => {
//     return str === str.trim()
//                       .toLowerCase()
//                       .split('')
//                       .reverse()
//                       .join('');
// };

// console.log(palindrome('HelLo') === true);
// console.log(palindrome('racecar') === true);
