function RecebendoConteudo() {
    let strDados = localStorage.getItem("Armazem");
    let objDados = JSON.parse(strDados);

    return objDados;
}

function ImprimirConteudo(value) {
    //Lendo dados do local storage
    let objDados = RecebendoConteudo();

 /* Exemplo:  
    
    //Configurando tela
    let tela = document.getElementById("tela");
    let strHtml = "";

    //Configurando id
    let id = objDados.content[value - 1].id;
    strHtml += `<h1>Id: ${id} </h1>`;

    //Configurando conteudo
    for (let i = 0; i < objDados.content[value - 1].conteudo.length; i++) {
        let conteudo = objDados.content[value - 1].conteudo[i].teste;
        strHtml += `<h2>conteúdo: ${conteudo}</h2>`;
        console.log(i);
    }
    tela.innerHTML = strHtml; */

            let imagem = objDados.conteudo[value].categoria.subCategoria.imagem;
            let conteudo = objDados.conteudo[value].categoria.subCategoria.conteudo;
            let titulo = objDados.conteudo[value].categoria.subCategoria.titulo;
            let descricao = objDados.conteudo[value].categoria.subCategoria.descricao;
            let strMain = "";
            let strAside = "";
            let Main = document.getElementById("image");
            let Aside = document.getElementById("title-description");
            let lista = conteudo.split(["-"]);
            strMain += `<img src="${imagem}">`;
            strAside += `<h1>Título: ${titulo}</h1><h2>Descrição: ${descricao}</h2><h2>Instruções:</h2><ul>`;
            for(let i = 1; i < lista.length; i++){
                strAside += `<li>${lista[i]}</li>`;
            }
            strAside += `</ul>`;
            Main.innerHTML = strMain;
            Aside.innerHTML = strAside;
}

window.onload = function () {
    let valor = JSON.parse(localStorage.getItem("escolhaConteudoindividual"));
    console.log(valor);
    ImprimirConteudo(valor);
}