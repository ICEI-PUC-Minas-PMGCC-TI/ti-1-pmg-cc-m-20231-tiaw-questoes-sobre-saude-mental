function atualizadorSubCategoria() {
    let categoria = document.getElementById("escolhaCategoria").value;
    let i;
    let valores = [["Escrita", "Receita", "Desenho",],["Respiracao","Alongamento","Yoga"],["Mindfulnes","ArLivre","Outros"]];
    if (categoria == "exRecreativo") {
        i = 0;
    }
    else if(categoria == "exFisico") {
        i = 1;
    }
    else if(categoria == "exMeditacao"){
        i = 2;
    }
    for(let j = 0; j < valores[i].length; j++){
        let subCategoria = document.getElementsByClassName("valorSubCategoria")[j];
        subCategoria.value = valores[i][j];
        subCategoria.innerText = valores[i][j];
        console.log(subCategoria);
    }
    
}

function escutadorMudancas() {
    let categoria = document.getElementById("escolhaCategoria");
    categoria.onchange = function () {
        let categoria = document.getElementById("escolhaCategoria").value;
        if (categoria == "musica" || categoria == "categoria") {
            document.getElementById("escreverConteudo").style.display = "none";
            document.getElementById("escolhaSubCategoria").style.display = "none";
        } else {
            document.getElementById("escreverConteudo").style.display = "block";
            document.getElementById("escolhaSubCategoria").style.display = "block";
            atualizadorSubCategoria();
        }
    };
}


window.onload = function () {
    document.getElementById("escreverConteudo").style.display = "none";
    document.getElementById("escolhaSubCategoria").style.display = "none";
    imprimirDados();
    escutadorMudancas();
}

function leDados() {
    let strDados = localStorage.getItem('Armazem');
    let objDados = {};
    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = {
            conteudo: [{
                "categoria": {
                    "id":"",
                    "subCategoria":{
                        "id2": "",
                        "titulo":"",
                        "descricao":"",
                        "arquivo":"",
                        "conteudo":"",
                        "imagem":"",
                    }
                }
            }]
        };
    }
    return objDados;
}

function Salvar(dados) {
    localStorage.setItem('Armazem', JSON.stringify(dados));
}

function incluirDados() {
    // Ler dados do LocalStorage
    let objDados = leDados();

    // Incluir um novo dado
    let titulo = document.getElementById("escolhaTitulo").value;
    let categoria = document.getElementById("escolhaCategoria").value;
    let subCategoria = document.getElementById("escolhaSubCategoria").value;
    let descricao = document.getElementById("escolhaDescricao").value;
    let arquivo = document.getElementById("escolhaArquivo").value;
    let conteudo = document.getElementById("escolhaConteudo").value;
    let imagem = document.getElementById("linkImg").value;

    let novoConteudo = {
        "categoria": {
            "id":categoria,
            "subCategoria":{
                "id2": subCategoria,
                "titulo": titulo,
                "descricao": descricao,
                "arquivo": arquivo,
                "conteudo": conteudo,
                "imagem":imagem,
            }
        }
    };
    objDados.conteudo.push(novoConteudo);
    // Salvar os dados
    Salvar(objDados);
}

function imprimirDados() {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados();
    for (let cont = (objDados.conteudo.length - 1); cont < objDados.conteudo.length; cont++) {
        let titulo = objDados.conteudo[cont].categoria.subCategoria.titulo;
        console.log("" + titulo);
        let categoria = objDados.conteudo[cont].categoria.id;
        if (categoria == "categoria") {
            categoria = "";
        }
        strHtml += `<h3>Título: ${titulo}</h3><p>Categoria: ${categoria}</p>`;
    }
    tela.innerHTML = strHtml;
}

function limpaCampos() {
    let titulo = document.getElementById("escolhaTitulo");
    let descricao = document.getElementById("escolhaDescricao");
    let categoria = document.getElementById("escolhaCategoria");
    let conteudo = document.getElementById("escolhaConteudo");
    let subCategoria = document.getElementById("escolhaSubCategoria");

    titulo.value = "";
    categoria.value = "categoria";
    subCategoria.value = "Sub Categoria";
    descricao.value = "";
    conteudo.value = "";
}

// Configuração de Botões
//document.getElementById('btnimprimir').addEventListener('click', imprimirDados);
document.getElementById('upload').addEventListener('click', function () {
    incluirDados();
    imprimirDados();
    limpaCampos();
});