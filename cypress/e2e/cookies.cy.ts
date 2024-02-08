describe('Cookies test',()=>{

    it('Get all cookies ',()=>{
        
        cy.visit('http://localhost:3000')
        cy.getAllCookies().should('be.empty')
    })

})