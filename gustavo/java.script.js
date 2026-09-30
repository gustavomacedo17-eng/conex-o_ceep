// ======================================
// FORMULÁRIO DE FEEDBACK
// CONEXÃO CEEP - STAR WARS
// ======================================

const formulario = document.getElementById("feedbackForm");

const resultado = document.getElementById("resultado");

const mensagemResultado =
    document.getElementById("mensagemResultado");


// ======================================
// ENVIO DO FORMULÁRIO
// ======================================

formulario.addEventListener("submit", function (event) {

    event.preventDefault();


    // Nome do aluno

    const nome =
        document.getElementById("nome").value.trim();


    // Pegando as respostas

    const gostou =
        document.querySelector(
            'input[name="gostou"]:checked'
        ).value;

    const tema =
        document.querySelector(
            'input[name="tema"]:checked'
        ).value;

    const aprendizado =
        document.querySelector(
            'input[name="aprendizado"]:checked'
        ).value;

    const entendimento =
        document.querySelector(
            'input[name="entendimento"]:checked'
        ).value;

    const avaliacao =
        document.getElementById("avaliacao").value;


    // ======================================
    // CALCULAR MÉDIA
    // ======================================

    const soma =
        Number(gostou) +
        Number(tema) +
        Number(aprendizado) +
        Number(entendimento) +
        Number(avaliacao);

    const media = soma / 5;


    // ======================================
    // MENSAGEM
    // ======================================

    let mensagem = "";

    if (media >= 4.5) {

        mensagem =
            `Excelente missão, ${nome}! 🚀 ` +
            `Seu feedback foi registrado com sucesso. ` +
            `A Força está com você!`;

    } else if (media >= 3.5) {

        mensagem =
            `Muito obrigado, ${nome}! ⭐ ` +
            `Seu feedback foi registrado. ` +
            `A missão foi concluída com sucesso!`;

    } else {

        mensagem =
            `Obrigado pelo feedback, ${nome}! ` +
            `Sua opinião ajuda nossa equipe a melhorar ` +
            `as próximas missões. 🛸`;
    }


    // ======================================
    // MOSTRAR RESULTADO
    // ======================================

    mensagemResultado.textContent = mensagem;

    formulario.style.display = "none";

    resultado.classList.remove("escondido");

    // Voltar para o topo

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ======================================
// NOVO FEEDBACK
// ======================================

function novoFeedback() {

    formulario.reset();

    formulario.style.display = "block";

    resultado.classList.add("escondido");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
