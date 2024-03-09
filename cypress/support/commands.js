Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('preCadastro', (nome, sobrenome) => {
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').clear().type(nome)
    cy.get('#account_last_name').clear().type(sobrenome)
    cy.get('.woocommerce-Button').click()
});

Cypress.Commands.add('addProdutos', (item, tamanho, cor, quantidade) => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        cy.get('[class="product-block grid"]')
        .eq(item).click()
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
});
