/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Functional tests', () => {
    before(() => {
        cy.login('accountEmail@mail.com', 'accountPassword123')
        cy.resetApp()
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
        cy.acessarMenuConta()
        cy.inserirConta('Account test')
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso') 
        
        // cy.get(loc.MENU.SETTINGS).click()
        // cy.get(loc.MENU.CONTAS).click()
        // cy.get(loc.CONTAS.NOME).type('Account test')
        // cy.get(loc.CONTAS.BTN_SALVAR).click()
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

    it('Should not create an existing account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Account modified')
        cy.get(loc.MESSAGE).should('contain', 'code 400')
    })
})

