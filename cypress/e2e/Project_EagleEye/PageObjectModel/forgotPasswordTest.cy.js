import { LoginPage } from "./pages/login_page";
import { ForgotPasswordPage } from "./pages/forgotPassword_page";

var loginPage = new LoginPage()
var forgotPW = new ForgotPasswordPage()

it('Forgot Password Test 1', () => {
    //Navigate to Demo login webpage
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //click Forgot Password
    loginPage.clickForgotPassword()

    //Enter username
    forgotPW.enterUsername('Admin')

    //Click Reset Password
    forgotPW.clickResetPassword()

    //Assert Password Reset Sent
    forgotPW.assertResetSuccessful()
})

it('Forgot Password Test 2', () => {
    //Navigate to Demo login webpage
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //click Forgot Password
    loginPage.clickForgotPassword()

    //Enter username
    forgotPW.enterUsername('Goku')

    //Click Reset Password
    forgotPW.clickResetPassword()

    //Assert Password Reset Sent
    forgotPW.assertResetSuccessful()
})