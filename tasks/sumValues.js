function sum(){
    let arr = [];
    let sum = 0;
    
    for(;;){
        let num = prompt('number', 0);
        if(num === null || isNaN(num) || num === ""){
            break;
        }else{
            arr.push(Number(num));
        }
    }
        for(let i = 0; i < arr.length; i++){
            sum += arr[i];
        }
    return console.log(sum);
}
sum();
