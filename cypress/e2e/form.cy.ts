context('Dashboard Suite',()=>{
 
    /// i will be working on the test 
    describe('Form Test',()=>{
        it('it should check if the project form is working',()=>{
            cy.visit('http://localhost:3000/dashboard');
            cy.get('h1').should('contain.text','Dashboard');
            cy.contains('Create').click();
            cy.get('h1').should('contain.text','Create a project');
            cy.get('form').should('be.visible');
            cy.get('form input[name="name"]').type('Project 1');
            cy.get('form textarea[name="description"]').type('Project 1 description');
            cy.get('form input[name="startDate"]').type('2021-06-01');
            cy.get('form input[name="endDate"]').type('2021-06-30');
            cy.get('form button[type="submit"]').click();
            cy.contains('Add Team');


        })

        it('it should check if the event form is working',()=>{
            cy.visit('http://localhost:3000/dashboard');
            cy.get('h1').should('contain.text','Dashboard');
            cy.contains('Create').click();
            cy.get('h1').should('contain.text','Create a project');
            cy.get('form').should('be.visible');
            cy.contains('#action','Add event').click();
            cy.get('h1').should('contain.text','Create event');
            cy.get('form').should('be.visible');
            cy.get('form input[name="name"]').type('Event 1');
            cy.get('form textarea[name="description"]').type('Event 1 description');
            cy.get('form input[name="startDate"]').type('2021-06-01');
            cy.get('form input[name="endDate"]').type('2021-06-30');
            cy.get('form button[type="submit"]').click();
            cy.contains('Add Team');
        })
    })

})