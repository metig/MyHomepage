let arr =[1,2,3,4];
let sum = arr.reduce(function (a, b){
    return a + b;
});

let multiply = arr.reduce(function (a, b){
    return a* b;
});
console.log(sum);
console.log(multiply)