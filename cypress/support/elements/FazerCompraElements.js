class FazerCompraElements {
    // jaquetaEscolhida=()=>''
    blocoProduto = (posicaoLista) => {

        return cy.get('.product-block').eq(posicaoLista);
        // escolho a posição na lsita de produtos
    }
    tamanhoProduto = (posicaoTamanho) => {
        return cy.get('.variable-items-wrapper[data-attribute_name="attribute_size"]').find('li').eq(posicaoTamanho);
        // concatena a classe com o tamanho do produto que escolhi

    }
    corProduto = (posicaoCor) => {
        return cy.get('.variable-items-wrapper[data-attribute_name="attribute_color"]').find('li').eq(posicaoCor);
    }
    btnComprar = () => {
        return cy.get('.single_add_to_cart_button');
    }
    verificaCarrinho = () => {
        return cy.get('.woocommerce-message');
    }
    // Segunda compra
    btComprarTopo = () => {
        return cy.get('#primary-menu > .menu-item-629 > a');

    }
    telaProdutos = () => {
        return cy.get('.page-title');

    }
    itensAdd = () => {
        return cy.get('#cart').find('.mini-cart-items');
    }
}
export default new FazerCompraElements()