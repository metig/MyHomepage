"use strict";

console.log("Hello - Login Form");

$(document).ready(function() {

    // Define a constructor function for User objects
    function User(emailAddress, password, rememberMe) {
        this.emailAddress = emailAddress;
        this.password = password;
        this.rememberMe = rememberMe;
    }

    User.prototype.toString = function() {
        return `{EmailAddress: ${this.emailAddress}, Password: ${this.password}, RememberMe: ${this.rememberMe}}`;
    }

    // Setup the form submit event-handler
    $("#loginForm").submit(
        event => {
            event.preventDefault();
            const strEmailAddr = $("#txtEmailAddr").val();
            const strPassword = $("#txtPwd").val();
            const strRememberMe = ($("#chkRememberMe").is(":checked")) ? "yes" : "no";

            const newUser = new User(strEmailAddr, strPassword,strRememberMe);
            console.log(newUser.toString());
        }
    );
});

