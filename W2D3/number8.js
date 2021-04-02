let counter =0;
function make_adder (inc){
    return function(){
         return counter += inc;
    }
}
/* const add=make_adder(7)
console.log(add())//7
add()//makes 14 but not printed
console.log(add())//21
console.log(add())//28 */
const add=make_adder(5)
console.log(add())//5
console.log(add())//10
console.log(add())//15