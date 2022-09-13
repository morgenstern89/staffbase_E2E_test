describe('Read-Write files content', function(){
    it('Write to a file', function(){
        cy.writeFile('samepleFile.txt','Hello World\n')
        cy.writeFile('samepleFile.txt','I am Sarah.',{flag:'a+'})
    })

    it('Read from a file', function(){
        cy.readFile('samepleFile.txt').should('contains','Hello World')

    })


})