// script.js
document.addEventListener('DOMContentLoaded', function () {
    const pushMsg = document.getElementById('pushMsg');
    const closePushMsg = document.getElementById('closePushMsg');
    const btnVoltar = document.getElementById('btnVoltar');
    const formEdicaoVeiculo = document.getElementById('formEdicaoVeiculo');
    const btnSalvar = document.getElementById('btnSalvar');
    const btnImg = document.getElementById('btnImg');
    const lbCaminhoImg = document.getElementById('lbCaminhoImg');

    // Fechar mensagem de push
    closePushMsg.addEventListener('click', function () {
        pushMsg.style.display = 'none';
    });

    // Botão Voltar
    btnVoltar.addEventListener('click', function () {
        alert('Voltando para a aba de Veículos...');
    });

    // Escolher imagem
    btnImg.addEventListener('change', function () {
        const file = btnImg.files[0];
        if (file) {
            lbCaminhoImg.textContent = file.name;
        } else {
            lbCaminhoImg.textContent = 'Nenhum arquivo selecionado';
        }
    });

    // Submissão do formulário
    formEdicaoVeiculo.addEventListener('submit', function (event) {
        event.preventDefault();

        const modelo = document.getElementById('tfModelo').value;
        const marca = document.getElementById('tfMarca').value;
        const placa = document.getElementById('tfPlaca').value;
        const ano = document.getElementById('tfAno').value;
        const km = document.getElementById('tfKm').value;
        const locacoes = document.getElementById('tfLocacoes').value;
        const diaria = document.getElementById('tfDiaria').value;
        const disponivel = document.getElementById('cbDisponivel').checked;
        const imagem = btnImg.files[0];

        // Validação simples
        if (!modelo || !marca || !placa || !ano || !km || !locacoes || !diaria || !imagem) {
            alert('Preencha todos os campos e selecione uma imagem!');
            return;
        }

        // Simulação de edição
        alert('Veículo salvo com sucesso!');
        formEdicaoVeiculo.reset();
        lbCaminhoImg.textContent = 'Nenhum arquivo selecionado';
    });
});
