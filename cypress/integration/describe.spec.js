/// <reference types="cypress" />

it('A external test', () => { 

})

// Ignores other tests
/* it.only('A external test', () => { 

}) */


// Skippable group
// describe.skip('Should group tests', () => {
describe('Should group tests', () => {
    describe('Should group more specific tests', () => {
        it('A specific test', () => { 

        })
    })
    
    // Skippable test 
    /*
    describe('Should group more specific tests', () => {
        it.skip('A skippable test', () => { 

        })
    }) */

    describe('Should group more specific tests 2', () => {
        it('A specific test 2', () => { 

        })
    })

    it('A internal test', () => { 

    })
})