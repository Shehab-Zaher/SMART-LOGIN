var loginForm = document.getElementById('loginForm')
var loginEmail = document.getElementById('loginEmail');
var loginPass = document.getElementById('loginPass');
var errAlert = document.getElementById('errAlert')
var succAlert = document.getElementById('succAlert')

var users = []
    
if (JSON.parse(localStorage.getItem('users')) !== null) {
    users = JSON.parse(localStorage.getItem('users'))
}

loginForm.addEventListener('submit' ,function(e){
e.preventDefault()
logg()
})

function logg(){
    userLog = {
        email:loginEmail.value,
        pass:loginPass.value
    }

    if (isHere(userLog)==true) {
    
        errAlert.classList.replace('d-block' , 'd-none')
        location.href = 'home.html'
        
    }
    else{
        errAlert.classList.replace('d-none' , 'd-block')
    }
}
  
function isHere(userLog){
for (var i = 0; i < users.length; i++) {
    if (users[i].email.toLowerCase() == userLog.email.toLowerCase() &&
     users[i].pass.toLowerCase() == userLog.pass.toLowerCase()) {
        localStorage.setItem('userN' , JSON.stringify(users[i].name))
        return true
    }
    
}
}
