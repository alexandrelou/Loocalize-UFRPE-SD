// Funções de interação
function fecharPushMsg() {
    document.getElementById('pushMsg').style.display = 'none';
}

function trocarAdmAbaClientes() {
    alert('Voltar para a aba de clientes');
}

function cadastrarCliente() {
    const usuario = document.getElementById('tfUsuarioCadastroCliente').value;
    const email = document.getElementById('tfEmailCadastroCliente').value;
    const senha = document.getElementById('pfSenhaCadastroCliente').value;
    const repetirSenha = document.getElementById('pfRepetirSenhaCadastroCliente').value;
    const nome = document.getElementById('tfNomeCadastroCliente').value;
    const dataNascimento = document.getElementById('dpDataDeNascimentoCadastroCliente').value;
    const endereco = document.getElementById('tfEnderecoCadastroCliente').value;
    const telefone = document.getElementById('tfTelefoneCadastroCliente').value;
    const cpf = document.getElementById('tfCpfCadastroCliente').value;
    const cnh = document.getElementById('tfCnhCadastroCliente').value;
    const dataHabilitacao = document.getElementById('dpDataDeHabilitacaoCadastroCliente').value;

    if (senha !== repetirSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    const cliente = {
        usuario,
        email,
        senha,
        nome,
        dataNascimento,
        endereco,
        telefone,
        cpf,
        cnh,
        dataHabilitacao
    };

    console.log('Cliente cadastrado:', cliente);
    alert('Cliente cadastrado com sucesso!');
}
