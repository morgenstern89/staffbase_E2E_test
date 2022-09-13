import Login from './pageObjects/loginPage.js'

describe("Login", function (){
    const login = new Login()

    it('Sign in', function(){
        cy.visit('https://react-redux.realworld.io/#/login')
        login.email().type('sar.yoon89@gmail.com')
        login.password().type('admin123')
        login.signInButton().should('be.visible').click()
    })
})

