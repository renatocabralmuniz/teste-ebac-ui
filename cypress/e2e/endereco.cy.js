/// <reference types="cypress"/>
import enderecoPageCy from "../support/page-objects/endereco.page.cy";
import { faker } from '@faker-js/faker';
const dadosEnderecoFaturamento = require('../fixtures/enderecoFaturamento.json')
const dadosEnderecoEntrega = require('../fixtures/enderecoEntrega.json')  

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
        enderecoPageCy.editarEnderecoFaturamento('Renato', 'Muniz', 'Google', 'Brasil', faker.location.street(), faker.location.buildingNumber(), faker.location.city(), 'Rio de Janeiro', '24425180', '21982825544', 'renatomuniz@email.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it ('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        enderecoPageCy.editarEnderecoFaturamento(
            dadosEnderecoFaturamento[0].nome,
            dadosEnderecoFaturamento[0].sobrenome,
            dadosEnderecoFaturamento[0].empresa,
            dadosEnderecoFaturamento[0].pais,
            dadosEnderecoFaturamento[0].endereco,
            dadosEnderecoFaturamento[0].numero,
            dadosEnderecoFaturamento[0].cidade,
            dadosEnderecoFaturamento[0].estado,
            dadosEnderecoFaturamento[0].cep,
            dadosEnderecoFaturamento[0].telefone,
            dadosEnderecoFaturamento[0].email
            
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it ('Deve fazer cadastro de entrega com sucesso - Usando arquivo de dados', () => {
        enderecoPageCy.editarEnderecoEntrega(
            dadosEnderecoEntrega[2].nome,
            dadosEnderecoEntrega[2].sobrenome,
            dadosEnderecoEntrega[2].empresa,
            dadosEnderecoEntrega[2].pais,
            dadosEnderecoEntrega[2].endereco,
            dadosEnderecoEntrega[2].numero,
            dadosEnderecoEntrega[2].cidade,
            dadosEnderecoEntrega[2].estado,
            dadosEnderecoEntrega[2].cep
            
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});