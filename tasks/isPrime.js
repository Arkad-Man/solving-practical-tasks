// Функция isPrime().

// function isPrime(num) {
//     if(num <= 1) return false;
//     for(var i = 2; i < num; i++){
//         console.log('i = ' + i);
//         console.log('num = ' + num);
//         if(num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(7));
// console.log(isPrime(8));
// console.log(isPrime(9));
// console.log(isPrime(17));
// console.log(isPrime(21));
// console.log(isPrime(43));
// console.log(isPrime(10000000000000));

// ----------------------------------------------------------

// function isPrime(num) {
//     let prime = true;
//     if(num <= 1) prime = false;
//     for(var i = 2; i < num; i++){
//         if(num % i === 0) {
//             prime = !prime;
//             break;
//         }
//     }
//     return prime;
// };

// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(7));
// console.log(isPrime(8));
// console.log(isPrime(9));
// console.log(isPrime(17));
// console.log(isPrime(21));
// console.log(isPrime(43));
// console.log(isPrime(10000000000000));
