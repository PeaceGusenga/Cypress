/// <reference types="Cypress" />

import { IndexPage } from "../Pages/index_page"

var landingpage = new IndexPage ()

describe('getting to the UI Playground Landing Page', () => {  
   
    it ('Navigate to DynamicID section', () => {
        cy.visit('http://www.uitestingplayground.com/')
        landingpage.clickDynamicID_Page()
    })

    it('click Button', () => {
        cy.contains('Button with Dynamic ID').click()
    })

    it('check button ID value', () => {
        //added static ID to assert ID changes
        cy.contains('Button with Dynamic ID').should('not.have.id','c12469b7-c98a-cae6-f0d6-29e4abff2b70')
    })
})