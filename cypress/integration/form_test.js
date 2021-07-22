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

    // can the input boxes be typed into?
    it('check that input boxes can be typed into', () => {
        nameInput()
            .should('have.value','')
            .type('Johnny Test')
            .should('have.value','Johnny Test')
        emailInput()
            .should('have.value','')
            .type('johnny@test.com')
            .should('have.value','johnny@test.com')
        passwordInput()
            .should('have.value','')
            .type('password')
            .should('have.value','password')
        tosInput()
            .should('not.be.checked')
            .check()
            .should('be.checked')
            submitBtn().should('not.be.disabled')
    })
})

const nameInput = () => cy.get('input[name=name]')
const emailInput = () => cy.get('input[name=email]')
const passwordInput = () => cy.get('input[name=pw]')
const tosInput = () => cy.get('input[name=tos]')

const submitBtn = () => cy.get('button[id="submitBtn"]')

const foobarInput = () => cy.get('input[name=foobar]')