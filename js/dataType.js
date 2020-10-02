"use strict";
let number = 4.6; // дробное число


console.log(4/0); //infinity бесконечность

console.log('string'*9); //NaN not a number

const person = 'Alex'; //строка задаеться через "" '' ``

const bool = true; //boolean (true, false)

console.log(something); // null чегото просто не существует

let und;
console.log(und); //undefined чтото существует но у него нет значения

//Обекты
const obj={
    name:"Jone",
    age:27,
    isMarried:true // свойства обекта
};

console.log(obj.age);
console.log(obj["name"]); // два способа достучаться к свойству

let arr = ['plum.png', 'orange.jpeg', 6, {}]; //массив
console.log (arr[1]);
