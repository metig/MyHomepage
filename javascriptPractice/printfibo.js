function Fibo(n, a, b){

    console.log(a);
    console.log(b);

    for(let i = 0; i <= n-2; i++){
        let c = a + b;
        console.log(c);
        a = b;
        b = c;
    }
   
}
a = 0;
b = 1;
n = 7;
console.log(Fibo(n, a, b))