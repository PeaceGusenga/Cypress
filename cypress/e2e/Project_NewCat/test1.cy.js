/// <reference types ="cypress"/>

it ('Google Search', function(){
   //Go to URL
    cy.visit('https://google.com/')

    //Find searchbar and enter text
    cy.get('.gLFyf ').type('FC Bayern Munich{Enter}')

    //Alternate way instead of {Enter}
    //click search button
    //cy.contains('Google Search').click()

    //click to display full fixtures
    cy.get('.U0faLd > .PUDfGe > .z1asCe > svg',{timeout:6000}).click()

    // click to display latest News
    cy.get('[tabindex="-1"] > .tb_u > .tb_h > .tb_sh > .PPjCfd > [data-tab_type="NEWS"]').click()

    // click to display Table
    cy.get('[tabindex="-1"] > .tb_u > .tb_h > .tb_sh > .PPjCfd > [data-tab_type="STANDINGS"]').click()

    // click to display Players
    cy.get('[tabindex="-1"] > .tb_u > .tb_h > .tb_sh > .PPjCfd > [data-tab_type="PLAYERS"]').click()
})