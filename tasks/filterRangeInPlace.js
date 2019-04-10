// Функцию filterRangeInPlace(arr, a, b), которая получает массив
// с числами arr и удаляет из него все числа вне диапазона a..b.

// let array = [4, 7, 5, 1, 6, 9, 0, 2, 8, 3];
// let filterRangeInPlace = (arr, a, b) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < a || arr[i] > b){
//             arr.splice(i--, 1);
//         }
//     }
// }

// filterRangeInPlace(array, 2, 6);
// console.log(array);


// ------------------------------------------------------------------
// Функция filterRangeInPlace() с использованием filter().

// let array = [4, 7, 5, 1, 6, 9, 0, 2, 8, 3];
// let filterRangeInPlace = (arr, a, b) => {
//     let result = arr.filter((elem) => (elem >= a && elem <= b));
//     return result;
// }

// array = filterRangeInPlace(array, 2, 6);
// console.log(array);


// -------------------------------------------------------------------
// Функция filterRangeInPlace() с использованием forEach().

// let array = [4, 7, 5, 1, 6, 9, 0, 2, 8, 3];
// let filterRangeInPlace = (arr, a, b) => {
//     let result = [];
//     arr.forEach((elem) => {
//         if(elem >= a && elem <= b){
//             result.push(elem);
//         };
//     })
//     return result;
// }

// array = filterRangeInPlace(array, 2, 6);
// console.log(array);


// -------------------------------------------------------------------
// Функция filterRangeInPlace() с использованием map().

// let array = [4, 7, 5, 1, 6, 9, 0, 2, 8, 3];
// let filterRangeInPlace = (arr, a, b) => {
//     let result = [];
//     arr.map((elem) => {
//         if(elem >= a && elem <= b){
//             result.push(elem);
//         };
//     })
//     return result;
// }

// array = filterRangeInPlace(array, 2, 6);
// console.log(array);
