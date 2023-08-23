/// <reference types="cypress" />

describe('Wait...', () => {
    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })
    
    it.only('Retry', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
        // .should('not.exist')
            .should('exist')
            .type('funciona')
        
        /* 
        Its worth noting that you shouldnt assert two conditions that
        contradict eachother in the same line. Thats why this works: 
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        
        But this doesnt: 
        cy.get('#novoCampo')
            .should('not.exist')
            .should('exist')
        */
    })

    it.only('Find', () => {
        // cy.get('#buttonList').click()
        cy.get('#buttonListDOM').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
            // .should('contain', 'Item 2') // assertivas aninhadas tentarão até que todas passem
            // composição de comandos pode causar erros por isso
        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it.only('Timeout', () => {
        // cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', {timeout: 1000}).should('exist') // adiciona limite de tempo para a função
        // cy.get('#novoCampo').should('exist')
        
        // cy.get('#buttonListDOM').click()
        // cy.wait(5000) // evite o wait fixo, prefira os timeouts
        // cy.get('#lista li')
        //    .should('contain', 'Item 2')
        
        // Resulta em erro
        // cy.get('#buttonListDOM').click()
        // cy.get('#lista li span', {timeout: 30000})
            // .should('have.length', 1)
            // .should('have.length', 2)
        
        // Espera o tempo necessário para funcionar sem timeout
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span')
            .should('have.length', 1)
        cy.get('#lista li span')
            .should('have.length', 2)
    })

    it.only('Click retry', () => {
        cy.get('#buttonCount')
            .click()
            .should('have.value', '1') // devido a demora o valor 1 deu como certo
        cy.get('#buttonCount')
            .should('have.value', '11')
            .click()
            .should('have.value', '111')
    })

    it.only('Should vs Then', () => {
        cy.get('#buttonListDOM').click()
        cy.get('#lista li span').should($elementoHTML => { // should executa como se fosse um laço for
            // console.log($elementoHTML) // console escreve varias vezes
            expect($elementoHTML).to.have.length(1)
        })
        cy.get('#lista li span').then($elementoHTML => { // realiza as ações apenas quando o caso é verdadeiro
            // console.log($elementoHTML) // console escreve apenas uma vez
            expect($elementoHTML).to.have.length(1)
        })

        cy.get('#buttonListDOM').should($elementoHTML => { // realiza as ações apenas quando o caso é verdadeiro
            // console.log($elementoHTML) // console escreve apenas uma vez
            expect($elementoHTML).to.have.length(1)
            return 2 // should ignora o retorno
        }).and('have.id', 'buttonListDOM')

        /*
        cy.get('#buttonListDOM').then($elementoHTML => { // realiza as ações apenas quando o caso é verdadeiro
            // console.log($elementoHTML) // console escreve apenas uma vez
            expect($elementoHTML).to.have.length(1)
            return 2 // then pode ter seu retorno alterado, por isso resulta em erro
        }).and('have.id', 'buttonListDOM') */
        

        // sempre que precisar fazer uma nova busca dentro teste, sempre faça com o then
        // o should resulta em laço infinito
    
    })

})