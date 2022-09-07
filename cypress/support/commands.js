
Cypress.Commands.add("SignIn", ()=>{
        cy.visit('/#/login') //the base url configured in cypress.config.js file will enable open the page
        cy.title().should('eq','Conduit')
        cy.location('protocol').should('eq','https:')

        cy.get('form').within(($form)=>{
        //cy.get()will only search for elements within form, not within the entire document
        cy.get('input[type="email"]').type('sar.yoon89@gmail.com')
        cy.get('input[type="password"]').type('admin123')
        cy.root().submit() //submits the form yielded from 'within'
    })
    cy.contains('Your Feed', {timeout:10000}).should('be.visible')
})