/// <reference types="cypress"/>
import enderecoPageCy from "../support/page-objects/endereco.page.cy";
import { faker } from '@faker-js/faker';
const dadosEndereco = require('../fixtures/endereco.json')

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

    it.only ('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        enderecoPageCy.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});