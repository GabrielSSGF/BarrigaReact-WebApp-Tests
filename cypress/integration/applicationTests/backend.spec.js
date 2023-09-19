/// <reference types="cypress" />

describe('Should test at a functional level', () => {
    let token, email = 'accountEmail@mail.com', senha = 'accountPassword123'
    before(() => {
        cy.getToken(email, senha)
            .then(tkn => {
                token = tkn
            })
        cy.resetRest()
    })

    beforeEach(() => {
    })

    function formatDateToTwoDigits(date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
    
        return `${day}/${month}/${year}`;
    }

    it('Should create an account', () => {
        cy.getToken(email, senha)
            .then(token => {
                cy.request({
                    url: '/contas',
                    method: 'POST',
                    headers: { Authorization: `JWT ${token}`},
                    body: {
                        nome: 'Conta via rest'
                    }
                }).as('response')
            })
        cy.get('@response').then(response => {
            expect(response.status).to.be.equal(201)
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('nome'), 'Conta via rest'
        })
    })

    it('Should update an account', () => {
        cy.getContaByName('Conta para alterar').then(contaId => {
            cy.request({
                url: `/contas/${contaId}`,
                method: 'PUT',
                headers: { Authorization: `JWT ${token}` },
                body: {
                    nome: 'conta alterada via rest'
                }
            }).as('response')
        })

        cy.get('@response').its('status').should('be.equal', 200)
    })
         
    

    it('Should not create an account with same name', () => {
        cy.request({
            url: '/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}`},
            body: {
                nome: 'Conta mesmo nome'
            },
            failOnStatusCode: false
        }).as('response')

        cy.get('@response').then(response => {
            console.log(response)
            expect(response.status).to.be.equal(400)
            expect(response.body.error).to.be.equal('Já existe uma conta com esse nome!')
        })
    })

    it('Should create a transaction', () => {
        const currentDate = new Date();
        const formattedDate = formatDateToTwoDigits(currentDate);

        cy.getContaByName('Conta para movimentacoes').then(contaId => {
            cy.request({
                method: 'POST',
                url: '/transacoes',
                headers: { Authorization: `JWT ${token}`},
                body: {
                    conta_id: contaId,
                    data_pagamento: formattedDate,
                    data_transacao: formattedDate,
                    descricao: "desc",
                    envolvido: "inter",
                    status: true,
                    tipo: "REC",
                    valor: "123",
                }
            }).as('response')
        })
        cy.get('@response').its('status').should('be.equal', 201)
        cy.get('@response').its('body.id').should('exist')
    })
})