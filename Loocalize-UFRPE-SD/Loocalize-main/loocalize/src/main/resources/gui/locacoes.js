// script.js
document.addEventListener('DOMContentLoaded', function () {
    const pushMsg = document.getElementById('pushMsg');
    const closePushMsg = document.getElementById('closePushMsg');
    const dateTime = document.getElementById('dateTime');
    const tvLocacoes = document.getElementById('tvLocacoes').getElementsByTagName('tbody')[0];
    const btnDetalhar = document.getElementById('btnDetalhar');
    const btnDevolver = document.getElementById('btnDevolver');

    // Fechar mensagem de push
    closePushMsg.addEventListener('click', function () {
        pushMsg.style.display = 'none';
    });

    // Atualizar data e hora
    function updateDateTime() {
        const now = new Date();
        const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        dateTime.textContent = now.toLocaleDateString('pt-BR', options);
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    // Simular dados das locações
    const locacoes = [
        { id: 1, data: '2023-08-01', devolvido: 'Não' },
        { id: 2, data: '2023-08-05', devolvido: 'Sim' },
        // Adicione mais itens conforme necessário
    ];

    // Preencher a tabela
    locacoes.forEach(locacao => {
        const row = tvLocacoes.insertRow();
        row.insertCell().textContent = locacao.id;
        row.insertCell().textContent = locacao.data;
        row.insertCell().textContent = locacao.devolvido;
    });

    // Botão Detalhar
    btnDetalhar.addEventListener('click', function () {
        alert('Detalhes da locação selecionada.');
    });

    // Botão Devolver
    btnDevolver.addEventListener('click', function () {
        alert('Veículo devolvido com sucesso!');
    });
});

// Funções de troca de tela (simulação)
function trocarAbaCatalogo() {
    alert('Redirecionando para o Catálogo...');
}

function trocarTelaLogin() {
    alert('Redirecionando para o Login...');
}

