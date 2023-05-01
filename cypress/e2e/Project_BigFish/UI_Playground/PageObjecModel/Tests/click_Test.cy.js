/// <reference types="Cypress" />

import { IndexPage } from "../Pages/index_page"

var landingpage = new IndexPage ()


it('Test 1 - verify that the button is clickable', () => {

    // Visit the page that contains the button
    cy.visit('http://www.uitestingplayground.com/')
    landingpage.clickClick_Page()

    });

    it('Test 2 - verify button is not disbaled', () => {
        // Assert that the button is not disabled
        cy.get('#badButton').should('be.enabled');

        })

    it('Test 3 -  Click Button', () => {
    // Click the button
    cy.get('#badButton').click();
    })

    it('Test 4 - verify button is disbaled', () => {
        // Assert that the button is disabled
        cy.get('#badButton').should('not.be.enabled');

        })
    it('Test 5 - Click button again', () => {
        // Click the button again
    cy.get('#badButton').click();
    })
   

  