/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";

describe("Funcionalidade Página de produtos", () => {

  beforeEach(() => {
    cy.visit('produtos');
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("Deve selecionar um produto", () => {
    cy.get('[class="product-block grid"]')
    //.first()
    //last()
    //.eq(3)
    .contains('Ariel Roll Sleeve Sweatshirt')
    .click();
  });

  it('Deve adicionar o produto ao carrinho', () => {
    let quantidade = 10

    cy.get('[class="product-block grid"]')
    .contains('Abominable Hoodie').click();
    cy.get('.button-variable-item-M').click()
    cy.get('.button-variable-item-Green').click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
    cy.get('.woocommerce-message').should('contain', ' “Abominable Hoodie” foram adicionados no seu carrinho.')
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()

});

it.only('Deve adicionar produto ao carrinho - Usando comando customizado', () => {
  cy.addProdutos('Abominable Hoodie', 'XL', 'Red', 3)
});

it.only('Deve adicionar produto ao carrinho - Usando comando customizado', () => {
  cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'S', 'Purple', 5)
});

});
