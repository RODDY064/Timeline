context('Home Suite',()=>{

    describe('Home Test',()=>{  
    
         it('it should contain home text',()=>{
            cy.visit('http://localhost:3000')

            cy.get('div').should('contain.text','Home') 
         })
    })

})