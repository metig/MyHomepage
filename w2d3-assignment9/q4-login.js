/* 
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
 */
$(document).ready(function(){
    "use strict"
    
    function User(email, password, website){
        this.email = email;
        this.password = password;
        this.website = website;
    }

    User.prototype.toString = function(){
        return `{email: ${this.email}, password: ${this.password}, website: ${this.website}}`;
    }
    $("#form1").submit(
        event =>{
            event.preventDefault();
            const userEmail = $("#email").val();
            const userPassword = $("#password").val();
            const userWebsite = $("#website").val();


            const newUser = new User(userEmail, userPassword, userWebsite);
            console.log(newUser.toString());
        }
    )

})