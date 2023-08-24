/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        // const title = cy.title()
        // console.log(title)

        // cy.pause() // me permite pausar o teste e seguir passo a passo

        cy.title().should('be.equal', 'Campo de Treinamento');
        cy.title().should('contain', 'Campo');

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo');

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo');
        
        let syncTitle
            
        //TODO escrever log no console

        cy.title().then(title => {
            console.log(title)
        })
        
        cy.title().should(title => {
            console.log(title)
        })
        
        //TODO escrever o title em um campo de texto

        //cy.title().then(title => {
        //    console.log(title)
        //    cy.get('#formNome').type(title)
        //})
        
        cy.title().then(title => {
            console.log(title)
            cy.get('#formNome').type(title)
            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]').then($elemento => {
            $elemento.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($elemento => {
            cy.wrap($elemento).type(syncTitle)
        })

        // cy.title().should('contain', 'Campo').debug() // debug do should
        // cy.title().debug().should('contain', 'Campo') // debug do title

    })

    it('Should find and interact with an element', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })
})