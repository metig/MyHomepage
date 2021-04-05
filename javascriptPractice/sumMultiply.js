var array= [1, 2, 3, 4]
var sum = function(array){
    var sumNum = 0
    for(let i = 0; i < array.length; i++){
         sumNum += array[i]
    }
    return sumNum
}
var multiply = function(array){
    product = 1
    for(let i = 0; i < array.length; i++){
        product *= array[i]
   }
   return product
}

console.log(sum(array))
console.log(multiply(array))