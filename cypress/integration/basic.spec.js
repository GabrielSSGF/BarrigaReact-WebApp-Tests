/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        // const title = cy.title()
        // console.log(title)

        cy.pause() // me permite pausar o teste e seguir passo a passo

        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo');

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo');

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo');

        //TODO escrever log no console
        //TODP escrever o title em um campo de texto

        cy.title().should('contain', 'Campo').debug() // debug do should
        cy.title().debug().should('contain', 'Campo') // debug do title

    })

    it('Should find and interact with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')

    })
})