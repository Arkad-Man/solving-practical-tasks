// Функция возведения в степень pow().

// const pow = (x ,n) => {
//     if(n <= 1){
//         console.log('Enter a valid power greater than 1!');
//     }else {
//         let result = x;
//         for(let i = 1; i < n; i++) {
//             result *= x;
//         }
//         return console.log('Number: ' + x + ' Pow: ' + n + ' = ' + result);
//     }
// }

// pow(2, 2);
// pow(2, 1);


// -----------------------------------------------------------------------------
// Функция возведения в степень pow() с тернарным оператором.
// Как по мне, в данном случае такая запись чере тернарный оператор ничем не лучше
// чем через обычный if, так как приходиться цикл оборачивать в самовызывающуюся функцию.

// const pow = (x, n) => (n <= 1)
//         ? console.log('Enter a valid power greater than 1!')
//         : (() => {
//             let result = x;
//             for(let i = 1; i < n; i++) {
//                 result *= x;
//             };
//             return console.log('Number: ' + x + ' Pow: ' + n + ' = ' + result);  
//         })();

// pow(2, 2);
// pow(2, 1);


// ------------------------------------------------------------------------------
// Функция возведения в степень pow() с Math.pow.

// const pow = (x, n) => (n <= 1) ? console.log('Enter a valid power greater than 1!') : console.log(Math.pow(x, n));

// pow(2, 2);
// pow(2, 1);
