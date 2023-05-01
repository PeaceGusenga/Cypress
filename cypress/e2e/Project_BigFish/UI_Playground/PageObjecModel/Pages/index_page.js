export class IndexPage {
   //Page Links
    indexpage_DynamicID_page = ''
    indexpage_ClassAttribute_page = ''
    indexpage_HiddenLayers_page = ''
    indexpage_LoadDelay_page = ''
    indexpage_AjaxData_page = ''
    indexpage_ClientSideDelay_page = ''
    indexpage_Click_page = ''
    indexpage_TextInput_page = ''
    indexpage_Scrollbars_page = ''
    indexpage_DynamicTable_page = ''
    indexpage_VerifyText_page = ''
    indexpage_ProgressBar_page = ''
    indexpage_Visibility_page = ''
    indexpage_SampleApp_page = ''
    indexpage_MouseOver_page = ''
    indexpage_NonBreakingSpace_page = ''
    indexpage_OverlappedElement_page = ''
    indexpage_ShadowDOM_page = ''

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