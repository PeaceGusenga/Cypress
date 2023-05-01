/// <reference types="Cypress" />

import { IndexPage } from "../Pages/index_page"

var landingpage = new IndexPage ()

describe('should click a button, wait 15 seconds for ajax data, verify new content loaded', () => {
 
 
  it('Test 1', () => {
    // Visit the page that contains the button
    cy.visit('http://www.uitestingplayground.com/')
    landingpage.clickAjaxData_Page()

    // Find and click the button
    cy.get('#ajaxButton').click();

    // Wait for 15 seconds
    cy.wait(15000);
  })
  it('Test 2', () =>{
   // Verify that new content has been loaded on the site
   cy.contains('Data loaded with AJAX get request.').should('be.visible');
  })
});
