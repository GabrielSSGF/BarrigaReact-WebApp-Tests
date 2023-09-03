/// <reference types="cypress" />

describe('Functional tests', () => {
    before(() => {
        cy.visit('https://barrigareact.wcaquino.me/')

        // Login

        cy.get('.input-group > .form-control').type('accountEmail@mail.com')
        cy.get(':nth-child(2) > .form-control').type('accountPassword123')
        cy.get('.btn').click()
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
        cy.get('.dropdown-toggle').click()
        cy.get('[href="/contas"]').click()
        cy.get('.form-control').type('Account test')
        cy.get('.btn').click()
        cy.get('.toast-message').should('contain', 'Conta inserida com sucesso')
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
                cy.get('.form-control')
                    .clear()
                    .type('Account modified')
                cy.get('.btn').click()
            });
    
        cy.get('.toast-message').should('contain', 'Conta atualizada com sucesso');
    });
})

