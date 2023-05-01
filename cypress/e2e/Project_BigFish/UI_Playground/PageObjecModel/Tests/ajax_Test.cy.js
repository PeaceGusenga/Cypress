/// <reference types="Cypress" />

import { IndexPage } from "../Pages/index_page"

var landingpage = new IndexPage ()

describe('Test to wait for an element to show up', () => {
 
 
  it('should click a button, wait 15 seconds for ajax data', () => {
    // Visit the page that contains the button
    cy.visit('http://www.uitestingplayground.com/')
    landingpage.clickAjaxData_Page()

    // Find and click the button
    cy.get('#ajaxButton').click();

    // Wait for 15 seconds
    cy.wait(15000);
  })
  it('verify new content loaded', () =>{
   // Verify that new content has been loaded on the site
   cy.contains('Data loaded with AJAX get request.').should('be.visible');
  })
});
