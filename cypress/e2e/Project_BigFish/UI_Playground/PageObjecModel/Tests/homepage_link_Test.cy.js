import { IndexPage } from "../Pages/index_page";

var landingPage = new IndexPage ()

describe('Test all the links on the landing page', () => {
    beforeEach(() =>{
        cy.visit('http://www.uitestingplayground.com/')
    })
    it('Test 1', () => {
        landingPage.clickDynamicID_Page
    })

    it('Test 2', () => {
        landingPage.clickClassAttribute_Page
    })

    it('Test 3', () => {
        landingPage.clickHidenLayers_Page
    })

    it('Test 4', () => {
        landingPage.clickLoadDelay_Page
    })

    it('Test 5', () => {
        landingPage.clickAjaxData_Page
    })

    it('Test 6', () => {
        landingPage.clickClientSideDelay_Page
    })

    it('Test 7', () => {
        landingPage.clickClick_Page
    })

    it('Test 8', () => {
        landingPage.clickDynamicTable_Page
    })

    it('Test 9', () => {
        landingPage.clickTextInput_Page
    })

    it('Test 10', () => {
        landingPage.clickScrollBars_Page
    })

    it
    ('Test 11', () => {
        landingPage.clickShadowDOM_Page
    })

    it
    ('Test 12', () => {
        landingPage.clickVerifyText_Page
    })

    it
    ('Test 13', () => {
        landingPage.clickProgressBar_Page
    })

    it
    ('Test 14', () => {
        landingPage.clickVisibility_Page
    })

    it
    ('Test 15', () => {
        landingPage.clickSampleApp_Page
    })

    it
    ('Test 16', () => {
        landingPage.clickMouseOver_Page
    })

    it
    ('Test 17', () => {
        landingPage.clickNonBreakingSpace_Page
    })

    it
    ('Test 18', () => {
        landingPage.clickOverlappedElement_Page
    })
})