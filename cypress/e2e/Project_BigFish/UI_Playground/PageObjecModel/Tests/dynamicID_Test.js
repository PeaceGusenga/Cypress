import { IndexPage } from "../Pages/index_page"

var landingpage = new IndexPage ()

describe('getting to the UI Playground Landing Page', () => {   
    it ('visit site', () => {
        cy.visit('http://www.uitestingplayground.com/')
    })

    it ('Navigate to DynamicID section', () => {
        landingpage.clickDynamicID_Page()
    })
})