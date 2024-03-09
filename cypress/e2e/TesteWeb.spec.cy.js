  
const perfil = require('../fixtures/perfil.json')
import enderecopage from '../support/page_objects.js/endereco.page';
import comandos from '../support/commands'

context('TCC - WEB', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        });
        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Deve incluir 3 itens no carrinho com sucesso', () => {
        cy.preCadastro('Amanda', 'Cunha')
        enderecopage.editarEnderecoFaturamento('Amanda', 'Cunha', 'Ebac', 'Brasil', 'Av. Brasil', '100', 'Rio de Janeiro', 'Rio de Janeiro', '21530000', '2177777777', 'gabrielamattesco@msn.com')
        enderecopage.editarEnderecoEntrega('Amanda', 'Cunha', 'Ebac', 'Brasil', 'Av. Brasil', '100', 'Rio de Janeiro', 'Rio de Janeiro', '21530000')

        cy.addProdutos('2', '33', 'Blue', 2),
        cy.addProdutos('0', 'L', 'Red', 5),
        cy.addProdutos('1', 'XL', 'Yellow', 2)

        cy.get('.woocommerce-message > .button').click({ force: true }) 
        cy.get(':nth-child(1) > .product-name > a').should('contain', 'Aether Gym Pant - 33, Blue')
        cy.get(':nth-child(2) > .product-name > a').should('contain', 'Abominable Hoodie - L, Red')
        cy.get(':nth-child(3) > .product-name > a').should('contain', 'Aero Daily Fitness Tee - XL, Yellow')
    });
    
})
