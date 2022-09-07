//describe('Login', function (){
//    beforeEach(function(){
//     cy.fixture('userLoginDetails').then((user)=>{
//        userDetails = user
//      })
//    })
//    it('Sign in', function(){
//        cy.visit('https://react-redux.realworld.io/#/login')
//        cy.get('input[type="email"]').type(userDetails.email)
//        cy.get('input[type="password"]').type(userDetails.password)
//        cy.get('.btn').contains('Sign in').should('be.visible').click()
//    })
//})
//

//approach using 'alias' (.as)
describe('Login', function (){
    beforeEach(function(){
     cy.fixture('userLoginDetails').as('user')
    })
    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type(this.user.email)
        cy.get('input[type="password"]').type(this.user.password)
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})