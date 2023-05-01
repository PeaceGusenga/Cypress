/// <reference types="Cypress" />

import { IndexPage } from "../Pages/index_page"

var landingpage = new IndexPage ()

describe('Testing class attributes', () => {  
   
    it ('Navigate to Class Attribute section', () => {
        cy.visit('http://www.uitestingplayground.com/')
        landingpage.clickClassAttribute_Page()
    })

    it('Record Button Click', () => {
        cy.get('.class1').click()

    })

    it('find the button using a unique class identifier', () => {
        // use a CSS attribute selector to select the button with 
        //the specific word in its class name
        cy.get('button[class*=\'btn-primary\']') 
        .should('have.css', 'background-color', 'rgb(0, 123, 255)') // assert the background color of the button
/*
In this example, my-class-name is the class name of the button you want to target. 
The should() method allows you to make an assertion on the selected element. 
The first argument to should() is the property you want to assert, which in this case 
is the background-color property. The second argument is 
the expected value of the property, which is rgb(0, 123, 255) in this case.

Note that the value of the background-color property is returned 
as an RGB string, so you need to compare it with the RGB value of the color you're 
expecting. In this case, rgb(0, 123, 255) is the RGB value of the color #007BFF. 
If the background color of the button is not #007BFF, 
the assertion will fail and the test will report an error.
*/
    })

})