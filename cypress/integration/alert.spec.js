/// <reference types="cypress" />

describe('Alerts', () => {
    before(() => { // Executa antes de todos os testes
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { // Executa todas as vezes antes de cada teste
        cy.reload()
    })

    it.only('Alert', () => {
       // cy.get('#alert').click()
       // cy.on('window:alert', mensagem => { // pega eventos que acontecem na tela
       //     console.log(mensagem)
       //     expect(mensagem).to.be.equal('Alert Simples')
        //}) 
        cy.clickAlert('#alert', 'Alert Simples')
    })

    it('Alert with mock', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })

    it('Confirm', () => {
        
        cy.on('window:confirm', mensagem => {
            console.log(mensagem)
            expect(mensagem).to.be.equal('Confirm Simples')

        })
        cy.on('window:alert', mensagem => {
            expect(mensagem).to.be.equal('Confirmado')
        })

        cy.get('#confirm').click()
    })
    
    it('Deny', () => {
        
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
    
    it('Prompt', () => {
        cy.window().then(janela => {
            cy.stub(janela, 'prompt').returns('42')
        })
        
        cy.on('window:confirm', mensagem => {
            expect(mensagem).to.be.equal('Era 42?')
        })
        
        cy.on('window:alert', mensagem => {
            expect(mensagem).to.be.equal(':D')
        })
        
        cy.get('#prompt').click()
    })

    it('Validando mensagem', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))
        
            cy.get('#formNome').type('Gabriel')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio')) 
        
        cy.get('[data-cy=dataSobrenome').type('Soares')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio')) 
        
        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
    })
})