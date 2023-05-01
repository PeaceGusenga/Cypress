export class IndexPage {
   //Page Links
    indexpage_DynamicID_page = ':nth-child(1) > :nth-child(1) > h3 > a'
    indexpage_ClassAttribute_page = ':nth-child(1) > :nth-child(2) > h3 > a'
    indexpage_HiddenLayers_page = ':nth-child(1) > :nth-child(3) > h3 > a'
    indexpage_LoadDelay_page = ':nth-child(1) > :nth-child(4) > h3 > a'
    indexpage_AjaxData_page = ':nth-child(2) > :nth-child(1) > h3 > a'
    indexpage_ClientSideDelay_page = ':nth-child(2) > :nth-child(2) > h3 > a'
    indexpage_Click_page = ':nth-child(2) > :nth-child(3) > h3 > a'
    indexpage_TextInput_page = ':nth-child(2) > :nth-child(4) > h3 > a'
    indexpage_Scrollbars_page = ':nth-child(3) > :nth-child(1) > h3 > a'
    indexpage_DynamicTable_page = ':nth-child(3) > :nth-child(2) > h3 > a'
    indexpage_VerifyText_page = ':nth-child(3) > :nth-child(3) > h3 > a'
    indexpage_ProgressBar_page = ':nth-child(3) > :nth-child(4) > h3 > a'
    indexpage_Visibility_page = ':nth-child(4) > :nth-child(1) > h3 > a'
    indexpage_SampleApp_page = ':nth-child(4) > :nth-child(2) > h3 > a'
    indexpage_MouseOver_page = ':nth-child(4) > :nth-child(3) > h3 > a'
    indexpage_NonBreakingSpace_page = ':nth-child(4) > :nth-child(4) > h3 > a'
    indexpage_OverlappedElement_page = ':nth-child(5) > :nth-child(1) > h3 > a'
    indexpage_ShadowDOM_page = ':nth-child(5) > :nth-child(2) > h3 > a'

    //Open Links
    clickDynamicID_Page(){
        cy.get(this.indexpage_DynamicID_page).click()
    }

    clickClassAttribute_Page(){
        cy.get(this.indexpage_ClassAttribute_page).click()
    } 
    
    clickHidenLayers_Page(){
        cy.get(this.indexpage_HiddenLayers_page).click()
    } 
    
    clickLoadDelay_Page(){
        cy.get(this.indexpage_LoadDelay_page).click()
    } 
    
    clickAjaxData_Page(){
        cy.get(this.indexpage_AjaxData_page).click()
    } 
    
    clickClientSideDelay_Page(){
        cy.get(this.indexpage_ClientSideDelay_page).click()
    } 
    
    clickClick_Page(){
        cy.get(this.indexpage_Click_page).click()
    } 
    
    clickMouseOver_Page(){
        cy.get(this.indexpage_MouseOver_page).click()
    } 
    
    clickTextInput_Page(){
        cy.get(this.indexpage_TextInput_page).click()
    } 
    
    clickScrollBars_Page(){
        cy.get(this.indexpage_Scrollbars_page).click()
    } 
    
    clickDynamicTable_Page(){
        cy.get(this.indexpage_DynamicTable_page).click()
    } 
    
    clickVerifyText_Page(){
        cy.get(this.indexpage_VerifyText_page).click()
    } 
    
    clickProgressBar_Page(){
        cy.get(this.indexpage_ProgressBar_page).click()
    } 
    
    clickVisibility_Page(){
        cy.get(this.indexpage_Visibility_page).click()
    } 
    
    clickSampleApp_Page(){
        cy.get(this.indexpage_SampleApp_page).click()
    } 
    
    clickNonBreakingSpace_Page(){
        cy.get(this.indexpage_NonBreakingSpace_page).click()
    }

    clickOverlappedElement_Page(){
        cy.get(this.indexpage_OverlappedElement_page).click()
    }

    clickShadowDOM_Page(){
        cy.get(this.indexpage_ShadowDOM_page).click()
    }
}