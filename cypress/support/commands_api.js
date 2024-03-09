Cypress.Commands.add('token', (usuario, senha) => {
    cy.request({
        method: 'POST',
        url: '/rest-api/docs/',
        body: {
            "user": usuario,
            "password": senha
        }
    }).then((response) => {
        expect(response.status).to.equal(200)
        return response.body.authorization
    })
})

 Cypress.Commands.add('addCupom' , (token, nomeCupom, quantidade, descricao) =>{
    cy.request({
            method: 'POST', 
            url: 'wp-json/wc/v3/coupons',
            headers: {authorization: token}, 
            body: {
            "code": nomeCupom,
            "amount": quantidade,
            "discount_type": "fixed_product",
            "description": descricao
        }
          
    })
})

 
