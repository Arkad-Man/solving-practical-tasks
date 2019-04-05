// Задача из учебника learn.javascript.ru

// let login = prompt('Who you are?', '');

// if(login === null) {
//     console.log('login canceled!');
// }else if(login === 'boss') {
//     let pass = prompt('Enter your password, Boss!', '');
//     if(pass === null) {
//         console.log('login canceled!');
//     }else if(pass === 'lord') {
//         console.log('Welcome, Boss!');
//     }else{
//         console.log('Wrong password!');
//     }
// }else{
//     console.log('I do not know you!');
// };


// -----------------------------------------------------------------
// Вариант через switch

// let login = prompt('Who you are?', '');

// switch(login) {
//     case null:
//         console.log('login canceled!');
//         break;
//     default:
//         console.log('I do not know you!');
//         break;
//     case 'boss':
//         let pass = prompt('Enter your password, Boss!', '');
//         switch(pass){
//             case null:
//                 console.log('login canceled!');
//                 break;
//             case 'lord':
//                 console.log('Welcome, Boss!');
//                 break;
//             default:
//                 console.log('Wrong password!');
//                 break;
//         }
// }


// --------------------------------------------------------------
// Этот вариант мне просто вынес МОЗГ!!! На него я потратил больше всего времени (3ч.+).
// Начал его делать, не пошло. Зато появилась идея как это сделать с функциями.
// Сделал сперва с функциями, потом вернулся к этому варианту снова, и ЗАВИС!
// Проблема была в том, что я пытался сразу после второго prompt применить тернарный оператор,
// а надо было всего него всего лиш добавить скобки и оператор &&.

// let login = prompt('Who you are?', '');
// let pass;
// (login === null) 
//     ? console.log('login canceled!')
//     : (login === 'boss') 
//     ? ((pass = prompt('Enter your password, Boss!', '')) && (pass === 'lord')
//         ? console.log('Welcome, Boss!')
//         : (pass === null)
//         ? console.log('login canceled!')
//         : console.log('Wrong password!')
//     )
//     : console.log('I do not know you!') 
    

// -------------------------------------------------------------
// Вариант с одной функцией

// let login = prompt('Who you are?', '');

// const checkIn = (name) => {
//     (name === null) 
//         ? console.log('login canceled!')
//         : (name === 'boss') 
//         ? (() => {
//             let pass = prompt('Enter your password, Boss!', '');
//             (pass === null)
//                 ? console.log('login canceled!')
//                 : (pass === 'lord')
//                 ? console.log('Welcome, Boss!')
//                 : console.log('Wrong password!');
//         })()
//         : console.log('I do not know you!');
// };

// checkIn(login);

// -------------------------------------------------------------
// Вариант из двух функций

// let login = prompt('Who you are?', '');

// const checkIn = (name) => {
//     (name === null) 
//         ? console.log('login canceled!')
//         : (name === 'boss') 
//         ? password()
//         : console.log('I do not know you!');
// };

// let password = () => {
//     let pass = prompt('Enter your password, Boss!', '');
//     (pass === null)
//         ? console.log('login canceled!')
//         : (pass === 'lord')
//         ? console.log('Welcome, Boss!')
//         : console.log('Wrong password!');
// }

// checkIn(login);
