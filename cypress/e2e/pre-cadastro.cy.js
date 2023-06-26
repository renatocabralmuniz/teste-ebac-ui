/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve completar o pre cadastro com sucesso', () => {
        let nomeFaker = faker.person.firstName()
        let sobrenomeFaker = faker.person.lastName()
        let emailFaker = faker.internet.email({firstName: nomeFaker})

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type(faker.internet.password())
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('#account_display_name').type(nomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados')

    });
    
});