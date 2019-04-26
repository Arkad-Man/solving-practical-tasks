// CoffeeMashineClass

// class Mashine {
//     constructor(power){
//         this._power = power;
//         this._enabled = false;
//     }
//     enable(){
//         this._enabled = true;
//     }
//     disable(){
//         this._enabled = false;
//     }
// }

// class CoffeeMashine extends Mashine{
//     constructor(capacityCM){
//         super(...arguments);
//         this._capacityCM = capacityCM;
//         this._waterAmount = 0;
//         this._WATER_HEAT_CAPACITY = 4200;
//         this._timer;
//     }
//     getPower(){
//         console.log('Мощьность кофеварки - ' + this._power + ' вт.');
//     }
//     getEnergy(){
//         return this._enabled;
//     }
//     getTimeToBoil(){
//         return this._waterAmount * this._WATER_HEAT_CAPACITY * 8 / this._power;
//     }
//     setWaterAmount(inputWaterAmount){
//         if(inputWaterAmount < 0){
//             throw new Error("Значение должно быть положительным");
//         }
//         if(inputWaterAmount > this._capacityCM){
//             throw new Error("Нельзя залить воды больше, чем " + this._capacityCM);
//         }
//         this._waterAmount = inputWaterAmount;
//     }
//     getWaterAmount(){
//         return this._waterAmount;
//     }
//     isRunning(){
//         return Boolean(this._timer);
//     }
//     onReady(){
//         console.log('Кофе готов! ' + this._waterAmount + ' мл.');
//     }
//     run(){
//         if(this._enabled !== true){
//             throw new Error('Кофеварка выкльчена!');
//         }
//         console.log('Идет приготовление кофе!');
//         this._timer = setTimeout(() => {
//             this._timer = null;
//             this.onReady();
//         }, this.getTimeToBoil());
//     }
//     stop(){
//         clearTimeout(this._timer);
//     }
//     disable(){
//         super.disable();
//         clearTimeout(this._timer);
//     }
// }

// const coffeeMashine = new CoffeeMashine(10000, 500);
// coffeeMashine.getPower();
// console.log('enabled = ', coffeeMashine.getEnergy());
// coffeeMashine.enable();
// console.log('enabled = ', coffeeMashine.getEnergy());
// console.log('Кофеварка запущена - ', coffeeMashine.isRunning());
// console.log('Воды в кофеварке - ', coffeeMashine.getWaterAmount());
// coffeeMashine.setWaterAmount(300);
// console.log('Воды в кофеварке - ', coffeeMashine.getWaterAmount());
// coffeeMashine.run();
// console.log('Кофеварка запущена - ', coffeeMashine.isRunning());
