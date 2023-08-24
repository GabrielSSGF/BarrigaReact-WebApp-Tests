/// <reference types="cypress" />

describe('Helpers', () => {

    beforeEach(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    it('Wrap', () => {
        const object = {nome: 'User', idade: 20}
        expect(object).to.have.property('nome')
        // object.should('have.property', 'nome') // object não possui should
        cy.wrap(object).should('have.property', 'nome') // agora funciona

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').then($elemento => {
            // $elemento.type('funciona?')
            $elemento.val('funciona via jquery')
            cy.wrap($elemento).type('funciona?')
        
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Found first button'))
        // promise.then(num => console.log(num))
        cy.wrap(promise).then(retorno => console.log(retorno)) // sincroniza a promise com a ordem do código
        cy.get('#buttonList').then(() => console.log('Found second button'))
        
        cy.wrap(1).then(num => {
            return 2
        }).should('be.equal', 2)
        })
    })
    
    it.only('Its', () => {
        const object = {nome: 'User', idade: 20}
        cy.wrap(object).should('have.property', 'nome', 'User')
        cy.wrap(object).its('nome').should('be.equal', 'User')
        expect(object).to.have.property('nome')
        
        const object2 = {nome: 'User', idade: 20, endereco: { rua: 'dos bobos'}}
        cy.wrap(object2).its('endereco').should('have.property', 'rua')
        cy.wrap(object2).its('endereco').its('rua').should('contains', 'bobos')
        cy.wrap(object2).its('endereco.rua').should('contains', 'bobos')

        cy.title().its('length').should('be.equal', 20)


    })
})