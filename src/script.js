console.log('---------#4');

// var name = 'Vic 2';
// var user = {
//     age: 5,
//     name: 'Vic',
//     getName: function() {
//         return this.name;
//     }
// };
//
// const getName = user.getName;
// console.log(getName()); // выводит Vic 2

var name = 'Vic 2';
var user = {
    age: 5,
    name: 'Vic',
    getName: function() {
        return this.name;
    }
};

const getName = user.getName.bind(user); // метод bind возвращает новую функцию, которую можно вызвать позже, вызываем её на 25 строке
console.log(getName()); // выводит Vic

// const getName = user.getName.call(user); // метод call сразу вызывает функцю
// const getName = user.getName.apply(user); // метод apply сразу вызывает функцю
// console.log(getName); // выводит Vic



console.log('---------#5');

// const user1 = {
//     age: 5,
//     name: 'Vic',
//     getName: function() {
//         return this.name;
//     }
// };
// const user2 = {
//     name: 'Arni',
// }
//
// const getName2 = user1.getName();
// console.log(getName2); // выводит Vic


const user1 = {
    age: 5,
    name: 'Vic',
    getName: function() {
        return this.name;
    }
};
const user2 = {
    name: 'Arni',
}

const getName2 = user1.getName.call(user2);
console.log(getName2); // выводит Arni
