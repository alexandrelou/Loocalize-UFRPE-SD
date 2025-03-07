// Funções de interação
function fecharPushMsg() {
    document.getElementById('pushMsg').style.display = 'none';
}

function trocarAbaClientes() {
    alert('Voltar para a aba de clientes');
}

function salvarEdicaoColaborador() {
    const usuario = document.getElementById('tfUsuarioEditarColaborador').value;
    const email = document.getElementById('tfEmailEditarColaborador').value;
    const cpf = document.getElementById('tfCpfEditarColaborador').value;
    const dataNascimento = document.getElementById('dpDataDeNascimentoEditarColaborador').value;
    const endereco = document.getElementById('tfEnderecoEditarColaborador').value;
    const telefone = document.getElementById('tfTelefoneEditarColaborador').value;

    if (!usuario || !email || !cpf || !dataNascimento || !endereco || !telefone) {
        alert('Preencha todos os campos!');
        return;
    }

    const colaborador = {
        usuario,
        email,
        cpf,
        dataNascimento,
        endereco,
        telefone
    };

    console.log('Colaborador editado:', colaborador);
    alert('Colaborador editado com sucesso!');
}