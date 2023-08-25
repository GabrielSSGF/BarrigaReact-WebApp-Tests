/// <reference types="cypress" />

describe('Iframes', () => {
    
    it('Text field fill', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('funciona')
                .should('have.value', 'funciona')

            cy.on('window:alert', message => {
                expect(message).to.be.equal('Alert Simples')
            })
            // cy.wrap(body).find('#otherButton').click()
        })
    })
    
    it('Frame test', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', message => {
            expect(message).to.be.equal('Click OK!')
        })
    })
})