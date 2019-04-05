// Функция min().

// const min = (a, b) => {
//     if (a < b) {
//         return console.log('Min: ' + a);
//     }else if (a == b){
//         return console.log('These numbers are equal!');
//     }
//     return console.log('Min: ' + b);
// }
// min(1, 1);
// min(2, 5);
// min(2, 1);


// ----------------------------------------------------------------
// Функция min() с тернарным оператором.

// const min = (a, b) => (a == b) 
//                     ? console.log('These numbers are equal!') 
//                     : ((a < b) ? console.log('Min: ' + a) : console.log('Min: ' + b));
// min(2, 2);
// min(2, 5);
// min(2, 1);


// -----------------------------------------------------------------
// Функция min() через Math.min.

// const min = (a, b) => (a == b) ? console.log('These numbers are equal!') : console.log(Math.min(a, b));
// min(2, 5);
// min(2, 1);
// min(2, 2);
