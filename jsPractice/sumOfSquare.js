function computeSumOfSquaresOfEvensOnly(arr){
    var ans = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 == 0){
        //    ans += arr[i]* arr[i];
        ans +=  Math.pow(arr[i], 2);
        }
    }
    return ans;
}
console.log(computeSumOfSquaresOfEvensOnly([1,2,3,4]));