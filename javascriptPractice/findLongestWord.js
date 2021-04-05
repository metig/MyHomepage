var longstWord = function(words){
    if(words.length < 1 ){
        return null
    }
    if(words.length == 1){
        return words[0].length
    }
    var maxLength = 0;
    
    for(var i = 0; i < words.length; i++){
       if(words[i].length > maxLength) {
           maxLength = words[i].length;
       }
        
    }
    return maxLength;
}
var words = ['hello', 'hl', 'laelslaldmjd']
console.log(longstWord(words))