var welMsg = document.getElementById('welMsg')




window.addEventListener('load' , function(){
    if (JSON.parse(localStorage.getItem('userN')) !== null) {
          welMsg.innerHTML = `Welcome ${JSON.parse(localStorage.getItem('userN')) }`
    }else{
        welMsg.innerHTML= ''
    }
})