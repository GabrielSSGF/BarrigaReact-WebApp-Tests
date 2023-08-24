/// <reference types="cypress" />

describe('Work with basic elements', () => {
    before(() => { // Executa antes de todos os testes
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { // Executa todas as vezes antes de cada teste
        cy.reload()
    })

    it('Texts', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...') // Have.text quer o texto exato
    })
    
    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
        
        cy.reload() // recarrega a tela
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    })

    it('TextField', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')
        
        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')
        
            cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}') // backspace deletes de last itens on a string
            .should('have.value', 'Teste123')
        
        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', {delay:100})
            .should('have.value', 'acerto')
    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        
        cy.get('#formSexoMasc').should('not.be.checked')
    
        cy.get("[name='formSexo']")
            .should('have.length', 2)
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')
    
        cy.get('[name=formComidaFavorita]').click({multiple: true})
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })

    it.only('Combo', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp') // tem que verificar e usar o value da tag option no html
        
        cy.get('[data-test=dataEscolaridade]')
            .select('1o grau completo')
            .should('have.value', '1graucomp')

        //TODO validar as opções do combo

        cy.get('[data-test=dataEscolaridade] option')
            .should('have.length', 8)
        cy.get('[data-test=dataEscolaridade] option')
            .then($array => {
                const values = []
                $array.each(function() {
                    values.push(this.innerHTML)
                })
                expect(values).to.include.members(["Superior", "Mestrado"])
            })

    })

    it.only('Multiple Combo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida', 'nada']) // tem que verificar e usar o value da tag option no html
    
        //TODO validar opções elecionadas do combo múltiplo

        // cy.get('[data-testid=dataEsportes]').should('have.value', ['natacao', 'Corrida', 'nada'])
        cy.get('[data-testid=dataEsportes]').then($elemento => {
            expect($elemento.val()).to.be.deep.equal(['natacao', 'Corrida', 'nada'])
            expect($elemento.val()).to.have.length(3)
        })

        cy.get('[data-testid=dataEsportes]')
            .invoke('val')
            .should('eql', ['natacao', 'Corrida', 'nada'])

    })
})