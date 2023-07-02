function CriandoOpcaoLocal(value) {//Setando LocalStorage
    console.log(value);
    localStorage.setItem("tipoAtividadeRecreativa", value);
}

function EscutadorBotoes() {//Escutadores de Botões
    document.getElementById("button").addEventListener("click", function () {//Botão Escrita
        CriandoOpcaoLocal("Mindfulnes");
    });

    document.getElementById("button-2").addEventListener("click", function () {//Botão Receita
        CriandoOpcaoLocal("ArLivre");
    });

    document.getElementById("button-3").addEventListener("click", function () {//Botão Desenho
        CriandoOpcaoLocal("Outros");
    });
}


window.onload = function () {
    EscutadorBotoes();
}



/*function criandoConteudo() {
    let teste = {
        content: [{
                id: 1,
                type: "Escrita",
                conteudo:{

                        imagens:[
                            "https://i.guim.co.uk/img/static/sys-images/Guardian/About/General/2013/4/5/1365178845011/Gang-violence-008.jpg?width=465&quality=85&dpr=1&s=none",
                            "https://i.pinimg.com/564x/ad/99/35/ad99358e9510322d73dde0495c435fab.jpg",
                            "https://dinopixel.com/preload/0423/Lucky-Block.png",
                        ],
                        titulos:[
                            "Um encontro inesperado",
                            "Uma viagem ao desconhecido",
                            "O objeto misterioso",
                        ],
                        descricoes:[
                            "Escreva uma história sobre um personagem que se depara com um encontro surpreendente que muda sua vida. Pode ser um encontro com uma pessoa especial, um ser mágico ou até mesmo um encontro consigo mesmo. Explore as emoções, os desafios e as transformações que ocorrem nesse encontro.",
                            "Imagine um objeto misterioso que é encontrado por um grupo de amigos em uma antiga casa abandonada. Escreva uma história sobre como esse objeto afeta suas vidas, desencadeando uma série de eventos estranhos e inesperados. Explore a origem e os segredos do objeto, assim como as consequências de possuí-lo.",
                            "Crie uma narrativa ambientada em um futuro distópico onde a humanidade está à beira da extinção. A história se passa na última cidade habitável do planeta. Explore a vida dos personagens nessa cidade, suas esperanças, medos e desafios enquanto lutam para sobreviver. Você pode abordar temas como solidariedade, sacrifício, esperança ou até mesmo questionar o futuro da humanidade.",
                        ],
                        descricoesResumidas:[
                            "Um encontro inesperado entre dois personagens",
                            "Como seria esse mundo desconhecido?",
                            "O que será esse objeto misterioso?",
                        ],
                    }

            },
            {
                id: 2,
                type: "Receita",
                conteudo:{

                    imagens:[
                        "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/75578c84ea790855c21d5ad7d67cc4a7.jpg?itok=nLHnkQDF",
                        "https://i0.wp.com/pitadinha.com/wp-content/uploads/2014/09/DSCN8963.jpg?fit=2048%2C1536&ssl=1",
                        "https://s2.glbimg.com/pXtPmKZTUjlOv0dIUOTVU0zpxU8=/0x0:500x375/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2021/8/7/fH1PBqTbWjb9oS28kaTQ/pao-de-queijo-fit.jpg",
                    ],
                    titulos:[
                        "Bolo de Cenoura",
                        "Bolo de Banana e Linhaça",
                        "Pão de Queijo Saudável",
                    ],
                    descricoes:[
                        {
                            Ingrdientes:ingrdientes = "2 xícaras de farinha de arroz\n 2 xícaras de açúcar mascavo (ou demerara ou xilitol)\n 1 xícara de óleo de coco\n 3 ovos\n 3 cenouras médias\n 1 pitada de sal rosa\n 1 colher (sopa) de fermento em pó\n 2 xícaras de açúcar mascavo\n 1 xícara de açúcar mascavo\n 1 e 1/2 xícara de cacau em pó\n 100% essência de baunilha\n 1 colher (sopa) de essência de baunilha".split("\n"),
                            
                            modoPreparo:modopreparo = "1 - Bata no liquidificador o açúcar, o óleo, os ovos e as cenouras picadas ou raladas.\n2 - Coloque a farinha de arroz em uma vasilha com a pitada de sal.\n 3 - Em seguida, despeje o creme que foi batido no liquidificador por cima da farinha e misture com uma colher até que a massa fique homogênea, e por último misture o fermento.\n 4 - Coloque a mistura em uma forma média retangular ou de furo central untada com óleo de coco e polvilhada com um pouco da farinha de arroz.\n 5 - Leve ao forno preaquecido a 180º C por aproximadamente 30 minutos ou até que esteja assado ao furar a massa com um garfo ou palito e o mesmo sair limpo.\n 6 - Coloque a água e o açúcar em uma panela pequena e misture para dissolver.\n 7 - Em seguida, leve ao fogo até ferver.\n 8 - Adicione o cacau em pó, misture bem com um fouet até incorporar e deixe ferver em fogo baixo por 3 minutos aproximadamente, até engrossar.\n 9 - Retire do fogo, adicione a baunilha e utilize em seguida.".split("\n"),
                        },
                        {
                            Ingrdientes:ingrdientes = "3 und de ovos\n1 xícara (de chá) de açúcar demerara ou mascavo\n1/2 xícara (de chá) de farinha de arroz\n1 xícara (de chá) de farinha de linhaça dourada\n2 xícaras (de chá) de farelo de aveia\n8 und de bananas maduras\n2 colheres (de sopa) de óleo de coco ou manteiga derretida\n1 copo de iogurte integral\n1 colher (de sopa) de fermento em pó\n1 colher (de chá) de canela em pó\nQB de canela em pó para polvilhar".split("\n"),

                            modoPreparo:modopreparo="1/2 xícara de polvilho azedo\n50 gramas de queijo branco ralado\n1 colher de chá rasa de fermento químico\n1 ovo\nSal a gosto\nSementes e grãos a gosto, caso deseje aumentar o efeito nutritivo da receita".split("\n"),
                        },
                        {
                            Ingrdientes:ingrdientes = "1/2 xícara de polvilho azedo\n50 gramas de queijo branco ralado\n1 colher de chá rasa de fermento químico\n1 ovo\nSal a gosto\nSementes e grãos a gosto, caso deseje aumentar o efeito nutritivo da receita".split("\n"),

                            modoPreparo:modopreparo="1 - Misture todos os ingredientes até ficar uma massa firme e homogênea.\n2 - Faça bolinhas médias e asse em forno preaquecido a 180º, por 20 minutos.".split("\n"),
                        },
                    ],
                    descricoesResumidas:[
                        "Sem glúten e sem lactose",
                        "Sem glúten",
                        "Leva apenas 5 ingredientes!",
                    ],
                }
               
            },
            {
                id: 3,
                type: "Artes",
                conteudo:{

                    imagens:[
                        "https://img.freepik.com/vetores-premium/mandala-antiestresse-com-cachos-e-arcos-zen-para-colorir-com-padroes-de-rabiscos-e-emaranhados_703715-152.jpg?w=2000",
                        "https://www.altoastral.com.br/antigas/uploads/legacy/2018/05/quatro-elementos.jpg",
                        "https://imag.nyc3.digitaloceanspaces.com/arte/2022/07/variacao-noite-estrelada-van-gogh.jpg",
                    ],
                    titulos:[
                        "Padrões Zen",
                        "Elementos naturais",
                        "Céu estrelado",
                    ],
                    descricoes:[
                        "Crie desenhos repetitivos e simétricos usando padrões zen, como mandalas ou zentangles. Esses padrões são conhecidos por sua natureza relaxante e meditativa. Comece com um círculo como base e, em seguida, desenhe linhas, formas e padrões dentro dele. Você pode usar canetas, lápis ou marcadores de diferentes espessuras para criar contraste e textura.",
                        "Desenhe elementos naturais relaxantes, como conchas, folhas, pedras ou gotas de água. Esses elementos têm formas simples e podem ser desenhados com traços suaves e curvas suaves. Concentre-se nos detalhes sutis e nas texturas desses elementos, prestando atenção especial à sombra e à luz.",
                        "Crie um desenho do céu estrelado. Comece desenhando um fundo escuro, simulando a noite, e em seguida adicione estrelas em diferentes tamanhos e padrões. Você pode usar lápis branco, giz pastel ou canetas gel brancas para destacar as estrelas. Adicione alguns elementos adicionais, como nuvens ou uma lua, se desejar.",
                    ],
                    descricoesResumidas:[
                        "",
                        "",
                        "",
                    ],
                }
            },
        ]
    }
    let armazenamento = JSON.stringify(teste);
    localStorage.setItem("Armazem", armazenamento);
}*/