// CoffeeMashine - Prototype Style

// function CoffeeMashine(power, capacityCM){
//     this._power = power;
//     this._capacityCM = capacityCM;
//     this._waterAmount = 0;
//     this._timer;
//     this._enabled = false;
// }

// CoffeeMashine.prototype.WATER_HEAT_CAPACITY = 4200;

// CoffeeMashine.prototype.getPower = function(){
//     console.log('Мощьность кофеварки - ' + this._power + ' вт.');
// }

// CoffeeMashine.prototype._getTimeToBoil = function(){
//     return this._waterAmount * this.WATER_HEAT_CAPACITY * 8 / this._power;
// }

// CoffeeMashine.prototype.setWaterAmount = function(inputWaterAmount){
//     if(inputWaterAmount < 0){
//         throw new Error("Значение должно быть положительным");
//     }
//     if(inputWaterAmount > this._capacityCM){
//         throw new Error("Нельзя залить воды больше, чем " + this._capacityCM);
//     }
//     this._waterAmount = inputWaterAmount;
// }

// CoffeeMashine.prototype.getWaterAmount = function(){
//     return this._waterAmount;
// };

// CoffeeMashine.prototype.isRunning = function(){
//     return Boolean(this._timer);
// };

// CoffeeMashine.prototype.enable = function(){
//     this._enabled = true;
// };

// CoffeeMashine.prototype.disable = function(){
//     clearTimeout(this._timer);
//     this._enabled = false;
// };

// CoffeeMashine.prototype._onReady = function(){
//     console.log('Кофе готов! ' + this._waterAmount + ' мл.');
// };

// CoffeeMashine.prototype.run = function(){
//     if(this._enabled !== true){
//         throw new Error('Кофеварка выкльчена!');
//     }
//     console.log('Идет приготовление кофе!');
//     this._timer = setTimeout(() => {
//         this._timer = null;
//         this._onReady();
//     }, this._getTimeToBoil());
// }

// CoffeeMashine.prototype.stop = function(){
//     clearTimeout(this._timer);
// };

// const coffeeMashine = new CoffeeMashine(10000, 500);
// coffeeMashine.getPower();
// coffeeMashine.enable();
// console.log('Кофеварка запущена - ', coffeeMashine.isRunning());
// console.log('Воды в кофеварке - ', coffeeMashine.getWaterAmount());
// coffeeMashine.setWaterAmount(300);
// console.log('Воды в кофеварке - ', coffeeMashine.getWaterAmount());
// coffeeMashine.run();
// console.log('Кофеварка запущена - ', coffeeMashine.isRunning());
