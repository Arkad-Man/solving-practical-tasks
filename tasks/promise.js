// Promise

// const appltForVisa = (documents) => {
//     console.log('Обработтка заявления...');
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > 0.5
//                             ? resolve({})
//                             : reject('В визе отказано: нехватка документов');
//         }, 500)
//     });
//     return promise;
// };

// const getVisa = (visa) => {
//     console.log('Виза получена.');
//     return Promise.resolve(visa);
// }

// const bookHotel = (visa) => {
//     console.log('Запрос на бронирование номера в отеле...');
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > 0.5
//                             ? resolve(console.log('Номер забронирован.'))
//                             : reject('В отеле мест нет.');
//         }, 500);
//     });
// }

// const buyTickets = (booking) => {
//     console.log('Запрос на покупку авиабилета...')
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             Math.random() > 0.5
//                             ? resolve(console.log('Билет куплен.'))
//                             : reject('На ваш рейс билетов нет.');
//         }, 500);
//     });
// }

// appltForVisa({})
//         .then(getVisa)
//         .then(bookHotel)
//         .then(buyTickets)
//         .catch((error) => console.error(error));
