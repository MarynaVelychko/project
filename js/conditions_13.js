"use strict";
if (4==9) {
    console.log("ok");
} else{
console.log("error");
}


// if (num<49){
//     console.log('Error');
// } else if (num>100){
//     console.log("много");
// } else{
//     console.log("Ok");
// }


// (num===50)? console.log('OK'):console.log('Error'); 
//тернарное условые если условые в () правыльное то выполняется после ? еслы нет то после :


const num=50;
switch (num){
    case 49:
        console.log("Error");
        break;
    case 100:
        console.log("Error");
        break;
    case 50:
        console.log("В точку");
        break;
    default:
        console.log("не в этот раз");
        break;
}