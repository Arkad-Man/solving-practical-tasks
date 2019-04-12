// Функция конструктор CalculatorConstructor.

// function CalculatorConstructor() {
//     this.read = function(){
//       this.num1 = +prompt('Введите первое число!', 0);
//       this.num2 = +prompt('Введите второе число!', 0);
//     };
//     this.sum = function(){
//         return this.num1 + this.num2;
//     };
//     this.sub = function(){
//         return this.num1 - this.num2;
//     };
//     this.mul = function(){
//         return this.num1 * this.num2;
//     };
//     this.div = function(){
//         return this.num1 / this.num2;
//     };
// };

// const calculator = new CalculatorConstructor();
// calculator.read();
// console.log('Результат сложения: ' + calculator.sum());
// console.log('Результат вычитания: ' + calculator.sub());
// console.log('Результат умножения: ' + calculator.mul());
// console.log('Результат деления: ' + calculator.div());

// -------------------------------------------------------------------

// function CalculatorConstructor() {
//     this.read = () => {
//       this.num1 = +prompt('Введите первое число!', 0);
//       this.num2 = +prompt('Введите второе число!', 0);
//     };
//     this.sum = () => this.num1 + this.num2,

//     this.sub = () => this.num1 - this.num2,

//     this.mul = () => this.num1 * this.num2,

//     this.div = () => this.num1 / this.num2
// };

// const calculator = new CalculatorConstructor();
// calculator.read();
// console.log('Результат сложения: ' + calculator.sum());
// console.log('Результат вычитания: ' + calculator.sub());
// console.log('Результат умножения: ' + calculator.mul());
// console.log('Результат деления: ' + calculator.div());
