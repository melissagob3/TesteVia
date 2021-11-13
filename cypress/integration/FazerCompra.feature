

Feature: Acrescentar dois itens no carrinho

 
    Scenario: Adicionar um item no carrinho
        Given que o usuário esteja no site e deseje adicionar um item ao carrinho
        When adicionar o primeiro item no carrinho
            And ele será direcionado para outra tela para escolher o tamanho e a cor desejada
            And clicar no botão comprar
        Then o item será adicionado ao carrinho
         When clicar no botão comprar no topo da página
            And for redirecionado para a tela Produtos
            And escolher o segundo item disponível
            And ele será direcionado para outra tela para escolher o tamanho e a cor desejada
            And clicar no botão comprar
        Then o item será adicionado ao carrinho
        Then o carrinho constará os dois itens adicionados


 