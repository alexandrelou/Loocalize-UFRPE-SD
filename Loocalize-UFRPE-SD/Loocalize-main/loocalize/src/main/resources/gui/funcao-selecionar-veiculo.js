// Função para selecionar o veículo
function setVeiculoSelecionado() {
    const modelo = document.getElementById('lbModeloCard').textContent;
    const preco = document.getElementById('lbPrecoCard').textContent;

    alert(`Veículo selecionado: ${modelo} - ${preco}`);
    // Aqui você pode adicionar a lógica para adicionar o veículo ao carrinho ou redirecionar para outra página.
}
