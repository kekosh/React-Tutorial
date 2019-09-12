// for (var i = 0; i<10; i++){
//     console.log("fizz"+i+1);
// }

// array = ["hoge","fuga","nyan"];
// for(let x of array){
//     console.log(x);
// }

////arguments
////関数へ渡された引数を格納するオブジェクト(辞書型)
////関数においてあらかじめ宣言されている引数よりも多い引数が
////与えられて呼び出されて場合などに便利
// function add(){
//     let sum = 0;
//     for(let i = 0, j = arguments.length; i < j; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }

// var r = add(2,3,4,5);

// function avg(...args){
//     let sum = 0;
//     for(let val of args){
//         sum += val;
//     }
//     return sum / args.length;
// }
// var r = avg(2,3,4,5);

// r = "test".charAt(0);

// console.log(r);

// for(var x of [2,3,4,5]){
//     console.log(x);
// }

////関数.apply(null, Array)
////restパラメータ記法の引数に任意の配列を渡す。
////memo:restパラ記法に渡した値は配列として関数に渡されるため、
////     配列をそのまま渡すと2次元配列となってしまう。
// function avg(...args){
//     console.log(args);
//     var sum = 0;
//     for(let value of args){
//         sum += value;
//     }
//     return sum / args.length;
// }

// //var r = avg([2,3,4,5]);
// var r = avg.apply(null, [2,3,4,5]);
// console.log(r);


////無名関数
var n_avg = function(){
    var sum = 0;
    for (var i=0, j= arguments.length; i<j; i++){
        sum += arguments[i];
    }
    return sum /arguments.length;
}

var r = n_avg(2,3,4,5);
console.log(r);


