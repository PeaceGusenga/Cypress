it('Page Object Model Example', () => {
    
    //Navigate to Demo login webpage
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Enter Username
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

    //Enter Password
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
})