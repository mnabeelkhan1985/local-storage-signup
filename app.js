function signupFunction(){

    var userName = document.getElementById("username")
        var userEmail = document.getElementById('userEmail');
        var myPsw = document.getElementById('myPsw');
        var email_validator_regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        
        
    
        if(userEmail.value.length == 0){
            alert('Please fill in email');
    
        }else if(myPsw.value.length == 0 || myPsw.value.length < 5 ){
            alert('Password minimum leght will be 6 with 1 Uppercase letter and 1 number aatleast');
    
        }else if(userName.value.length == 0 && myPsw.value.length == 0){
            alert('Password And Username Min lenght will be 6');
    
      
    
        }else if(!myPsw.value.match(numbers)){
            alert('please add 1 number');
    
        }else if(!myPsw.value.match(upperCaseLetters)){
            alert('please add 1 uppercase letter');
    
        }else if(!myPsw.value.match(lowerCaseLetters)){
            alert('please add 1 lovercase letter');
    
        }else if (!userEmail.value.match(email_validator_regex)){
            alert("Please fill Correct Email")
        }
        else if (userName.value.length < 5  ){
    alert ("Please fill At least 6 letters in UserName ")
        }
        else{
            localStorage.setItem('userName',userName.value)
            localStorage.setItem('userEmail', userEmail.value);
            localStorage.setItem('myPsw', myPsw.value);
            alert('Your account has been created');
            window.location.href = "login.html"
        }
    
        
    }
    //checking
function check(){
    var storedName = localStorage.getItem('userEmail');
    var storedPw = localStorage.getItem('myPsw');
    var storeUser = localStorage.getItem('userName')

    var checkName = document.getElementById('emailcheck');
    var checkPsw = document.getElementById('passwordcheck');
    var checkRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPsw.value == storedPw){
        alert('You are logged in.');
        window.location.href = "home1.html"
       
    }else{
        alert('Please Sign up First');
    }
    
}
function back (){
    window.location.href = "index.html"
}
var storeUser = localStorage.getItem('userName')
var welcome = document.getElementById("ac")


function logOut (){
    window.location.href = "login.html" 
}