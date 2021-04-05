var reverseString = function(string){
    reverse = ""
    for(var i = string.length - 1; i >= 0; i--){
        reverse += string[i]
    }
    return reverse
}
console.log(reverseString("hello"))