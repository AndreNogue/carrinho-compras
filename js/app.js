
let totalGeral = 0
limpar();


function adicionar(){
    // Recuperar valores: nome do produto , quantridade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    // Calcular o preço, o subtotal
    let preco = quantidade * valorUnitario;
    // Adicionar o prod no carrinho 
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML +
    `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
    </section>`

    // Atualizar o total da compra
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;
    document.getElementById('quantidade').value = 0;


}


function limpar(){
    // Limpar o carrinho
   totalGeral = 0
   document.getElementById('lista-produtos').innerHTML = 0;
   document.getElementById('valor-total').textContent = 'R$0';

}