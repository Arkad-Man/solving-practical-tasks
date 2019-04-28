//  Найти минимальное значение в массиве.

// 1-й способ через цикл for.

// let arr1 = [3, -5, 2, 9, 0, -2, 6, -1];
// const minInArray = (arr) => {
//     let min = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         min = (min > arr[i]) ? arr[i] : min;
//     }
//     return console.log('Minimum number in array: ' + min);
// }
// minInArray(arr1);


// ----------------------------------------------------------------
// 2-й способ через объект Math.

// let arr2 = [3, -3, 2, 9, 0, -2];
// let min2 = Math.min(...arr2);
// console.log('Minimum number in array: ' + min2);


// ----------------------------------------------------------------
// 3-й способ через apply и объект Math.

// let arr3 = [3, 2, -1, 9, 0, -2];
// let min3 = Math.min.apply(null, arr3);
// console.log('Minimum number in array: ' + min3);


// -----------------------------------------------------------------
// 4-й способ через reduce и объект Math.

// let arr4 = [8, -5, 2, 0, -12];
// let min4 = arr4.reduce((a, b) => {
//     return Math.min(a, b);
// });
// console.log('Minimum number in array: ' + min4);


// -----------------------------------------------------------------
// 5-й способ через reduce.

// let arr5 = [13, -9, 2, 9, 0, -2];
// let min5 = arr5.reduce((a, b) => {
//     return (a < b) ? a : b;
// });
// console.log('Minimum number in array: ' + min5);


//-------------------------------------------------------------------
// 6-й способ через sort().

// let arr6 = [13, -9, 2, 9, 0, -2];
// let min6 = (arr) => {
//     let res = arr.sort((a, b) => a - b);
//     return res[0];
// }
// console.log(min6(arr6));
