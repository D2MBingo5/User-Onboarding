import { iteratee } from "lodash"

// test folder
describe('User Onboarding Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/') // Assumes port 3000 is being used
    })

    it('sanity check', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
    })

    it('submit button disabled', () => {
        submitBtn().should('be.disabled')
    })

    // check if elements are loading
    it('check for right elements showing', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        tosInput().should('exist')
        submitBtn().should('exist')

        foobarInput().should('not.exist')
    })

    // checks to see if 
    // 1) the input boxes can be typed into 
    // 2) the tos checkbox can be checked 
    // 3) the submit button enables once all these are done 
    // 4) adds data to list     
    // 5) checks to see if the data exists
    it('check that input boxes can be typed into', () => {
        nameInput()
            .should('have.value','')
            .type('Johnny Test')
            .should('have.value','Johnny Test')
        submitBtn().should('be.disabled')
        emailInput()
            .should('have.value','')
            .type('johnny@test.com')
            .should('have.value','johnny@test.com')
        submitBtn().should('be.disabled')
        passwordInput()
            .should('have.value','')
            .type('password')
            .should('have.value','password')
        submitBtn().should('be.disabled')
        tosInput()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        submitBtn().should('not.be.disabled')
        submitBtn().click()
        cy.contains('Name: Johnny Test').should('exist')
    })
})

const nameInput = () => cy.get('input[name=name]')
const emailInput = () => cy.get('input[name=email]')
const passwordInput = () => cy.get('input[name=pw]')
const tosInput = () => cy.get('input[name=tos]')

const submitBtn = () => cy.get('button[id="submitBtn"]')

const foobarInput = () => cy.get('input[name=foobar]')