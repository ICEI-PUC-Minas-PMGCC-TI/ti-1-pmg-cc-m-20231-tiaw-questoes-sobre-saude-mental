function RecebendoConteudo() {
    let strDados = localStorage.getItem("Armazem");
    let objDados = JSON.parse(strDados);

    return objDados;
}

function ImprimirConteudo(value,value1) {
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
if(value1 - 1 == 1){    
let imagens = objDados.content[value1 - 1].conteudo.imagens[value - 1];//Definindo Imagens da Capa do Conteúdo
let Ingrdientes = objDados.content[value1 - 1].conteudo.descricoes[value - 1].Ingrdientes;//Definindo os ingredientes a serem utilizados
let modoPreparo = objDados.content[value1 - 1].conteudo.descricoes[value - 1].modoPreparo;
let titulo = objDados.content[value1 - 1].conteudo.titulos[value - 1];//Definindo Títulos do Conteúdo
let strMain = "";
let strAside = "";
let Main = document.getElementById("image");
let Aside = document.getElementById("title-description");
strMain += `<img src="${imagens}">`;
strAside += `<h1>${titulo}</h1><h2>Ingredientes:</h2><ul>`;
for(let i = 0; i < Ingrdientes.length; i++){
    strAside += `<li>${Ingrdientes[i]}</li>`;
}
strAside += `</ul><h2>Modo de Preparo:</h2><ul>`;
for(let i = 0; i < modoPreparo.length; i++){
    strAside += `<li>${modoPreparo[i]}</li>`;
}
strAside += `</ul>`;
Main.innerHTML = strMain;
Aside.innerHTML = strAside;
    }
    else{
        let imagens = objDados.content[value1 - 1].conteudo.imagens[value - 1];//Definindo Imagens da Capa do Conteúdo
        let titulo = objDados.content[value1 - 1].conteudo.titulos[value - 1];//Definindo Títulos do Conteúdo
        let strMain = "";
        let strAside = "";
        let Main = document.getElementById("image");
        let Aside = document.getElementById("title-description");
        let conteudo = objDados.content[value1 - 1].conteudo.descricoes[value - 1];//Definindo Descrição do Conteúdo
        strAside += `<h1>Titúlo: ${titulo}</h1><h2>Proposta: ${conteudo}</h2>`;
        strMain += `<img src="${imagens}">`;
        Main.innerHTML += strMain;
        Aside.innerHTML = strAside;
    }
}


window.onload = function () {
    let valor1 = localStorage.getItem("opcoes");
    let valor = localStorage.getItem("opcoes2");
    ImprimirConteudo(valor,valor1);
}