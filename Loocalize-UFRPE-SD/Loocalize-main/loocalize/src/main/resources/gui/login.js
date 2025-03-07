// Fechar mensagem de erro/sucesso
document.getElementById('btn-fechar').addEventListener('click', function () {
    document.getElementById('push-msg').style.display = 'none';
});

// Trocar para a tela principal (ao clicar em "Entrar")
document.getElementById('btn-entrar').addEventListener('click', function () {
    alert('Redirecionando para a tela principal...');
    // Aqui você pode redirecionar para outra página ou carregar conteúdo dinamicamente
});

// Trocar para a tela de cadastro (ao clicar em "Cadastre-se")
document.getElementById('link-cadastro').addEventListener('click', function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    alert('Redirecionando para a tela de cadastro...');
    // Aqui você pode redirecionar para a página de cadastro
});