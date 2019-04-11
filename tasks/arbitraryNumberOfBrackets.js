// function sum(a){ /*(2)*/

//     let counterSum = a;

//     function func(b){ /*(5), (8)*/
//         counterSum += b;
//         return func; /*(6), (9)*/
//     };

//     func.toString = function(){
//         return counterSum; /*(11)*/
//     };

//     return func; /*(3)*/
// };
//                /*(1)(4)(7)*/
// /*(10)*/alert(sum(1)(2)(3));  /*(6)*/

// (1, 2, 3) - Вызываеться функция sum со значением 1 - sum(1); 
//           - Начинается выполнение функции, создаётся переменная counterSum
// которой присваивается значение a = 1.
//           - Функция завершается вызывая внутренюю функция func.

// (4, 5, 6) - Поскольку sum возвратила функцию func, то запускается она с
// аргументом следующих скобок b = 2.
//           - Далее через замыкание, функция получает значение counterSum и
// добовляет к ниму значение b, ( counterSum(1) += b(2) = 3 ),
//           - Далее функция func возвращает саму себя.

// (7, 8, 9) - Далее func снова запускается с аргументом следующих скобок b = 3,
//           - Снова через замыкание она получает значение counterSum и добавляет
// к ниму значение b, ( counterSum(3) += b(3) = 6 ).
//           - Далее функция func возвращает себя же.

// (10, 11) - Так как больше аргументов нет, alert, выводит результат, а поскольку
// последнее что было возвращено была функция func то она и выводится, а именно
// выводится её функция toString которое возвращает примитивное значение counterSum.

// console.log(+sum(1)(2)(3));
// console.log(sum(1)(2)(3) == 6);


// ---------------------------------------------------------------------------------
// Вариант sum с помощью () => .

// const sum = (a) => {
//     let counterSum = a;
//     const func = (b) => (counterSum += b, func);
//     func.toString = () => counterSum;
//     return func;
// };
// alert(sum(1)(2)(3));
// console.log(+sum(1)(2)(3));
// console.log(sum(1)(2)(3) == 6);


// ----------------------------------------------------------------------------------
// Вариант sum с помощью () => но без локальной переменной. (Плохая практика!!!)

// const sum = (a) => {
//     const func = (b) => (a += b, func);
//     func.toString = () => a;
//     return func;
// };
// alert(sum(1)(2)(3));
// console.log(+sum(1)(2)(3));
// console.log(sum(1)(2)(3) == 6);
