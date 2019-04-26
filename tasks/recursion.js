// Recursion

// const recurNum = (num) => {
//     if(num === 1) {
//         return 1;
//     }
//     return recurNum(num - 1) + ' ' + num;
// };
// console.log(recurNum(100));

// ---------------------------------------------------------------------

// const recurNum2 = (num1, num2) => {
//     if(num1 < num2) return recurNum2(num1 + 1, num2) + ' ' + num1;
    
//     if(num1 === num2) return num1;

//     if(num1 > num2) return recurNum2(num1 - 1, num2) + ' ' + num1;
// };
// console.log(recurNum2(90, 100));
// console.log(recurNum2(9, 1));
// console.log(recurNum2(90, 90));

// ---------------------------------------------------------------------

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

// ---------------------------------------------------------------------

// const fib = (num) => { 
//     let prev = 0;
//     let next = 1;
//     for(let i = 0; i < num; i++){
//         next = prev + next;
//         prev = next - prev;
//     }
//     return prev;
// };

// console.log(fib(12));
// console.log(fib(22));
// console.log(fib(3));
