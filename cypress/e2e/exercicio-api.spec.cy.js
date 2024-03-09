
import commands from "../support/commands_api"

describe('Api de cupons', () => {
    let token
    before(() => {
        cy.token('admin_ebac','@admin!&b@c!2022').then(tkn => { token = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'})
    });

    it('Cadastrar Cupom', () => {
        let nomeCupom = `Cupom EBAC ${Math.floor(Math.random() * 100000000)}`
        let quantidade = `${Math.floor(Math.random() * 50)}`
        let descricao = `Cupom de desconto ${Math.floor(Math.random() * 1000000)}`
      
        cy.addCupom(token, nomeCupom, quantidade, descricao)
                
        .then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.code).to.contains('cupom ebac')
        })
    });
    
  
    it('Deve listar todos os cupons cadastrados buscando por ID', () => {
        cy.request({
            method: 'GET',
            url: 'wp-json/wc/v3/coupons/',
            headers: {authorization: token},
              
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body[0].code).to.contains('cupom ebac')
            
        })
    })
})
