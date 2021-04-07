const count =(function(){
    let privateCounter =0;
      
    const addfunc=function(){
        privateCounter=privateCounter+1;
        console.log(privateCounter)
        };
    const resetfunc=function(){
        privateCounter=0;
        console.log(privateCounter) 
        };
        return{
            add:addfunc,
            reset:resetfunc,
            value:function(){
            return privateCounter;
        }
        };
})();

count.add();//prints 1
count.add();//prints 2
count.add();//prints 3
count.add();//prints 4

count.reset();//prints 0