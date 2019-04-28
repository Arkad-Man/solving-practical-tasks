// Функция strBuffer().

// function strBuffer() {
//     let text = '';
//     function buffer(val) {
//         return (arguments.length !== 0) ? text += val : text;
//     };
//     buffer.clear = () => text = '';
//     return buffer;
// };

// let buffer = strBuffer();

// buffer('Надо ');
// buffer('учить ');
// buffer('Java Script!');
// console.log(buffer());

// buffer.clear();

// buffer(1);
// buffer(2);
// buffer(3);
// console.log(buffer());


// function strBuffer() {
//     let text = '';
//     const buffer = (...val) => (!val.length) ? text : text += val;
//     buffer.clear = () => text = '';
//     return buffer;
// };

// let buffer = strBuffer();

// buffer('Надо ');
// buffer('учить ');
// buffer('Java Script!');
// console.log(buffer());

// buffer.clear();

// buffer(1);
// buffer(2);
// buffer(3);
// console.log(buffer());


// function strBuffer() {
//     let text = '';
//     return {
//         concatBuffer: (val) => text += val,
//         getBuffer: () => text,
//         clear: () => text = ''
//     }
// };

// let buffer = strBuffer();

// buffer.concatBuffer('Надо ');
// buffer.concatBuffer('учить ');
// buffer.concatBuffer('Java Script!');
// console.log(buffer.getBuffer());

// buffer.clear();

// buffer.concatBuffer(1);
// buffer.concatBuffer(2);
// buffer.concatBuffer(3);
// console.log(buffer.getBuffer());
