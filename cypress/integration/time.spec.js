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

    it.only('Changes time to the future', () => {
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').should('contain', '1693')
        cy.get('#resultado > span').invoke('text').should('be.greaterThan', 1693338968739)
        
        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('be.at.most', 0)
        // cy.wait(1000)
        // cy.get('#buttonTimePassed').click()
        // cy.get('#resultado > span').invoke('text').should('be.lessThan', 1000)
        
        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('be.at.least', 5000)
        cy.tick(10000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('be.at.least', 15000)
        
        

    })
})