

// let arr1 = [[[1, 2]], [3]];
// let arr2 = [[[1, 2]], [3], [[4, 5]], 6, [[[7]]], [[[[[[[[8]], 9]]]]]]];

// const transformArr = (arr) => {
//     let res = arr.join().split(',');
//     return res.map(el => Number(el));
// }

// console.log(transformArr(arr1));
// console.log(transformArr(arr2));

// ----------------------------------------------------------------------------

// let arr1 = [[[1, 2]], [3]];
// let arr2 = [[[1, 2]], [3], [[4, 5]], 6, [[[7]]], [[[[[[[[8]], 9]]]]]]];
// let arr3 = [{1: 'one'}, [[{2: 'two'}], [[[{3: 'three'}], {4: 'four'}]]]];

// const transformArr = (arr) => {
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             res = res.concat(transformArr(arr[i]));
//         }else{
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }

// console.log(transformArr(arr1));
// console.log(transformArr(arr2));
// console.log(transformArr(arr3));

// ---------------------------------------------------------------------------

// let arr1 = [[[1, 2]], [3]];
// let arr2 = [[[1, 2]], [3], [[4, 5]], 6, [[[7]]], [[[[[[[[8]], 9]]]]]]];
// let arr3 = [{1: 'one'}, [[{2: 'two'}], [[[{3: 'three'}], {4: 'four'}]]]];

// const transformArr = (arr) => {
//     let res = [];
//     arr.forEach((el) => {
//         if(Array.isArray(el)){
//             res = res.concat(transformArr(el));
//         }else{
//             res.push(el);
//         }
//     })
//     return res;
// }

// console.log(transformArr(arr1));
// console.log(transformArr(arr2));
// console.log(transformArr(arr3));

// ---------------------------------------------------------------------------

// let arr1 = [[[1, 2]], [3]];
// let arr2 = [[[1, 2]], [3], [[4, 5]], 6, [[[7]]], [[[[[[[[8]], 9]]]]]]];
// let arr3 = [{1: 'one'}, [[{2: 'two'}], [[[{3: 'three'}], {4: 'four'}]]]];

// const transformArr = (arr) => {
//     return arr.reduce((intermediate, curent) => (Array.isArray(curent))
//                                                 ? intermediate.concat(transformArr(curent))
//                                                 : intermediate.concat(curent), []);
// };

// console.log(transformArr(arr1));
// console.log(transformArr(arr2));
// console.log(transformArr(arr3));

// ---------------------------------------------------------------------------

// let arr1 = [[[1, 2]], [3]];
// let arr2 = [[[1, 2]], [3], [[4, 5]], 6, [[[7]]], [[[[[[[[8]], 9]]]]]]];
// let arr3 = [{1: 'one'}, [[{2: 'two'}], [[[{3: 'three'}], {4: 'four'}]]]];

// const transformArr = (arr) => {
//     let newArr = [...arr];
//     let res = [];
//     while(newArr.length){
//         let curent = newArr.pop();
//         if(Array.isArray(curent)){
//             newArr = newArr.concat(curent);
//         }else{
//             res.push(curent);
//         }
//     }
//     return res.reverse();
// }

// console.log(transformArr(arr1));
// console.log(transformArr(arr2));
// console.log(transformArr(arr3));

// ---------------------------------------------------------------------------

// let arr1 = [[[1, 2]], [3]];
// let arr2 = [[[1, 2]], [3], [[4, 5]], 6, [[[7]]], [[[[[[[[8]], 9]]]]]]];
// let arr3 = [{1: 'one'}, [[{2: 'two'}], [[[{3: 'three'}], {4: 'four'}]]]];

// const transformArr = (arr) => {
//     return arr.flat(Infinity);
// }

// console.log(transformArr(arr1));
// console.log(transformArr(arr2));
// console.log(transformArr(arr3));

// ---------------------------------------------------------------------------

// let arr1 = [[[1, 2]], [3]];
// let arr2 = [[[1, 2]], [3], [[4, 5]], 6, [[[7]]], [[[[[[[[8]], 9]]]]]]];
// let arr3 = [{1: 'one'}, [[{2: 'two'}], [[[{3: 'three'}], {4: 'four'}]]]];

// const transformArr = (arr) => {
//     let copyArr = [...arr];
//     for(let i = 0; i < copyArr.length;) {
//         (Array.isArray(copyArr[i])) ? copyArr.splice(i, 1, ...copyArr[i]) : i++;
//     }
//     return copyArr;
// }

// console.log(transformArr(arr1));
// console.log(transformArr(arr2));
// console.log(transformArr(arr3));
