// Объект calculator.

// const calculator = {
//     read: function(){
//       this.num1 = +prompt('Введите первое число!', 0);
//       this.num2 = +prompt('Введите второе число!', 0);
//     },
//     sum: function(){
//         return this.num1 + this.num2;
//     },
//     sub: function(){
//         return this.num1 - this.num2;
//     },
//     mul: function(){
//         return this.num1 * this.num2;
//     },
//     div: function(){
//         return this.num1 / this.num2;
//     }
// };
// calculator.read();
// console.log('Результат сложения: ' + calculator.sum());
// console.log('Результат вычитания: ' + calculator.sub());
// console.log('Результат умножения: ' + calculator.mul());
// console.log('Результат деления: ' + calculator.div());

// ----------------------------------------------------------

// const calculator = {
//     read() {
//       this.num1 = +prompt('Введите первое число!', 0);
//       this.num2 = +prompt('Введите второе число!', 0);
//     },
//     sum() { return this.num1 + this.num2; },
//     sub() { return this.num1 - this.num2; },
//     mul() { return this.num1 * this.num2; },
//     div() { return this.num1 / this.num2; }
// };
// calculator.read();
// console.log('Результат сложения: ' + calculator.sum());
// console.log('Результат вычитания: ' + calculator.sub());
// console.log('Результат умножения: ' + calculator.mul());
// console.log('Результат деления: ' + calculator.div());

// ----------------------------------------------------------------------------
// Калькулятор, Свой вариант.

// const calculator = {
//     start() {
//         let incomingValue = prompt('Please enter: num1 \ space \ operator \ space \ num2', 0).split(' ');
//         let num1 = +incomingValue[0];
//         let operator = incomingValue[1];
//         let num2 = +incomingValue[2];
//         (isNaN(num1) || !this.methods[operator] || isNaN(num2))
//             ? console.log('You entered not valid values!')
//             : this.methods[operator](num1, num2);
//     },
//     methods: {
//         '+': (a, b) => console.log('Результат сложения: ', a + b),
//         '-': (a, b) => console.log('Результат вычитания: ', a - b),
//         '*': (a, b) => console.log('Результат умножения: ', a * b),
//         '/': (a, b) => console.log('Результат деления: ', a / b)
//     }
// }
// calculator.start();
