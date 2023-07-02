window.onload = function(){
  localStorage.setItem("data", 'bruh');
  imprimirDados();


}

function leDados() {
  let strDados = localStorage.getItem('data');
  let objDados = {};
  if (strDados != 'bruh') {
    objDados = JSON.parse(strDados);
  } else {
    objDados = {
      conteudo: [
        {
          "titulo": "",
          "descricao": "",
          "categoria": "",
          "arquivo": ""
        }
      ]
    };
  }
  return objDados;
}

function Salvar(dados) {
  localStorage.setItem('data', JSON.stringify(dados));
}

function incluirDados() {
  // Ler dados do LocalStorage
  let objDados = leDados();

  // Incluir um novo dado
  let titulo = document.getElementById("escolhaTitulo").value;
  let categoria = document.getElementById("escolhaCategoria").value;
  let descricao = document.getElementById("escolhaDescricao").value;
  let arquivo = document.getElementById("escolhaArquivo").value;

  let novoConteudo = {
    "titulo": titulo,
    "categoria": categoria,
    "descricao": descricao,
    "arquivo": arquivo, 
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
    let titulo = objDados.conteudo[cont].titulo;

    let categoria = objDados.conteudo[cont].categoria;
    strHtml += `<h3>Título: ${titulo}</h3><p>Categoria: ${categoria}</p>`;
  }
  tela.innerHTML = strHtml;
}

function limpaCampos(){
  let titulo = document.getElementById("escolhaTitulo");
  let descricao = document.getElementById("escolhaDescricao");
  let categoria = document.getElementById("escolhaCategoria");
  titulo.value = "";
  categoria.value = "";
  descricao.value = "";
}

// Configuração de Botões
//document.getElementById('btnimprimir').addEventListener('click', imprimirDados);
document.getElementById('upload').addEventListener('click', function(){
  incluirDados();
  imprimirDados();
  limpaCampos();
});
