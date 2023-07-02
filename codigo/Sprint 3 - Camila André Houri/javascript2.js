let conteudo = [
    { id: 1, titulo: "MINDFULNESS", instrucao: "Confira!" },
    { id: 2, titulo: "AO AR LIVRE", instrucao: "Confira!" },
    { id: 3, titulo: "OUTROS ESTILOS", instrucao: "Confira!" }
];

for (let i = 0; i < conteudo.length; i++) {
    let conteudoDiv = document.getElementById(`conteudo-${conteudo[i].id}`);
    conteudoDiv.innerHTML = `
        <h1 class="titulo-conteudo">${conteudo[i].titulo}</h1>
        <button class="btn-confira" onclick="location.href='conteudo.html?id=${conteudo[i].id}'">${conteudo[i].instrucao}</button>
    `;
    let btnConfira = conteudoDiv.querySelector('.btn-confira');
    btnConfira.style.marginLeft = "auto";
    btnConfira.style.marginRight = "auto";
    btnConfira.style.display = "block";
}
