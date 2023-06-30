let conteudo = [
    { id: 1, titulo: "RESPIRAÇÃO PARA INICIANTES", instrucao: "Lista de exercícios de respiração" },
    { id: 2, titulo: "ALONGAMENTO PARA INICIANTES", instrucao: "Lista de exercícios de alongamento" },
    { id: 3, titulo: "POSTURAS BÁSICAS PARA INICIANTES", instrucao: "Lista de exercícios de posturas básicas" }
];

for (let i = 0; i < conteudo.length; i++) {
    let conteudoDiv = document.getElementById(`conteudo-${conteudo[i].id}`);
    conteudoDiv.innerHTML = `
        <h1 class="titulo-conteudo">${conteudo[i].titulo}</h1>
        <a class="link-conteudo custom-link" href="conteudo.html?id=${conteudo[i].id}">${conteudo[i].instrucao}</a>
    `;
}


tela.innerHTML = textoHtml;
