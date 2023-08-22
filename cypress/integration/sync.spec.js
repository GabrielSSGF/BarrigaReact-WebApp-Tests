/// <reference types="cypress" />

describe('Wait...', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })
    
    it.only('Retry', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
        // .should('not.exist')
            .should('exist')
            .type('funciona')
        
        /* 
        Its worth noting that you shouldnt assert two conditions that
        contradict eachother in the same line. Thats why this works: 
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        
        But this doesnt: 
        cy.get('#novoCampo')
            .should('not.exist')
            .should('exist')
        */
    })

})