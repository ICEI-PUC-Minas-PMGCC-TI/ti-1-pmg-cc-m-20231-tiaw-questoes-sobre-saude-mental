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

    let imagens = [];//Definindo Imagens da Capa do Conteúdo
    let descricaoResumida = []//Definindo a descrição resumida do conteúdo
    let titulo = [];//Definindo Títulos do Conteúdo
    for(let i = 0; i < objDados.content[value - 1].conteudo.imagens.length; i++){
        imagens[i] = document.getElementsByClassName("card-img-top").item(i);
        imagens[i].setAttribute("src",objDados.content[value - 1].conteudo.imagens[i]);
        titulo[i] = document.getElementsByClassName("card-title").item(i);
        titulo[i].innerHTML = objDados.content[value - 1].conteudo.titulos[i];
        descricaoResumida[i] = document.getElementsByClassName("card-text").item(i);
        descricaoResumida[i].innerHTML = objDados.content[value - 1].conteudo.descricoesResumidas[i];
    }
    
    
    

}
function EscutadorBotoes(){

    document.getElementsByClassName("btn").item(0).addEventListener("click",function(){
        localStorage.setItem("opcoes2", 1);
    })
    
    document.getElementsByClassName("btn").item(1).addEventListener("click",function(){
        localStorage.setItem("opcoes2", 2);
    })
    
    document.getElementsByClassName("btn").item(2).addEventListener("click",function(){
        localStorage.setItem("opcoes2", 3);
    })

    }




window.onload = function () {
    let valor = localStorage.getItem("opcoes");
    localStorage.setItem("opcoes2", 0);
    EscutadorBotoes();      
    ImprimirConteudo(valor);
}