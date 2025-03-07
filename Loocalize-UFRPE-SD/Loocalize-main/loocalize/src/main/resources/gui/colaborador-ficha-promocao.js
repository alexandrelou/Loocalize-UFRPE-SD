// script.js
document.addEventListener('DOMContentLoaded', function () {
    const pushMsg = document.getElementById('pushMsg');
    const closePushMsg = document.getElementById('closePushMsg');
    const btnVoltar = document.getElementById('btnVoltar');
    const formEdicaoPromocao = document.getElementById('formEdicaoPromocao');
    const btnSalvar = document.getElementById('btnSalvar');

    // Fechar mensagem de push
    closePushMsg.addEventListener('click', function () {
        pushMsg.style.display = 'none';
    });

    // Botão Voltar
    btnVoltar.addEventListener('click', function () {
        alert('Voltando para a aba de Promoções...');
    });

    // Submissão do formulário
    formEdicaoPromocao.addEventListener('submit', function (event) {
        event.preventDefault();

        const titulo = document.getElementById('tfTitulo').value;
        const desconto = document.getElementById('tfDesconto').value;
        const qtdMinDiarias = document.getElementById('tfQtdMinDiarias').value;
        const qtdMinLocacoes = document.getElementById('tfQtdMinLocacoes').value;
        const dataExpiracao = document.getElementById('dpDataExpiracao').value;
        const ativa = document.getElementById('cbAtiva').checked;

        // Validação simples
        if (!titulo || !desconto || !qtdMinDiarias || !qtdMinLocacoes || !dataExpiracao) {
            alert('Preencha todos os campos!');
            return;
        }

        // Simulação de edição
        alert('Promoção salva com sucesso!');
        formEdicaoPromocao.reset();
    });
});

