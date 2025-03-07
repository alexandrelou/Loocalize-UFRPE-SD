// Funções de interação
function fecharPushMsg() {
    document.getElementById('pushMsg').style.display = 'none';
}

function trocarAbaClientes() {
    window.location.href = "adm-aba-clientes.html";
}

function trocarTelaLogin() {
    alert('Trocar para tela de login');
}

function editarColaborador() {
    alert('Editar colaborador');
}

function deletarColaborador() {
    alert('Colaborador deletado');
}

function adicionarColaborador() {
    alert('Adicionar colaborador');
}

function detalharColaborador() {
    alert('Detalhar colaborador');
}

// Preencher tabela com dados de exemplo
const colaboradores = [
    { id: '1', nome: 'João José', usuario: 'joaojose', email: 'joao@gmail.com' },
    { id: '2', nome: 'Maria Silva', usuario: 'mariasilva', email: 'maria@gmail.com' }
];

const tbody = document.querySelector('#tvColaboradoresAbaColaboradores tbody');
colaboradores.forEach(colaborador => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${colaborador.id}</td>
        <td>${colaborador.nome}</td>
        <td>${colaborador.usuario}</td>
        <td>${colaborador.email}</td>
    `;
    tbody.appendChild(row);
});
