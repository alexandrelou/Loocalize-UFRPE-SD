// script.js
document.addEventListener('DOMContentLoaded'), function  {
    const pushMsg = document.getElementById('pushMsg');
    const closePushMsg = document.getElementById('closePushMsg');
    const dateTime = document.getElementById('dateTime');
    const tvVeiculos = document.getElementById('tvVeiculos').getElementsByTagName('tbody')[0];
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

    // Simular dados dos veículos
    const veiculos = [
        { id: '7k23js6rd3', marca: 'Renault', placa: 'OXE1523', ano: '2020', diaria: 'R$100' },
        // Adicione mais itens conforme necessário
    ];

    // Preencher a tabela
    veiculos.forEach(veiculo => {
        const row = tvVeiculos.insertRow();
        row.insertCell().textContent = veiculo.id;
        row.insertCell().textContent = veiculo.marca;
        row.insertCell().textContent = veiculo.placa;
        row.insertCell().textContent = veiculo.ano;
        row.insertCell().textContent = veiculo.diaria;
    });

    // Botão Adicionar
    btnAdicionar.addEventListener('click', function () {
        alert('Adicionar novo veículo.');
    });

    // Botão Detalhar
    btnDetalhar.addEventListener('click', function () {
        alert('Detalhes do veículo selecionado.');
    });

    // Botão Editar
    btnEditar.addEventListener('click', function () 
