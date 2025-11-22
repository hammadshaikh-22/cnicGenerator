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

    //Name validation

    if (userName.value == ""){
        userNameError.innerText = 'Please enter your name.'
    }
    else if(userName.value.length < 5){
        userNameError.innerText = "Username must be greater than 5 letters."
    }
    else{
        userNameError.innerText = ""
    }

    //Email validation

    if (email.value == ""){
        emailError.innerText = "Please enter your email address."
    }
    else if(!email.value.includes("@")){
        emailError.innerText = "Enter correct email address."
    }
    else{
        emailError.innerText = ""
    }

    //Password validation

    if(password.value == ""){
        passwordError.innerText = "Please enter a password"
    }
    else if(password.value.length < 8){
        passwordError.innerText = "Password must be greater than or equal to 8 characters"
    }
    else{
        passwordError.innerText = ""
    }

    //Age error
    if(age.value == 0){
        ageError.innerText = "Please enter your age"
    }
    else if(age.value < 18){
        ageError.innerText = "Your age must be greater than 18 to be eligible for cnic"
    }
    else{
        ageError.innerText = ""
    }

    //contact validation

    if(contact.value == 0){
        contactError.innerText = "Please enter your contact number"
    }
    else if(contact.value.toString().length != 11){
        contactError.innerText = "Contact number must be of 11 numbers"
    }
    else{
        contactError.innerText = ""
    }

    //CNIC Generation
    var cnicc = Math.random()
    console.log(cnicc)


    // if(contactError.innerText == "" && ageError.innerText == "" && passwordError.innerText == "" && emailError.innerText == "" &&userNameError.innerText == ""){
    //     cnic.value == Math.random(100000000000)
    // }
}