export class ForgotPasswordPage {

    forgotPasswordPage_textbox_username = '.oxd-input'
    forgotPasswordPage_resetpassword_button = '.oxd-button--secondary'
    forgotPasswordPage_SuccessfulText_location = '.oxd-text--h6'

    enterUsername(username){
        cy.get(this.forgotPasswordPage_textbox_username).type(username)
    }

    clickResetPassword(){
        cy.get(this.forgotPasswordPage_resetpassword_button).click()
    }

    assertResetSuccessful(){
        cy.get(this.forgotPasswordPage_SuccessfulText_location).should('have.class','oxd-text oxd-text--h6 orangehrm-forgot-password-title')
    }
}