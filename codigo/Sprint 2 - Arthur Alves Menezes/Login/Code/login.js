document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir envio do formulário

    // Obter valores do formulário
    var loginUsername = document.getElementById("login-username").value;
    var loginPassword = document.getElementById("login-password").value;

    // Verificar se o usuário existe (simulado)
    if (!checkExistingUser(loginUsername)) {
        alert("A conta não existe. Por favor, verifique o nome de usuário ou e-mail.");
        return;
    }

    // Verificar se a senha está correta (simulado)
    if (!checkPassword(loginUsername, loginPassword)) {
        alert("A senha está incorreta. Por favor, tente novamente.");
        return;
    }

    alert("Login bem-sucedido!");
    document.getElementById("login-form").reset(); // Resetar formulário

    // Redirecionar para a página do usuário (exemplo)
    window.location.href = "user.html";
});

document.getElementById("register-link").addEventListener("click", function() {
    // Redirecionar para a página de registro
    window.location.href = "register.html";
});

function checkExistingUser(username) {
    // Lógica para verificar se o usuário existe no banco de dados ou armazenamento
    // Neste exemplo simulado, sempre retornamos verdadeiro
    return true;
}

function checkPassword(username, password) {
    // Lógica para verificar se a senha está correta para o usuário
    // Neste exemplo simulado, sempre retornamos verdadeiro
    return true;
}
