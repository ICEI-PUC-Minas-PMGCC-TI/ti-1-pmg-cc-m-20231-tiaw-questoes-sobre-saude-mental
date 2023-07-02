function RecebendoConteudo() {
    let strDados = localStorage.getItem("Armazem");
    let objDados = JSON.parse(strDados);
    console.log(objDados);

    return objDados;
}

function ImprimirConteudo() {
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
    
    let atividadeEscolhida = localStorage.getItem("tipoAtividadeRecreativa");
    console.log(atividadeEscolhida);
    let imagens = [];//Definindo Imagens da Capa do Conteúdo
    let descricaoResumida = []//Definindo a descrição resumida do conteúdo
    let titulo = [];//Definindo Títulos do Conteúdo
    let tela = document.getElementById("tela");
    let cards = ["","",""];
    let contador = 0;
    for (let i = 1; i < objDados.conteudo.length; i++){
        if (objDados.conteudo[i].categoria.id == "exRecreativo" && objDados.conteudo[i].categoria.subCategoria.id2 == atividadeEscolhida) {
            {
            titulo[contador] = objDados.conteudo[i].categoria.subCategoria.titulo;
            imagens[contador] = objDados.conteudo[i].categoria.subCategoria.imagem;
            descricaoResumida[contador] = objDados.conteudo[i].categoria.subCategoria.descricao;
            cards[contador] += `<div class="card" style="width: 18rem;">
            <img src="${imagens[contador]}" class="card-img-top" alt="..." width="200" height="250">
            <div class="card-body">
              <h5 class="card-title">${titulo[contador]}</h5>
              <p class="card-text">${descricaoResumida[contador]}</p>
              <a href="AtividadeRecreativa-Individual.html" class="btn btn-primary" onclick="localStorage.setItem('escolhaConteudoindividual', ${i});">Clique aqui para ser redirecionado</a>
            </div>
          </div>`;
          tela.innerHTML += cards[contador];
        contador++;
            }
        }
    }
}
    
window.onload = function () {
    ImprimirConteudo();
}