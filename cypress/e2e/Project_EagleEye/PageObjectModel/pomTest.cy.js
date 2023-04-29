import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage() 

it('Page Object Model Example', () => {
    
    //Navigate to Demo login webpage
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Enter Username
    loginPage.enterUsername
    //Enter Password
    loginPage.enterPassword
    //Click login Button
    loginPage.clickLogin
})