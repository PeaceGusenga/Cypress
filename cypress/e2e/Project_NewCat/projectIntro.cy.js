describe('My First Test', () => {
  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Assertion to check URL is correct
    cy.url().should('include','/commands/actions')
  })
})