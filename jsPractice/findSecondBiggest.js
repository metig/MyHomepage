function findSecondBiggest(array){

    var max = Number.MIN_VALUE;
    var secondMax = Number.MIN_VALUE;
    for(i=0; i<array.length; i++){
        if(array[i]> max){
            secondMax = max;
            max= array[i];      
        } 
        if(secondMax < array[i] && max > array[i]){
            secondMax = array[i];
        }
    }
    return secondMax;
}
console.log(findSecondBiggest([19,9,11,0,12]) );