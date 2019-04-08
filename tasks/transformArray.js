// Функция transform() с помощью цикла for().

// let array = [5, 3, 8, 1, 4, 9];

// const transform = (arr) => {
//     let array = [];
//     for(let i = 0; i < arr.length; i++){
//         array.push({id: arr[i]});
//     }
//     return console.log(array);
// }
// transform(array);


// ------------------------------------------------------------
// Функция transform() с помощью map().

// let array = [5, 3, 8, 1, 4, 9];

// const transform = (arr) => {
//     return arr.map((item) => ({id: item}))
// }
// console.log(transform(array));


// ------------------------------------------------------------
// Функция transform() с помощью forEach().

// let array = [5, 3, 8, 1, 4, 9];

// const transform = (arr) => {
//     let array = [];
//     arr.forEach((item) => {
//         array.push({id: item});
//     })
//     return array;
// }
// console.log(transform(array));


// ------------------------------------------------------------
// Функция transform() с помощью метода reduce.

// let array = [5, 3, 8, 1, 4, 9];

// const transform = (arr) => {
//     let result = arr.reduce((acc, item, index) => {
//         acc[index] = {id:item};
//         return acc;
//     }, []);
//     return result;
// }
// console.log(transform(array));

// const transform = (arr) => {
//     let result = array.reduce((acc, item) => {
//         acc.push({id:item});
//         return acc;
//     }, []);
//     return result;
// }
// console.log(transform(array));

