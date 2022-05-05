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
// console.log(getName()); // выводит Vic 2 - из глобальной области видимости (var name = 'Vic 2')

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
// const getName = user1.getName;
// console.log(getName()); // выводит Vic 2 - из глобальной области видимости (var name = 'Vic 2') либо не выведет вообще ничего, если рассматривать это задание (#5) без привязки к предыдущему (#4)

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

const getName2 = user1.getName.call(user2); // используем метод call
console.log(getName2); // выводит Arni

// const getName2 = user1.getName.bind(user2); // используем метод bind
// console.log(getName2()); // выводит Arni
