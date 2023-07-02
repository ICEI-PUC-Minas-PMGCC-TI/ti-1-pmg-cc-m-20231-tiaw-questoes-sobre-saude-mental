window.onload = function(){

    user = JSON.parse(localStorage.getItem("login"));
    if(user){
        if(user.administrador == true){
            document.getElementById("cadastro").style.display = "block";
        }
        else{
            document.getElementById("cadastro").style.display = "none";
        }
    }
}