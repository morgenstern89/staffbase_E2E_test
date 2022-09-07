
describe("Create, mark and unmark as favorite", function(){

    Cypress.config('pageLoadTimeout', 10000)

    before(function(){
           cy.SignIn() //replaced by the customCommand
        }) //using Mocha hook "before"

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

            cy.get('ul.nav').children().contains('beluga89').click()
            cy.contains('My Articles').should('be.visible')
            cy.get('.ion-heart').first().click()
            cy.contains('Favorited Articles').click()
            cy.url().should('include', 'favorites')
            cy.get('.btn-primary').first().then(($fav)=>{
                const favCount = $fav.text() //extracted a text property and then verify using the assertion
                expect(parseInt(favCount)).to.eq(1) //convert into number using parseInt
            }).click() //verify the count
            cy.reload()
            cy.contains('No articles are here... yet.').should('be.visible')
            cy.go('back')
   })

})