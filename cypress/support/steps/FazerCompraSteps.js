import fazerCompra from "../pageObjects/FazerCompraPage";
Given('que o usuário esteja no site e deseje adicionar um item ao carrinho', () => {
    fazerCompra.loja();
})


When('adicionar o primeiro item no carrinho', () => {
    fazerCompra.addItemCarrinho(0);
})
And('ele será direcionado para outra tela para escolher o tamanho e a cor desejada', () => {
    fazerCompra.escolhaTamanho(0);
    fazerCompra.escolhaCor(1);

})
And('clicar no botão comprar', () => {
    fazerCompra.botaoComprar();
})
Then('o item será adicionado ao carrinho', () => {
    fazerCompra.carrinho();
})
//Segunda compra
When('clicar no botão comprar no topo da página', () => {
    fazerCompra.btComprar();
})
And('for redirecionado para a tela Produtos', () => {
    fazerCompra.telaP();
})
And('escolher o segundo item disponível', () => {
    fazerCompra.addItemCarrinho(1);
})
Then('o carrinho constará os dois itens adicionados',()=>{
    fazerCompra.itensTotais(2);

})