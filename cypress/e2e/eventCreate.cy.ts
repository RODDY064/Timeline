describe("Event create test", () => {

    it("it should check if click on the add event  create  event ui pop-up", () => {
        cy.visit("http://localhost:3000/dashboard");

        cy.get("#addDot").first().click();
        cy.contains("Add event").first().click();
        cy.get("h1").should("contain.text", "Create event");
        cy.get("form").should("be.visible");
        cy.get("form input[name=\"name\"]").type("Event 1");
        cy.get("form textarea[name=\"description\"]").type("Event 1 description");
        cy.get("form input[name=\"startDate\"]").type("2021-06-01");
        cy.get("form input[name=\"endDate\"]").type("2021-06-30");
        cy.url().should("include", "id=");
        cy.get("form button[type=\"submit\"]").click();
        cy.contains("Google Project");
    });


});