// script.js
document.addEventListener('DOMContentLoaded', function () {
    const pushMsg = document.getElementById('pushMsg');
    const closePushMsg = document.getElementById('closePushMsg');
    const dateTime = document.getElementById('dateTime');
    const tvPromocoes = document.getElementById('tvPromocoes').getElementsByTagName('tbody')[0];
    const btnAdicionar = document.getElementById('btnAdicionar');
    const btnDetalhar = document.getElementById('btnDetalhar');
    const btnEditar = document.getElementById('btnEditar');
    const btnDeletar = document.getElementById('btnDeletar');

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

    // Simular dados das promoções
    const promocoes = [
        { id: '7k23js6rd3', titulo: 'diadospais10off', desconto: 10, criacao: '26/08/2023', expiracao: '30/08/2023', ativa: 'True' },
        // Adicione mais itens conforme necessário
    ];

    // Preencher a tabela
    promocoes.forEach(promocao => {
        const row = tvPromocoes.insertRow();
        row.insertCell().textContent = promocao.id;
        row.insertCell().textContent = promocao.titulo;
        row.insertCell().textContent = promocao.desconto;
        row.insertCell().textContent = promocao.criacao;
        row.insertCell().textContent = promocao.expiracao;
        row.insertCell().textContent = promocao.ativa;
    });

    // Botão Adicionar
    btnAdicionar.addEventListener('click', function () {
        alert('Adicionar nova promoção.');
    });

    // Botão Detalhar
    btnDetalhar.addEventListener('click', function () {
        alert('Detalhes da promoção selecionada.');
    });

    // Botão Editar
    btnEditar.addEventListener('click', function () {
        alert('Editar promoção.');
    });

    // Botão Deletar
    btnDeletar.addEventListener('click', function () {
        alert('Promoção deletada com sucesso!');
    });
});

// Funções de troca de tela (simulação)
function trocarAbaVeiculos() {
    alert('Redirecionando para a aba de Veículos...');
}

function trocarTelaLogin() {
    alert('Redirecionando para o Login...');
}
