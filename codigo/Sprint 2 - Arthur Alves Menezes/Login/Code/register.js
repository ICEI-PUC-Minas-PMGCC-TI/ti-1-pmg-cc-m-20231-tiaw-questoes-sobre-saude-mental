document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir envio do formulário

    // Obter valores do formulário
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var password = document.getElementById("password").value;

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
        return;
    }

    // Salvar os dados do usuário no armazenamento (simulado)
    saveUser(username, email, dob, password);

    alert("Registro concluído com sucesso!");
    document.getElementById("register-form").reset(); // Resetar formulário

    // Redirecionar para a página de login
    window.location.href = "login.html";
});

document.getElementById("login-link").addEventListener("click", function() {
    // Redirecionar para a página de login
    window.location.href = "login.html";
});

function checkExistingUser(username, email) {
    // Lógica para verificar se o usuário ou e-mail já existem no banco de dados ou armazenamento
    // Neste exemplo simulado, sempre retornamos falso
    return false;
}

function saveUser(username, email, dob, password) {
    // Lógica para salvar os dados do usuário no banco de dados ou armazenamento
    // Neste exemplo simulado, não fazemos nada
}
