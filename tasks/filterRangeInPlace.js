// Функцию filterRangeInPlace(arr, a, b), которая получает массив
// с числами arr и удаляет из него все числа вне диапазона a..b.

// let array = [4, 7, 5, 1, 6, 9, 0, 2, 8, 3];

// let filterdRangeInPlace = (arr, a, b) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < a || arr[i] > b){
//             arr.splice(i--, 1);
//         }
//     }
// }

// filterdRangeInPlace(array, 2, 6);
// console.log(array);


// ------------------------------------------------------------------
// Функция filterRangeInPlace() с использованием filter. (Работает не совсем корректно).

// let array = [4, 7, 5, 1, 6, 9, 0, 2, 8, 3];
// let filterdRangeInPlace = (arr, a, b) => {
//     arr.filter((elem, i) => {
//         if(elem < a || elem > b){
//             arr.splice(i--, 1);
//         };
//     });   
// }

// filterdRangeInPlace(array, 2, 6);
// console.log(array);


// -------------------------------------------------------------------
// Функция filterRangeInPlace() с использованием forEach. (Работает не совсем корректно).

// let array = [4, 7, 5, 1, 6, 9, 0, 2, 8, 3];

// let filterdRangeInPlace = (arr, a, b) => {
//     arr.forEach((elem, i) => {
//         if(elem < a || elem > b){
//             arr.splice(i--, 1);
//         }
//     })    
// }

// filterdRangeInPlace(array, 2, 6);
// console.log(array);
