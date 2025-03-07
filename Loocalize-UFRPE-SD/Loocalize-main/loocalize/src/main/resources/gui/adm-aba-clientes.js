// Funções de interação
function fecharPushMsg() {
    document.getElementById('pushMsg').style.display = 'Loocalize-main/loocalize/src/main/resources/gui/style/adm-aba-clientes.css';
}

function trocarAbaColaboradores() {
    window.location.href = "adm-aba-colaboradores.html";
}

function trocarTelaLogin() {
    alert('Trocar para tela de login');
}

function deletarCliente() {
    alert('Cliente deletado');
}

function adicionarCliente() {
    alert('Adicionar cliente');
}

function detalharCliente() {
    alert('Detalhar cliente');
}

// Preencher tabela com dados de exemplo
const clientes = [
    { id: '1', nome: 'João José', usuario: 'joaojose', email: 'joao@gmail.com' },
    { id: '2', nome: 'Maria Silva', usuario: 'mariasilva', email: 'maria@gmail.com' }
];

const tbody = document.querySelector('#tvClientesAbaClientes tbody');
clientes.forEach(cliente => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${cliente.id}</td>
        <td>${cliente.nome}</td>
        <td>${cliente.usuario}</td>
        <td>${cliente.email}</td>
    `;
    tbody.appendChild(row);
});

