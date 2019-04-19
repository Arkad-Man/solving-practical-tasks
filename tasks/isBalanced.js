// Функция isBalanced().

// const isBalanced = (str) => {
//     let arr = str.split('');
//     let left = 0;
//     let right = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === '}') right += 1;
//         if(arr[i] === '{') left += 1;
//     }
//     return (left === right);
// }
// console.log(isBalanced('}{'));
// console.log(isBalanced('{{}'));
// console.log(isBalanced('{}{}'));
// console.log(isBalanced('foo { bar { baz } boo }'));
// console.log(isBalanced('foo { bar { baz }'));
// console.log(isBalanced('foo { bar } }'));

// --------------------------------------------------------

// const isBalanced = (str) => {
//     let arr = str.split('');
//     let left = 0;
//     let right = 0;
//     arr.forEach((elem) => {
//         if(elem === '}') right += 1;
//         if(elem === '{') left += 1;
//     });
    
//     return (left === right);
// }
// console.log(isBalanced('}{'));
// console.log(isBalanced('{{}'));
// console.log(isBalanced('{}{}'));
// console.log(isBalanced('foo { bar { baz } boo }'));
// console.log(isBalanced('foo { bar { baz }'));
// console.log(isBalanced('foo { bar } }'));


