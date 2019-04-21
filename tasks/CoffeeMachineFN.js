function CoffeeMachine(power, capacityCM) {
    let waterAmount = 0;

    // let self = this;
    let WATER_HEAT_CAPACITY = 4200;
    let energyOn;

    this.getPower = function(){
        return console.log('Мощьность кофеварки - ' + power + ' вт.');
    }

    function getBoilTime(){
        return waterAmount * WATER_HEAT_CAPACITY * 8 / power;
    };

    this.setWaterAmount = function(inputWaterAmount){
        if(inputWaterAmount < 0){
            throw new Error("Значение должно быть положительным");
        }
        if(inputWaterAmount > capacityCM){
            throw new Error("Нельзя залить воды больше, чем " + capacityCM);
        }
        waterAmount = inputWaterAmount;
    }

    this.getWaterAmount = function(){
        return waterAmount;
        // return console.log('Воды в кофеварке - ' + waterAmount + ' мл.');
    }

    this.addWater = function(inputWaterAmount){
        this.setWaterAmount(waterAmount + inputWaterAmount);
    }

    
    function onReady(){
        console.log('Кофе готов! ' + waterAmount);
    }

    this.setOnReady = function(newOnReady){
        onReady = newOnReady;
    }

    this.isRunning = function(){
        return Boolean(energyOn);
    }

    this.run = function(){
        energyOn = setTimeout(function(){
         energyOn = null;
            onReady();
        }, getBoilTime());
    };

    this.stop = function(){
        clearTimeout(energyOn);
    }

    
}

let coffeeMashine = new CoffeeMachine(1000, 500);
coffeeMashine.getPower();
coffeeMashine.addWater(300);
// coffeeMashine.setWaterAmount(200);
console.log(coffeeMashine.getWaterAmount());
// coffeeMashine.setOnReady(function(){
//     let amount = coffeeMashine.getWaterAmount();
//     console.log('Кофе готов - ' + amount +  ' мл.');
// })
// console.log(coffeeMashine.isRunning());
// coffeeMashine.run();
// console.log(coffeeMashine.isRunning());


