/// <reference types="cypress" />
import { find } from "lodash";
import fazerCompraElements from "../elements/FazerCompraElements";

class FazerCompraPage{
    loja(){
        cy.visit('http://lojaebac.ebaconline.art.br/');
    }

    addItemCarrinho(posicaoLista){
        const item1  = fazerCompraElements.blocoProduto(posicaoLista);
        // const item2  = cy.get(fazerCompraElements.blocoProduto()).last();
        item1.click();
        console.log({item1});
       

    }
    escolhaTamanho (posicaoTamanho){
        let itemTamanho =  fazerCompraElements.tamanhoProduto(posicaoTamanho);
        itemTamanho.click();
    }
    escolhaCor (posicaoCor){
        let itemCor =  fazerCompraElements.corProduto(posicaoCor);
        itemCor.click();
    }
    botaoComprar(){
        fazerCompraElements.btnComprar().should('be.enabled').click();
    }
    carrinho(){
       fazerCompraElements.verificaCarrinho().contains('foi adicionado no seu carrinho.');
    }
    // Segunda compra
    btComprar(){
        fazerCompraElements.btComprarTopo().should('be.visible').click();
    }
    telaP(){
        fazerCompraElements.telaProdutos().should('have.text','Produtos');
    }
    itensTotais(qtdItem){
        fazerCompraElements.itensAdd().should('have.text', ' '+qtdItem+' ')
    }
   

}
export default new FazerCompraPage();