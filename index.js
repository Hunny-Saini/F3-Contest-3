let nameVal = document.getElementById("user-name");
let emailVal = document.getElementById("user-email");
let passVal = document.getElementById("user-password");
let cPassVal = document.getElementById("user-cpassword");



let errorMessage = document.querySelector(".error");
let successMessage = document.querySelector(".sucsess");
let missMatchMessage = document.querySelector(".pass-mismatch");

const signupBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logoutBtn");

//checking if user is already logged-in
if(localStorage.getItem("user")){
    window.location.href = "profile.html";
}

signupBtn.addEventListener("click",signUp);
function signUp(event){
    event.preventDefault();
    //checking if all input field is filled
    if(nameVal.value == "" || emailVal.value == "" || passVal.value == "" || cPassVal.value ==""){
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
        missMatchMessage.style.display = "none";
        return;
    }else{
        if(passVal.value != cPassVal.value){
            successMessage.style.display = "none";
            errorMessage.style.display = "none";
            missMatchMessage.style.display = "block";
            return;
        } else{
            errorMessage.style.display = "none";
            successMessage.style.display = "block";
            missMatchMessage.style.display = "none";
            console.log(nameVal.value,emailVal.value,passVal.value,cPassVal.value);
        }
        
    }

    //setting user in local storage
    var userObj = {
        name : nameVal.value,
        email : emailVal.value,
        password : passVal.value,
        token: genAccessToken(16),
    }
    localStorage.setItem("user",JSON.stringify(userObj));
    window.location.href = "profile.html";
};

//Creating token's
function genAccessToken(length) {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    var charLength = chars.length;
    var result = '';
    for ( var i = 0; i < length; i++ ) {
       result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
 }