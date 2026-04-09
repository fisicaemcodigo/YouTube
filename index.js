const materiais = [
    {
        titulo: "Aula 00 - Apresentação",
        descricao: "Resumo em PDF da aula 00.",
        arquivo: "materiais/apoio/apoio00.pdf"
    },
    {
        titulo: "Aula 01 - Google Colab",
        descricao: "Tutorial de como acessar o Google Colab.",
        arquivo: "materiais/apoio/apoio01.pdf"
    },
    {
        titulo: "Aula 02 - Função print()",
        descricao: "Teoria sobre a Função print().",
        arquivo: "materiais/apoio/apoio02.pdf"
    },
    {
        titulo: "Aula 03 - Função input()",
        descricao: "Teoria sobre a Função input().",
        arquivo: "materiais/apoio/apoio03.pdf"
    },
    {
        titulo: "Aula 04 - Variável em Python",
        descricao: "Teoria sobre Variável em Python.",
        arquivo: "materiais/apoio/apoio04.pdf"
    },
    {
        titulo: "Aula 05 - Operadores Matemáticos",
        descricao: "Teoria sobre operações matemáticas.",
        arquivo: "materiais/apoio/apoio05.pdf"
    }
];

const atividades = [
    {
        titulo: "Atividade 01 - Introdução",
        descricao: "Exercícios iniciais. Será abordado todo o conteúdo das aulas 01 até 05.",
        arquivo: "materiais/atividades/atividade01.pdf"
    }
];

const gabaritos = [
    {
        titulo: "Gabarito 01 - Em construção",
        descricao: "Em construção",
        arquivo: "#"
    }
];

function criarCards(lista, containerId) {
    const container = document.getElementById(containerId);

    lista.forEach(item => {
        const coluna = document.createElement("div");
        coluna.className = "col-md-6 col-lg-4";

        coluna.innerHTML = `
            <div class="card h-100 shadow-sm custom-card">
                <div class="card-body d-flex flex-column">
                    <h3 class="card-title h5">${item.titulo}</h3>
                    <p class="card-text">${item.descricao}</p>
                    <a href="${item.arquivo}" target="_blank" class="btn btn-custom mt-auto">
                        Abrir PDF
                    </a>
                </div>
            </div>
        `;

        container.appendChild(coluna);
    });
}

criarCards(materiais, "lista-materiais");
criarCards(atividades, "lista-atividades");
criarCards(gabaritos, "lista-gabaritos");

function configurarToggle(botaoId, containerId, textoMostrar, textoEsconder) {
    const botao = document.getElementById(botaoId);
    const container = document.getElementById(containerId);

    botao.addEventListener("click", function () {
        container.classList.toggle("d-none");

        if (container.classList.contains("d-none")) {
            botao.textContent = textoMostrar;
        } else {
            botao.textContent = textoEsconder;
        }
    });
}

configurarToggle("toggle-materiais", "container-materiais", "Mostrar materiais", "Esconder materiais");
configurarToggle("toggle-atividades", "container-atividades", "Mostrar atividades", "Esconder atividades");
configurarToggle("toggle-gabaritos", "container-gabaritos", "Mostrar gabaritos", "Esconder gabaritos");