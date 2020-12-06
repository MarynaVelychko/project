"use strict";

console.log('arr' + '-obj');
console.log(4 + '-obj');
console.log(4 + +'5');

let incr = 10,
    decr = 10;
incr++; //оператор инкремен увеличывает на 1
decr--; //оператридекремента уменьшает на 1
++incr; 
--decr; // впереди (префексные) сзади(постфиксные)
console.log(incr);
console.log(decr);

console.log(5%2); // % возвращает остаток от деления
console.log(2*4 == 8); // == сравненые по значению
console.log(2*4 === 8); // === строгое равенство по типу

const isChecked = true;
const isClosed = true;
console.log(isChecked && isClosed); //оператор И если оба true вернет true

const isChecked1 = true;
const isClosed1 = false;
console.log(isChecked1 || isClosed1); // оператор ИЛИ еслы хотя б один true вернет true

