function filter(words, int){
    if(words.length < 1 || int < 0){
        return null;
    }
    var arr = [];
   for(let i=0; i<words.length; i++){
    if(words[i].length > int){
        arr.push( words[i])
    }
  }
  return arr;
}
var words=["hi", "hello", "rrheuy"];
var int = 3;
console.log(filter(words, int))