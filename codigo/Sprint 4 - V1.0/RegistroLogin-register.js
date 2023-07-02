document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir envio do formulário

    // Obter valores do formulário
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var password = document.getElementById("password").value;
    var administrador = document.getElementById("admin").checked;
    

    // Validar idade do usuário
    var currentDate = new Date();
    var birthDate = new Date(dob);
    var age = Math.floor((currentDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000));

    if (age < 15) {
        alert("Você deve ter pelo menos 15 anos para se registrar.");
        return;
    }

    // Validar comprimento da senha
    if (password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return;
    }

    // Verificar se o usuário ou e-mail já estão registrados (simulado)
    if (checkExistingUser(username, email)) {
        alert("O nome de usuário ou e-mail já foi registrado. Por favor, escolha outro.");
        document.getElementById("register-form").reset(); // Resetar formulário
    }
    else{
    // Salvar os dados do usuário no armazenamento (simulado)
    saveUser(username, email, dob, password, administrador);

    alert("Registro concluído com sucesso!");
    document.getElementById("register-form").reset(); // Resetar formulário

    // Redirecionar para a página de login
    window.location.href = "RegistroLogin-login.html";
    }

});

document.getElementById("login-link").addEventListener("click", function() {
    // Redirecionar para a página de login
    window.location.href = "RegistroLogin-login.html";
});

function checkExistingUser(username, email) {
    existingUser = false;
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    for(let i = 0; i < usuario.usuario.length; i++){
        if(usuario.usuario[i].username == username || usuario.usuario[i].email == email) {
            existingUser = true;
        }
    }

    return existingUser;
}

function saveUser(username, email, dob, password, administrador) {
    let user = JSON.parse(localStorage.getItem("usuario"));
    let newuser = {
        "username": username,
        "email": email,
        "dob": dob,
        "password": password,
        "administrador": administrador
    }
    user.usuario.push(newuser);
    salvar(user);
}

function salvar(value){
    localStorage.setItem("usuario", JSON.stringify(value));
}

window.onload = function() {
    verificaLocalStorage();
}

function verificaLocalStorage(){
    strDados = localStorage.getItem("usuario");
    if(!strDados){
        let user = {
            "usuario":[{
            "username": "",
            "email": "",
            "dob": "",
            "password": "",
            "administrador": false,
        },]};
        localStorage.setItem("usuario", JSON.stringify(user));
    }
}
