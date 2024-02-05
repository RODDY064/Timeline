context('Dashboard Suite',()=>{

    describe('Create Project, Event and Task test',()=>{  
        
        it('it should check if click on the create button create ui pop-up',()=>{
            cy.visit('http://localhost:3000/dashboard')
             
            cy.get('h1').should('contain.text','Dashboard') 
            cy.contains('Create').click()
            cy.get('h1').should('contain.text','Create a project')
            cy.get('form').should('be.visible')
            cy.get('form button[type="submit"]').contains('Submit').click()
            cy.contains('Add Team')
         
        })

        it('it should check if click on the add event  create  event ui pop-up',()=>{
            cy.visit('http://localhost:3000/dashboard')

            cy.contains('Create').click()
            cy.get('h1').should('contain.text','Create a project')
            cy.get('form').should('be.visible')
            cy.contains('#action','Add event').click()
            cy.get('h1').should('contain.text','Create event')
            cy.get('form').should('be.visible')
            cy.get('form button[type="submit"]').contains('Submit').click()
            cy.contains('Add Team')

        })



      
    })
})