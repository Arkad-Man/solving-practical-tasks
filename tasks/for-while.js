// Вывод четных чисел.

// for (let i = 1; i <= 10; i++) {
//     if(i % 2 == 0) {
//         console.log('Even number: ' + i);
//     }
// }

// let i = 1;
// while (i <= 10) {
//     if(i % 2 == 0) {
//         console.log('Even number: ' + i);
//     }
//     i++;
// }


// --------------------------------------------------------------------
// Функция для простых чисел.

// let primeNumber = (num) => {
//     nextStep: for (let a = 2; a <= num; a++) {
//         for (let b = 2; b < a; b++) {
//             if(a % b == 0) continue nextStep
//         }
//         console.log('Prime number: ' + a);
//     }
// }

// primeNumber(10);


// ---------------------------------------------------------------------
// Бесконечный цикл с запросом нужного числа для остановки.

// while (true) {
//     let res = prompt('Enter a number greater than 100!', 0);
//     if (res >= 100 || res === null) break
// }

// let res;
// do{
//     res = prompt('Enter a number greater than 100!', 0);
// }while (res <= 100 && res !== null) 


// for(;;){
//     let res = prompt('Enter a number greater than 100!', 0);
//     if (res >= 100 || res === null) break
// }
