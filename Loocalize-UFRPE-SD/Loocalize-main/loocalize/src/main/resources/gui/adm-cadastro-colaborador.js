// Funções de interação
function fecharPushMsg() {
    document.getElementById('pushMsg').style.display = 'none';
}

function trocarAdmAbaColaboradores() {
    alert('Voltar para a aba de colaboradores');
}

function cadastrarColaborador() {
    const usuario = document.getElementById('tfUsuarioCadastroColaborador').value;
    const email = document.getElementById('tfEmailCadastroColaborador').value;
    const senha = document.getElementById('pfSenhaCadastroColaborador').value;
    const repetirSenha = document.getElementById('pfRepetirSenhaCadastroColaborador').value;
    const nome = document.getElementById('tfNomeCadastroColaborador').value;
    const dataNascimento = document.getElementById('dpDataDeNascimentoCadastroColaborador').value;
    const endereco = document.getElementById('tfEnderecoCadastroColaborador').value;
    const telefone = document.getElementById('tfTelefoneCadastroColaborador').value;
    const cpf = document.getElementById('tfCpfCadastroColaborador').value;

    if (senha !== repetirSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    const colaborador = {
        usuario,
        email,
        senha,
        nome,
        dataNascimento,
        endereco,
        telefone,
        cpf
    };

    console.log('Colaborador cadastrado:', colaborador);
    alert('Colaborador cadastrado com sucesso!');
}