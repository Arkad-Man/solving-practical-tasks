// function Mashine(power) {
//     this._power = power;
//     this._enabled = false;

//     this.enable = function(){
//         this._enabled = true;
//     };

//     this.disable = function(){
//         this._enabled = false;
//     };
// };

// -----------------------------------------------------------------

// function Fridge(power){
//     Mashine.apply(this, arguments);
//     let food = [];
//     this.addFood = function(){
//         if(this._enabled !== true){
//             throw new Error('Холодильник выключен!');
//         };
//         if (food.length + arguments.length > this._power / 100) {
//             throw new Error("Нельзя добавить, не хватает мощности");
//         };
//         for(let i = 0; i < arguments.length; i++){
//             food.push(arguments[i]);
//         };
//     };
//     let parentDisable = this.disable;
//     this.disable = function(){
//         if(food.length > 0){
//             throw new Error('В холодильнике есть еда!');
//         };
//         parentDisable.call(this);
//     };
//     this.getFood = function(){
//         return food.slice(0);
//     };
//     this.filterFood = function(item){
//         return food.filter(item);
//     };
//     this.removeFood = function(item){
//         for(let i = 0; i < food.length; i++){
//             if(item === food[i]){
//                 food.splice(item, 1);
//             };
//         };
//     };
// }

// let fridge = new Fridge(500);
// fridge.enable();
// fridge.addFood({
//     title: "котлета",
//     calories: 100
// });
// fridge.addFood({
//     title: "сок",
//     calories: 30
// });
// fridge.addFood({
//     title: "зелень",
//     calories: 10
// });
// fridge.addFood({
//     title: "варенье",
//     calories: 150
// });

// console.log(fridge.getFood());
// let dietItems = fridge.filterFood(function(item) {
//     return item.calories < 50;
// });

// fridge.removeFood("нет такой еды"); // без эффекта
// console.log( fridge.getFood().length ); // 4
  
// dietItems.forEach(function(item) {
//     console.log(item.title); // сок, зелень
//     fridge.removeFood(item);
// });

// console.log(fridge.getFood());
// console.log(fridge.getFood().length );
// fridge.disable();

// -----------------------------------------------------------------

// function CoffeeMachine(power, capacityCM) {
//     Mashine.apply(this, arguments);

//     let waterAmount = 0;

//     let WATER_HEAT_CAPACITY = 4200;
//     let timer;

//     this.getPower = function(){
//         return console.log('Мощьность кофеварки - ' + power + ' вт.');
//     };

//     function getBoilTime(){
//         return waterAmount * WATER_HEAT_CAPACITY * 8 / power;
//     };

//     this.setWaterAmount = function(inputWaterAmount){
//         if(inputWaterAmount < 0){
//             throw new Error("Значение должно быть положительным");
//         };
//         if(inputWaterAmount > capacityCM){
//             throw new Error("Нельзя залить воды больше, чем " + capacityCM);
//         };
//         waterAmount = inputWaterAmount;
//     };

//     this.getWaterAmount = function(){
//         return waterAmount;
//     };

//     this.addWater = function(inputWaterAmount){
//         this.setWaterAmount(waterAmount + inputWaterAmount);
//     };

//     function onReady(){
//         console.log('Кофе готов! ' + waterAmount + ' мл.');
//     };

//     this.setOnReady = function(newOnReady){
//         onReady = newOnReady;
//     };

//     this.isRunning = function(){
//         return Boolean(timer);
//     };

//     let parentDisable = this.disable;
//     this.disable = function(){
//         parentDisable.call(this);
//         clearTimeout(timer);
//     };

//     this.run = function(){
//         if(this._enabled !== true){
//             throw new Error('Кофеварка выкльчена!');
//         };
//         console.log('Идет приготовление кофе!');
//         timer = setTimeout(function(){
//          timer = null;
//             onReady();
//         }, getBoilTime());
//     };

//     this.stop = function(){
//         clearTimeout(timer);
//     };
// };

// let coffeeMashine = new CoffeeMachine(1000, 500);
// coffeeMashine.getPower();
// coffeeMashine.addWater(300);
// coffeeMashine.setWaterAmount(200);
// console.log(coffeeMashine.isRunning());
// console.log(coffeeMashine.getWaterAmount());
// coffeeMashine.enable();
// coffeeMashine.setOnReady(function(){
//     let amount = coffeeMashine.getWaterAmount();
//     console.log('Кофе готов - ' + amount +  ' мл.');
// })
// coffeeMashine.run();
// coffeeMashine.disable();
// console.log(coffeeMashine.isRunning());

