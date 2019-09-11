// for (var i = 0; i<10; i++){
//     console.log("fizz"+i+1);
// }

// array = ["hoge","fuga","nyan"];
// for(let x of array){
//     console.log(x);
// }

// function add(){
//     let sum = 0;
//     for(let i = 0, j = arguments.length; i < j; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }

// var r = add(2,3,4,5);

function avg(...args){
    let sum = 0;
    for(let val of args){
        sum += val;
    }
    return sum / args.length;
}
var r = avg(2,3,4,5);

console.log(r);