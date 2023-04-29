import { LoginPage } from "./pages/login_page";
import { ForgotPasswordPage } from "./pages/forgotPassword_page";

var loginPage = new LoginPage()
var forgotPW = new ForgotPasswordPage()

describe('All Forgot Password Tests for OrangeHRM Website', () => {

    beforeEach(() => {
    //Navigate to Demo login webpage
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    } )
it('Forgot Password Test 1', () => {
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
    //click Forgot Password
    loginPage.clickForgotPassword()

    //Enter username
    forgotPW.enterUsername('Goku')

    //Click Reset Password
    forgotPW.clickResetPassword()

    //Assert Password Reset Sent
    forgotPW.assertResetSuccessful()
})
})