/// <reference types="cypress" />

describe('Work with basic elements', () => {
    before(() => { // Executa antes de todos os testes
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { // Executa todas as vezes antes de cada teste
        cy.reload()
    })

    it('Jquery Selector', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        // cy.get('table#tabelaUsuarios tbody > tr td:nth-child(3) > input').click() // Da errado pois ele retorna 5 elementoss
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input').click() // definindo a posição correta do tr, ele pega o primeiro elemento
        cy.get("[onclick*='Francisco']")
        cy.get("#tabelaUsuarios td:contains('Doutorado'):eq(0) ~ td:eq(3) > input")
        cy.get("#tabelaUsuarios tr:contains('Doutorado'):eq(0) td:eq(6) input")
    })
})