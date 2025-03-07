// script.js
document.addEventListener('DOMContentLoaded', function () {
    const pushMsg = document.getElementById('pushMsg');
    const closePushMsg = document.getElementById('closePushMsg');
    const btnVoltar = document.getElementById('btnVoltar');
    const formCadastroPromocao = document.getElementById('formCadastroPromocao');
    const btnCadastrar = document.getElementById('btnCadastrar');

    // Fechar mensagem de push
    closePushMsg.addEventListener('click', function () {
        pushMsg.style.display = 'none';
    });

    // Botão Voltar
    btnVoltar.addEventListener('click', function () {
        alert('Voltando para a aba de Promoções...');
    });

    // Submissão do formulário
    formCadastroPromocao.addEventListener('submit', function (event) {
        event.preventDefault();

        const titulo = document.getElementById('tfTitulo').value;
        const desconto = document.getElementById('tfDesconto').value;
        const qtdMinDiarias = document.getElementById('tfQtdMinDiarias').value;
        const qtdMinLocacoes = document.getElementById('tfQtdMinLocacoes').value;
        const dataCriacao = document.getElementById('dpDataCriacao').value;
        const dataExpiracao = document.getElementById('dpDataExpiracao').value;

        // Validação simples
        if (!titulo || !desconto || !qtdMinDiarias || !qtdMinLocacoes || !dataCriacao || !dataExpiracao) {
            alert('Preencha todos os campos!');
            return;
        }

        // Simulação de cadastro
        alert('Promoção cadastrada com sucesso!');
        formCadastroPromocao.reset();
    });
});

