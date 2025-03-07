// Funções de interação
function fecharPushMsg() {
    document.getElementById('pushMsg').style.display = 'none';
}

function trocarColaboradorAbaPromocoes() {
    alert('Voltar para a aba de promoções');
}

function salvarEdicaoPromocao() {
    const usuario = document.getElementById('tfUsuarioEditarCliente').value;
    const email = document.getElementById('tfEmailEditarCliente').value;

    if (!usuario || !email) {
        alert('Preencha todos os campos!');
        return;
    }

    const cliente = {
        usuario,
        email
    };

    console.log('Cliente editado:', cliente);
    alert('Cliente editado com sucesso!');
}