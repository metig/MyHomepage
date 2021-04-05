function maxOfThree(x, y, z){
    if(x == y && y == z){
        return null
    }
    if(x>=y && x>=z){
        return x;
    } else if(y >= x && y >= z){
        return y;
    } else {
        return z;
    }
}
var ans = maxOfThree(1, 7, 7)
console.log(ans)