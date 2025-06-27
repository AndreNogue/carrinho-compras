function adicionar(){
    // Recuperar valores: nome do produto , quantridade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    // Calcular o preço, o subtotal
    let preco = quantidade.value * valorUnitario;
    // Adicionar o prod no carrinho 
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = 
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade.value}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`
    // Atualizar o total da compra
    let total = document.getElementsByClassName('carrinho__total');
    total[0].innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${preco}</span>`
}


function limpar(){
    // Limpar o carrinho
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = '';
    let total = document.getElementsByClassName('carrinho__total');
    total[0].innerHTML = '';
}