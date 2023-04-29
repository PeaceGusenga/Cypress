it ('Assertions Test', () => {

    cy.visit('https://example.cypress.io')
    //Navigate to Next Page
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()
    //Assertion for  Button Test1
    cy.get('#query-btn').should('contain','Button')
    //Assertion for Button Test2
    cy.get('.query-btn').should('contain', 'Button')
    //Assertion for Button Test 3
    cy.get('#querying .well>button:first').should('contain', 'Button')


    //To find elements by data attribute, query using the attribute selector.
    cy.get('[data-test-id="test-example"]').should('have.class', 'example')


})