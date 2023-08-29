/// <reference types="cypress" />

describe('Alerts', () => {
    before(() => { // Executa antes de todos os testes
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('Experimenting with time', () => {
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '29/08/2023')
        
        // cy.clock()
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain', '31/12/1969')
        
        let year = 2012, month = 3, day = 10, hour = 15, minutes = 23, seconds = 50
        const date = new Date(year, month, day, hour, minutes, seconds)
        cy.clock(date.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain', '10/04/2012')
        
    })
})