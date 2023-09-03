/// <reference types="cypress" />

import loc from '../../support/locators'

describe('Functional tests', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')

        // Login

        cy.get(loc.LOGIN.USER).type('accountEmail@mail.com')
        cy.get(loc.LOGIN.PASSWORD).type('accountPassword123')
        cy.get(loc.LOGIN.BTN_LOGIN).click()
        cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
    })

    // it('Account creation', () => {
    //     cy.get(':nth-child(2) > .nav-link').click()

    //     cy.get('.jumbotron > :nth-child(1) > .form-control').type('accountUser')
    //     cy.get('.input-group > .form-control').type('accountEmail@mail.com')
    //     cy.get(':nth-child(3) > .form-control').type('accountPassword123')

    //     cy.get('.btn').click()
    // })

    // it('Login', () => {
    //     // cy.get('.input-group > .form-control').type('gabrielTest@mail.com')
    //     cy.get('.input-group > .form-control').type('accountEmail@mail.com')
    //     cy.get(':nth-child(2) > .form-control').type('accountPassword123')
    //     cy.get('.btn').click()
    //     cy.get('.toast-message').should('exist')
    //     cy.get('.toast-message').should('contain', 'Bem vindo')
    // })

    it('Creating other accounts', () => {
        cy.get(loc.MENU.SETTINGS).click()
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.CONTAS.NOME).type('Account test')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    })

    it('Should update an account', () => {
        cy.get('tbody')
            .contains('Account test')
            .parent('tr')
            .invoke('index')
            .then((index) => {
                const accountIndex = index + 1;
                const buttonSelector = `:nth-child(${accountIndex}) > :nth-child(2) > :nth-child(1) > .far`
                
                cy.get(buttonSelector).click()
                cy.get(loc.CONTAS.NOME)
                    .clear()
                    .type('Account modified')
                cy.get(loc.CONTAS.BTN_SALVAR).click()
            });
    
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso');
    });
})

