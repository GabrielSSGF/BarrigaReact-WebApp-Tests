/// <reference types="cypress" />

describe('Alerts', () => {
    before(() => { // Executa antes de todos os testes
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { // Executa todas as vezes antes de cada teste
        cy.reload()
    })

    it('Alert', () => {
        cy.get('#alert').click()
        cy.on('window:alert', mensagem => { // pega eventos que acontecem na tela
            console.log(mensagem)
            expect(mensagem).to.be.equal('Alert Simples')

        }) 
    })

    it.only('Alert with mock', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })

    it.only('Confirm', () => {
        
        cy.on('window:confirm', mensagem => {
            console.log(mensagem)
            expect(mensagem).to.be.equal('Confirm Simples')

        })
        cy.on('window:alert', mensagem => {
            expect(mensagem).to.be.equal('Confirmado')
        })

        cy.get('#confirm').click()
    })

    it.only('Deny', () => {
        
        cy.on('window:confirm', mensagem => {
            console.log(mensagem)
            expect(mensagem).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', mensagem => {
            expect(mensagem).to.be.equal('Negado')
        })

        cy.get('#confirm').click()
    })
})