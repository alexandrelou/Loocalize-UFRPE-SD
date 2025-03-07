// Funções de interação
function fecharPushMsg() {
    document.getElementById('pushMsg').style.display = 'none';
}

function trocarTelaCadastroConta() {
    alert('Voltar para a tela de cadastro de conta');
    // Redirecionar para a tela de cadastro de conta
    window.location.href = 'cadastro-conta.html';
}

function trocarTelaLogin() {
    const nome = document.getElementById('tfNomeCadastroPessoal').value;
    const dataNascimento = document.getElementById('dpDataDeNascimentoCadastroPessoal').value;
    const telefone = document.getElementById('tfTelefoneCadastroPessoal').value;
    const endereco = document.getElementById('tfEnderecoCadastroPessoal').value;
    const cpf = document.getElementById('tfCpfCadastroPessoal').value;
    const cnh = document.getElementById('tfCnhCadastroPessoal').value;
    const dataHabilitacao = document.getElementById('dpDataDeHabilitacaoCadastroPessoal').value;

    if (!nome || !dataNascimento || !telefone || !endereco || !cpf || !cnh || !dataHabilitacao) {
        alert('Preencha todos os campos!');
        return;
    }

    const cliente = {
        nome,
        dataNascimento,
        telefone,
        endereco,
        cpf,
        cnh,
        dataHabilitacao
    };

    console.log('Cliente cadastrado:', cliente);
    alert('Cadastro realizado com sucesso!');
    // Redirecionar para a tela de login
    window.location.href = 'login.html';
}

