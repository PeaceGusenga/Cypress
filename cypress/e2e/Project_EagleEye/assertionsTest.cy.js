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
    
    //Assert whether element has sepecific id
    cy.get('.query-btn').should('have.id','query-btn')
    
    //Assert whether element is part of specific class
    cy.get('[data-test-id="test-example"]').should('have.class', 'example')
    
    //Assert whether element is visisble
    cy.get('#query-btn').should('be.visible')

    //Assert whether an Attribute is equal to a specific value
    cy.get('[data-test-id="test-example"]')
  .invoke('attr', 'data-test-id')
  .should('equal', 'test-example')

  // Chain extra Assertions using "and"
  cy.get('#query-btn')
  .should('be.visible')
  .and('include.text','Button')



})