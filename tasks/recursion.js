// Recursion

// Вывести числа от 1 до num.

// const recurNum = (num) => (num === 1) ? 1 : recurNum(num - 1) + ' ' + num;
// console.log(recurNum(100));

// ---------------------------------------------------------------------

// Вывести числа от num2 до num2.

// const recurNum2 = (num1, num2) => {
//     if(num1 < num2) return recurNum2(num1 + 1, num2) + ' ' + num1;
    
//     if(num1 === num2) return num1;

//     if(num1 > num2) return recurNum2(num1 - 1, num2) + ' ' + num1;
// };
// console.log(recurNum2(90, 100));
// console.log(recurNum2(9, 1));
// console.log(recurNum2(90, 90));

// ---------------------------------------------------------------------

// Возведение в степень.

// const pow = (num, n) => (n !== 1) ? num * pow(num, n - 1) : num;

// console.log(pow(2, 2));
// console.log(pow(2, 10));

// ---------------------------------------------------------------------

// const sumTo = (num) => {
//     if(num !== 1) return num + sumTo(num - 1);
//     return 1
// }

// console.log(sumTo(20));
// console.log(sumTo(200));

// ---------------------------------------------------------------------

// const factorial = (num) => (num !== 1) ? num * factorial(num - 1) : 1;

// console.log(factorial(3));
// console.log(factorial(10));

