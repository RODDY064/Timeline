describe("Search Test",()=>{
    it("should text the search functionality",()=>{

        cy.visit("http://localhost:3000/dashboard")
        cy.get("#searchInput").type("Google")
        cy.get("#searchInput").should("have.value","Google")
        cy.wait(3000)
        cy.get('#truncatedText').first().invoke('text').then(text => {
            expect(text).to.match(/.*Google.*/);
          });
          


    })
})