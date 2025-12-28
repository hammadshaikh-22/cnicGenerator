var userName = document.getElementById('name')
var email = document.getElementById('email')
var password = document.getElementById('password')
var age = document.getElementById('age')
var contact = document.getElementById('contact')
var cnic = document.getElementById('cnic')

var userNameError = document.getElementById('nameError')
var emailError = document.getElementById('emailError')
var passwordError = document.getElementById('passwordError')
var ageError = document.getElementById('ageError')
var contactError = document.getElementById('contactError')

function submit(){
    var hasError = false

    //Name validation

    if (userName.value == ""){
        userNameError.innerText = 'Please enter your name.'
        hasError = true
    }
    else if(userName.value.length < 5){
        userNameError.innerText = "Username must be greater than 5 letters."
        hasError = true
    }
    else{
        userNameError.innerText = ""
        hasError = false
    }

    //Email validation

    if (email.value == ""){
        emailError.innerText = "Please enter your email address."
        hasError = true
    }
    else if(!email.value.includes("@")){
        emailError.innerText = "Enter correct email address."
        hasError = true
    }
    else{
        emailError.innerText = ""
        hasError = false
    }

    //Password validation

    if(password.value == ""){
        passwordError.innerText = "Please enter a password"
        hasError = true
    }
    else if(password.value.length < 8){
        passwordError.innerText = "Password must be greater than or equal to 8 characters"
        hasError = true
    }
    else{
        passwordError.innerText = ""
        hasError = false
    }

    //Age error
    if(age.value == 0){
        ageError.innerText = "Please enter your age"
        hasError = true
    }
    else if(age.value < 18){
        ageError.innerText = "Your age must be greater than 18 to be eligible for cnic"
        hasError = true
    }
    else{
        ageError.innerText = ""
        hasError = false
    }

    //contact validation

    if(contact.value == 0){
        contactError.innerText = "Please enter your contact number"
        hasError = true
    }
    else if(contact.value.toString().length != 11){
        contactError.innerText = "Contact number must be of 11 numbers"
        hasError = true
    }
    else{
        contactError.innerText = ""
        hasError = false
    }

    //CNIC Generation

    if (hasError == false){
        var cnicNo = (Math.random()*10000000000000).toFixed()
        cnicNo = cnicNo.toString().substring(0,4)+"-"+ cnicNo.toString().substring(4,12)+"-"+cnicNo.toString().substring(12,13)
        // console.log(cnic)
        cnic.value = cnicNo

    }
    

}