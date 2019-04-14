// Get, Set Свойства.

// function User(fullName) {
//     this.fullName = fullName;

//     Object.defineProperties(this, {
//         firstName: {
//             get: () => this.fullName.split(' ')[0],
//             set: (newName) => this.fullName = `${newName} ${this.surname }${this.lastName}`,
//         },
//         surname: {
//             get: () => this.fullName.split(' ')[1],
//             set: (newSurname) => this.fullName = `${this.firstName} ${newSurname} ${this.lastName}`,
//         },
//         lastName: {
//             get: () => this.fullName.split(' ')[2],
//             set: (newLastName) => this.fullName = `${this.firstName} ${this.surname} ${newLastName}`,
//         }
//     });
// }

// let men = new User('Ivan Ivanov Ivanovich');
// console.log(men.firstName);
// console.log(men.surname);
// console.log(men.lastName);

// men.firstName = 'Petr';
// men.surname = 'Petrov';
// men.lastName = 'Petrovich';

// console.log(men.firstName);
// console.log(men.surname);
// console.log(men.lastName);
