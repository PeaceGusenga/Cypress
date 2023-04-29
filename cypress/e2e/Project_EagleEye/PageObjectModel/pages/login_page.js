export class LoginPage {

    loginpage_textbox_username = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginpage_textbox_password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginpage_loginbutton = '.oxd-button'

    enterUsername(username){
        cy.get(loginpage_textbox_username).type(username)
    }

    enterPassword(password){
        cy.get(loginpage_textbox_password).type(password)
    }

    clickLogin(){
        cy.get(loginpage_loginbutton).click()
    }
}