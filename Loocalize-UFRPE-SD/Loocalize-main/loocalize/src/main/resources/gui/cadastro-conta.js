// Funções de interação
function fecharPushMsg() {
    document.getElementById('pushMsg').style.display = 'none';
}

function trocarTelaLogin() {
    alert('Voltar para a tela de login');
}

function trocarTelaCadastroPessoal() {
    const usuario = document.getElementById('tfUsuarioCadastroConta').value;
    const email = document.getElementById('tfEmailCadastroConta').value;
    const senha = document.getElementById('pfSenhaCadastroConta').value;
    const repetirSenha = document.getElementById('pfRepetirSenhaCadastroConta').value;

    if (!usuario || !email || !senha || !repetirSenha) {
        alert('Preencha todos os campos!');
        return;
    }

    if (senha !== repetirSenha) {
        alert('As senhas não coincidem!');
        return;
    }

    const conta = {
        usuario,
        email,
        senha
    };

    console.log('Conta cadastrada:', conta);
    alert('Próxima etapa: Cadastro Pessoal');
    // Redirecionar para a próxima tela
    window.location.href = 'cadastro-pessoal.html';
}
