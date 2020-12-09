"use strict";

//function declaration
let num=20;// глобальная переменная
function showFirstMessage(text){
    console.log(text);
    let num=10;// локальная переменная которая  не доступна за пределами функции
    console.log(num);//вернет 10
}
showFirstMessage("hello world");
console.log(num);// вернет 20


function calc(a,b) 
{
    return a+b;
}
console.log(calc(4,5));


function ret(){
    let num=50;
    return(num);
}
let anotherNum=ret();
console.log(anotherNum);


//function expretion
let logger=function(){
    console.log("hello");
};
logger();

//стрелочная функция

const calc2=(a,b)=>a+b;
console.log(calc2(2,5));

