//alert("Hello, world!")
window.onload = function() {
    "use strict";
    document.getElementById("bling").addEventListener("change", e => {
        if(e.target.checked){
            alert("bling")
            document.getElementById("textarea").style.fontWeight = "bold";
            document.getElementById("textarea").style.color = "green";
            document.getElementById("textarea").style.textDecoration = "underline";
        } else {
            document.getElementById("textarea").style.fontWeight = "normal";
            document.getElementById("textarea").style.color = "black";
            document.getElementById("textarea").style.textDecoration = "none";
        }
    });
    const largerFont = document.getElementById("bigger").addEventListener('click', fontChange);
    function fontChange(){
        document.getElementById("textarea").style.fontSize = "200%";
    }
   
}





