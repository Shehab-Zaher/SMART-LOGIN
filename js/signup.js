var registForm = document.getElementById('registForm')
var signUpName = document.getElementById('signUpName')
var signUpEmail = document.getElementById('signUpEmail')
var signUpPass = document.getElementById('signUpPass')
var nameAlert = document.getElementById('nameAlert')
var emailAlert = document.getElementById('emailAlert')
var passwordAlert = document.getElementById('passwordAlert')
var existAlert = document.getElementById('existAlert')
var successAlert = document.getElementById('successAlert')

var users = []

if (localStorage.getItem('users') !==null) {
    users = JSON.parse(localStorage.getItem('users'))
}

registForm.addEventListener('submit' , function(e){
    e.preventDefault()
   if(checkIfAllInputsValid()){
    
    addUser()
   }else{
    console.log(' err data');
   }
})

function validateAllInputs( regex , inputSign , alertMsg){
    var pattern = regex

    if(pattern.test(inputSign.value)==true){
        alertMsg.classList.replace('d-block' , 'd-none')
        return true
       
    }else{
        alertMsg.classList.replace('d-none' , 'd-block')
        return false 

    }
}





function addUser(){
    var newUser = {
        name:signUpName.value,    
        email:signUpEmail.value,
        pass:signUpPass.value}

        if(isHere(newUser) == true){
            existAlert.classList.replace('d-none' , 'd-block')
            successAlert.classList.replace('d-block' , 'd-none')
            
        }
        else{
            users.push(newUser)
            localStorage.setItem('users' ,JSON.stringify(users)  )
            existAlert.classList.replace('d-block' , 'd-none')
            successAlert.classList.replace('d-none' , 'd-block')

           
            location.href='index.html'
            
        }
       
            
}

function isHere(newUser){

    for (var i = 0; i < users.length; i++) {
        
        if(users[i].email.toLowerCase() == newUser.email.toLowerCase()){
            console.log('emial is herre');
         return false
        }
    }
}



function checkIfAllInputsValid(){
    if(validateAllInputs(/^[a-zA-Z]{2,}$/ , signUpName , nameAlert) &&
     validateAllInputs(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/ , signUpEmail , emailAlert)
      && validateAllInputs(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/ , signUpPass , passwordAlert)    
          ){
            return true
    }else{
        return false
    }
}