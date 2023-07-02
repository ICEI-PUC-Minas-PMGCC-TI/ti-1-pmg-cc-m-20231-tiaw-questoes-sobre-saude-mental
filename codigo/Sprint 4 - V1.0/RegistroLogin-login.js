var aux;

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir envio do formulário

    // Obter valores do formulário
    var loginUsername = document.getElementById("login-username").value;
    var loginPassword = document.getElementById("login-password").value;

    // Verificar se o usuário existe (simulado)
    if (!checkExistingUser(loginUsername, loginPassword)) {
        alert("Senha ou Usuário incorreto. Por favor, verifique o nome de usuário, e-mail ou a senha.");
    }
    else{
        alert("Login bem-sucedido!");
        document.getElementById("login-form").reset(); // Resetar formulário
        salvarUsuárioLogado();
        // Redirecionar para a página do usuário (exemplo)
        window.location.href = "index.html";
    }
});

document.getElementById("register-link").addEventListener("click", function() {
    // Redirecionar para a página de registro
    window.location.href = "RegistroLogin-register.html";
});


function checkExistingUser(username, password) {
    let existingUser = false;
    var user = JSON.parse(localStorage.getItem("usuario"));
    console.log(user);
    for(let i = 0; i < user.usuario.length; i++){
        if(user.usuario[i].username = username && user.usuario[i].password == password){
            existingUser = true;
            aux = i;
        }
    }
    return existingUser;
}

function salvarUsuárioLogado(){
    let user = JSON.parse(localStorage.getItem("usuario"));
    let copia = user.usuario[aux];
    localStorage.setItem("login", JSON.stringify(copia));
}

window.onload = function() {
    user = JSON.parse(localStorage.getItem("usuario"));
    localStorage.setItem("login",JSON.stringify(user.usuario[0]));
}