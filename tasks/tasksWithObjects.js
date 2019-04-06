// Задачи по работе с объектами из учебника learn.javascript.ru 

// const gangster = {
//     'hat': 30,
//     'shirt': 50,
//     'waistcoat': 65,
//     'pants': 80,
//     'shoes': 100,
//     'tommy-gun': 250 
// };

// const emptyObj = {};

// Функция isEmpty() на проверку пуст ли объект.

// const isEmpty = (object) => {
//     for(let key in object) {
//         return console.log('the object is not empty!');
//     }
//     return console.log('object is empty!');
// }

// isEmpty(gangster);
// isEmpty(emptyObj);


// ------------------------------------------------------------------
// Функция amount() выводит сумму всех числовых значений.

// const amount = (object) => {
//     let sum = 0;
//     for(let key in object){
//         sum += object[key];
//     }
//     return console.log('Amount is: ' + sum);
// }

// amount(gangster);
// amount(emptyObj);


// -------------------------------------------------------------------
// Функция highestCost() выводит название свойства, с самым большим значением + значение этого свойства.

// const highestCost = (object) => {
//     let max = 0;
//     let mostExpensiveThing = '';
//     for(var key in object){
//         if(max < object[key]){
//             max = object[key];
//             mostExpensiveThing = key;
//         }
//     }
//     if(max !== 0) {
//         return console.log(mostExpensiveThing + ' : ' + max);
//     }
//     return console.log('No things!');
// }

// highestCost(gangster);
// highestCost(emptyObj);

// ------------ Таже функция highestCost() только с тернарными операторами. -------------

// const highestCost = (object) => {
//     let max = 0;
//     let mostExpensiveThing = '';
//     for(let key in object){
//         (max < object[key]) 
//             ? ((max = object[key]) && (mostExpensiveThing = key))
//             : '';
//     }
//     (max !== 0)
//         ? console.log(mostExpensiveThing + ' : ' + max)
//         : console.log('No things!');
// }

// highestCost(gangster);
// highestCost(emptyObj);
