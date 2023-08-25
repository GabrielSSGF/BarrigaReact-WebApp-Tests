/// <reference types="cypress" />

describe('Popup', () => {
    
    it('popup test', () => {
        cy.visit('https://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', message => {
            expect(message).to.be.equal('Click OK!')
        })
    })
    
    it.only('popup invoke', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.window().then(janela => {
            cy.stub(janela, 'open').as('windowOpen')
        })
        cy.get('#buttonPopUp').click()
        cy.get('@windowOpen').should('be.called') // @ indica um alias
    })

    describe.only('popup with links', () => {
        beforeEach(() => {
            cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        })

        it('Check popup url', () => {
            cy.contains('Popup2')
                .should('have.prop', 'href')
                .and('equal', 'https://www.wcaquino.me/cypress/frame.html')
        })

        it('Should access popup dinamically', () => {
            cy.contains('Popup2').then($access => {
                const href = $access.prop('href')
                cy.visit(href)
                cy.get('#tfield').type('funciona')
            })
        })

        it('Should force link on same page', () => {
            cy.contains('Popup2')
                .invoke('removeAttr', 'target')
                .click()
            cy.get('#tfield').type('funciona')
        })
    })
})