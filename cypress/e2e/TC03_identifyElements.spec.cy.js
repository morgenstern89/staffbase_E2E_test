
describe("Create, mark and unmark as favorite", function(){
///Step 1. Log in
    it('Sign in', function(){
            cy.visit('https://react-redux.realworld.io/#/login')
            cy.title().should('eq','Conduit')
            cy.location('protocol').should('eq','https:')
//            cy.get('input[type="email"]').type('sar.yoon89@gmail.com')
//            cy.get('input[type="password"]').type('admin123')
//            cy.get('.btn').contains('Sign in').should('be.visible').click()

            cy.get('form').within(($form)=>{
            //cy.get()will only search for elements within form, not within the entire document
            cy.get('input[type="email"]').type('sar.yoon89@gmail.com')
            cy.get('input[type="password"]').type('admin123')
            cy.root().submit() //submits the form yielded from 'within'
            })
            cy.contains('Your Feed', {timeout:10000}).should('be.visible')
        })

/// Step 2. Create a new post
    it('Create Post', function(){
            const uuid = () => Cypress._.random(0, 1e6);
            const id = uuid();
            const title = `title${id}`;

//            cy.contains('New Post').click()
            cy.get('ul.navbar-nav').children().contains('New Post').click() //get the children elements under the class

            cy.hash().should('include','#/editor')
//            cy.location('hash').should('include','#/editor') //same as cy.hash
            cy.get('form').within(($form)=>{
            //cy.get()will only search for elements within form, not within the entire document
            cy.get('input').first().type(title)
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
            })

            cy.url().should('include','article')
        })
/// Step 3. Favorite & Reload & Go back
    it('Mark and unmark as favorite', function() {

//            cy.get('.nav-link').contains('beluga89').click()
            cy.get('ul.nav').children().contains('beluga89').click()
            cy.contains('My Articles').should('be.visible')
            cy.get('.ion-heart').first().click()
            cy.contains('Favorited Articles').click()
            cy.url().should('include', 'favorites')
            cy.get('.ion-heart',{timeout:10000}).first().click()
            cy.reload()
            cy.contains('No articles are here... yet.').should('be.visible')
            cy.go('back')
             //cy.go(-1)
   })

})