// Функция intersection().

// const intersection = (mas1, mas2) => {
//     let mas3 = [];
//     for(let i = 0; i < mas1.length; i++){
//         if(mas2.indexOf(mas1[i]) !== -1){
//             mas3.push(mas1[i]);
//         };
//     };
//     return mas3;
// };

// console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
// console.log(intersection([1, 5, 4, 2], [7, 12]));

//------------------------------------------------------------------

// const intersection = (mas1, mas2) => {
//     let mas3 = [];
//     mas1.forEach((el) => {
//         if(mas2.indexOf(el) !== -1){
//             mas3.push(el);
//         }
//     });
//     return mas3;
// };

// console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
// console.log(intersection([1, 5, 4, 2], [7, 12]));

// -----------------------------------------------------------------

// const intersection = (mas1, mas2) => {
//     let mas3 = mas1.filter((el) => {
//         if(mas2.indexOf(el) !== -1){
//             return el;
//         }
//     });
//     return mas3;
// };

// console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
// console.log(intersection([1, 5, 4, 2], [7, 12]));

// -----------------------------------------------------------------

// const intersection = (mas1, mas2) => {
//     let mas3 = [];
//     for(let a = 0; a < mas1.length; a++){
//         for(let b = 0; b < mas2.length; b++){
//             if(mas1[a] === mas2[b]){
//                 mas3.push(mas1[a]);
//             }
//         }
//     }
//     return mas3;
// }

// console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
// console.log(intersection([1, 5, 4, 2], [7, 12, -1, 2]));
