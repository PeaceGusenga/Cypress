/// <reference types="Cypress" />

import { IndexPage } from "../Pages/index_page"

var landingpage = new IndexPage ()

describe('An element may appaear on a page after heavy JavaScript processing on a client side.', () => {
 
 
  it('Test 1 - click the button, wait 15 seconds for ajax data', () => {
    // Visit the page that contains the button
    cy.visit('http://www.uitestingplayground.com/')
    landingpage.clickClientSideDelay_Page()

    // Find and click the button
    cy.get('#ajaxButton').click();

    // Wait for 15 seconds
    cy.wait(15000);
  })
  it('Test 2 - verify new content loaded', () =>{
   // Verify that  content has been loaded on the site
   cy.contains('Data calculated on the client side.').should('be.visible');
  })
});
