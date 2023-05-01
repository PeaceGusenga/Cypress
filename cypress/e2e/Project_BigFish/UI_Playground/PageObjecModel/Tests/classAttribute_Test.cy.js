/// <reference types="Cypress" />

import { IndexPage } from "../Pages/index_page"

var landingpage = new IndexPage ()

describe('Testing a site element that contains a Dynamic ID', () => {  
   
    it ('Navigate to Class Attribute section', () => {
        cy.visit('http://www.uitestingplayground.com/')
        landingpage.clickClassAttribute_Page()
    })

    it('Record Button Click', () => {
        cy.get('.class1').click()
        
    })
})