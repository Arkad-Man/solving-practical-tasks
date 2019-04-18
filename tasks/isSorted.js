// Функция isSorted().

// const isSorted = (mas) => {
//     for(let i = 0; i < mas.length; i++){
//         if(mas[i] > mas[i + 1]){
//             return false;
//         }
//     }
//     return true;
// };

// console.log(isSorted([]));
// console.log(isSorted([-Infinity, -5, 0, 3, 9]));
// console.log(isSorted([3, 9, -3, 10]));
// console.log(isSorted([-4, 5, 1, 3, 9, 10]));

// -------------------------------------------------------------

// const isSorted = (mas) => {
//     let item = mas[0];
//     let res = true;
//     mas.map((elem) => (item > elem) ? res = false : item = elem)
//     return res;
// };

// console.log(isSorted([]));
// console.log(isSorted([-Infinity, -5, 0, 3, 9]));
// console.log(isSorted([3, 9, -3, 10]));
// console.log(isSorted([-4, 5, 1, 3, 9, 10]));

// -------------------------------------------------------------

// const isSorted = (mas) => {
//     let item = mas[0];
//     let res = true;
//     mas.forEach((elem) => (item > elem) ? res = false : item = elem)
//     return res;
// };

// console.log(isSorted([]));
// console.log(isSorted([-Infinity, -5, 0, 3, 9]));
// console.log(isSorted([3, 9, -3, 10]));
// console.log(isSorted([-4, 5, 1, 3, 9, 10]));

// --------------------------------------------------------------

// const isSorted = (mas) => {
//     let item = mas[0];
//     let res = true;
//     mas.filter((elem) => (item > elem) ? res = false : item = elem)
//     return res;
// };

// console.log(isSorted([]));
// console.log(isSorted([-Infinity, -5, 0, 3, 9]));
// console.log(isSorted([3, 9, -3, 10]));
// console.log(isSorted([-4, 5, 1, 3, 9, 10]));
