export class LoginPage {

    loginpage_textbox_username = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginpage_textbox_password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginpage_loginbutton = '.oxd-button'
    loginpage_forgotPassword = '.orangehrm-login-forgot > .oxd-text'
    loginpage_invalidPassword = '.oxd-alert-content > .oxd-text'

    enterUsername(username){
        cy.get(this.loginpage_textbox_username).type(username)
    }

    enterPassword(password){
        cy.get(this.loginpage_textbox_password).type(password)
    }

    clickLogin(){
        cy.get(this.loginpage_loginbutton).click()
    }

    clickForgotPassword(){
        cy.get(this.loginpage_forgotPassword).click()
    }

    testInvaidPasswordError () {
        cy.get(this.loginpage_invalidPassword)
        .should('be.visible')
        .and('have.class','oxd-text oxd-text--p oxd-alert-content-text')
    }
}

