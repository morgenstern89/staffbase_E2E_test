
describe("Create, mark and unmark as favorite", function(){

    Cypress.config('pageLoadTimeout', 10000)

    before(function () {
      cy.SignIn()
    })

    it('Create Post', function(){
            const uuid = () => Cypress._.random(0, 1e6);
            const id = uuid();
            const title = `title${id}`;

            cy.get('ul.navbar-nav').children().contains('New Post').click() //get the children elements under the class

            cy.hash().should('include','#/editor')

            cy.get('form').within(($form)=>{

            cy.get('input').first().type(title)
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
            })

            cy.url().should('include','article')
        })

    it('Mark and unmark as favorite', function() {

            cy.get('ul.navbar-nav').children().contains('beluga89').click()
            cy.contains('My Articles').should('be.visible')
            cy.get('.ion-heart').first().click()
            cy.contains('Favorited Articles').click()
            cy.url().should('include', 'favorites')
            cy.get('.ion-heart',{timeout:10000}).first().click()
            cy.reload()
            cy.contains('No articles are here... yet.').should('be.visible')
            cy.go('back')
   })

})