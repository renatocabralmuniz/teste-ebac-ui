/// <reference types="cypress"/>
import enderecoPageCy from "../support/page-objects/endereco.page.cy";
import { faker } from '@faker-js/faker';

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('my-account')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });

    afterEach(() => {
        cy.screenshot()
    });

    
    it ('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPageCy.editarEnderecoFaturamento('Renato', 'Muniz', 'Google', 'Brasil', faker.location.street(), faker.location.buildingNumber(), faker.location.city(), 'Rio de Janeiro', '24425180')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});