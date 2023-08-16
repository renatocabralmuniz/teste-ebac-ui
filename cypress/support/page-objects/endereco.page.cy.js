import { faker } from "@faker-js/faker"

class EnderecoPage {


    editarEnderecoFaturamento(nome, sobrenome, empresa, pais, endereco, numero, cidade, estado, cep) {

        //elementos + açoes
        cy.get('.woocommerce-MyAccount-navigation-link--edit-address > a').click()
        cy.get(':nth-child(2) > .title > .edit').click()

        cy.get('#shipping_first_name').clear().type(nome)
        cy.get('#shipping_last_name').clear().type(sobrenome)

        cy.get('#shipping_company').clear().type(empresa)
        cy.get('#select2-shipping_country-container').click().type(pais).click()
        cy.get('#shipping_address_1').clear().type(endereco)
        cy.get('#shipping_address_2').clear().type(numero)
        cy.get('#shipping_city').clear().type(cidade)
        cy.get('#select2-shipping_state-container').click().type(estado + '{enter}')
        cy.get('#shipping_postcode').click().clear().type(cep)
        cy.get(':nth-child(2) > .button').click()
        
    }

    editarEnderecoEntrega() {
        //elementos + açoes
    }


}

export default new EnderecoPage()