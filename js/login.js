
      // using addeventlistener
 document.getElementById("submit").addEventListener("click", printCredential);

     // using .onclick
//   const submit = document.getElementById("submit");
//   submit.onclick = printCredential;
 
 function printCredential(){
     // alternative
     // var email = document.getElementById("email");

     var email = document.form1.email.value;
     var password = document.form1.password.value;
     var website = document.form1.website.value;
     console.log(email + "\n" + password + "\n" + website);
    
 }
 
