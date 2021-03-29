function Fibo(n, a, b){
   
   if(a == 1){
       return 0;
   }
   if(a == 2){
       return 1;
   }
    //return Fibo(n-1) + Fibo(n-2);
    return Fibo(a) + Fibo(b);
  
    
}
function printFibo(n,a,b){
    for(let i =0; i<n; i++){
        console.log(Fibo(i,a,b));
    }
}
console.log(printFibo(9, 1 , 2));