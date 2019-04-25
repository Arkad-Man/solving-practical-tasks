// функция anagram()

// const strToArray = (str) => str.toLowerCase().split('');

// const anagram = (str1, str2) => {
//     let string1 = strToArray(str1);
//     let string2 = strToArray(str2);
//     if(string1.length !== string2.length) return false;
//     for(let char of string1){
//         if(string2.indexOf(char) === -1) return false;
//     };
//     return true;
// }

// console.log(anagram('one', 'two'));
// console.log(anagram('sTar', 'RaTS'));
// console.log(anagram('finder', 'Friend'));
// console.log(anagram('Elbow', 'below'));
// console.log(anagram('CaT', 'AcT'));
// console.log(anagram('hello', 'hell'));

// ----------------------------------------------------------------

// const strToArray = (str) => str.toLowerCase().split('');

// const anagram = (str1, str2) => {
//     let string1 = strToArray(str1);
//     let string2 = strToArray(str2);
//     if(string1.length !== string2.length) return false;
//     next: for(let i = 0; i < string1.length; i++){
//             for(let j = 0; j < string2.length; j++){
//                 if(string1[i] === string2[j]) continue next;
//             };
//             return false;
//           };
//     return true;
// }

// console.log(anagram('one', 'two'));
// console.log(anagram('sTar', 'RaTS'));
// console.log(anagram('finder', 'Friend'));
// console.log(anagram('Elbow', 'below'));
// console.log(anagram('CaT', 'AcT'));
// console.log(anagram('hello', 'hell'));
