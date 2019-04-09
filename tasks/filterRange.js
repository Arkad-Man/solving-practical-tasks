let array = [4, 7, 5, 1, 9, 0, 2, 8, 3];

// let filterdRange = (arr, a, b) => {
//     let array = [];
//     arr.forEach(elem => {
//         if(a <= elem && elem <= b){
//             array.push(elem);
//         }
//     });
//     return array;
// }
// console.log(filterdRange(array, 3, 8));
// console.log(filterdRange(array, 2, 8));
// console.log(filterdRange(array, 4, 6));
// console.log(filterdRange(array, -1, 7));
// console.log(filterdRange(array, -1, 10));


let filterdRange = (arr, a, b) => {
    let array = [];
    for(let i = 0; i < arr.length; i++) {
        if(a <= arr[i] && arr[i] <= b){
            array.push(arr[i]);
        }
    };
    return array;
}
console.log(filterdRange(array, 3, 8));
console.log(filterdRange(array, 2, 8));
console.log(filterdRange(array, 4, 6));
console.log(filterdRange(array, -1, 7));
console.log(filterdRange(array, -1, 10));
