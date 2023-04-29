import { LoginPage } from "./pages/login_page"
import { DashboardPage } from "./pages/dashboard_page"

var loginPage = new LoginPage() 
var dashboardPage = new DashboardPage()

describe('All Login Tests for OrangeHRM Website', () => {
it('Login Test 1', () => {
    //Navigate to Demo login webpage
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Enter Username
    loginPage.enterUsername('Admin')
    //Enter Password
    loginPage.enterPassword('admin123')
    //Click login Button
    loginPage.clickLogin()
    //Click Profile Drop-down
    dashboardPage.clickProfileDropdown()
    //Click Logout
    dashboardPage.clickLogout()

})

it('Login Test 2', () => {
    //Navigate to Demo login webpage
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Enter Username
    loginPage.enterUsername('aadmin')
    //Enter Password
    loginPage.enterPassword('admin1923')
    //Click login Button
    loginPage.clickLogin()
    //Click Profile Drop-down
    dashboardPage.clickProfileDropdown()
    //Click Logout
    dashboardPage.clickLogout()

})

it('Login Test 3', () => {
    //Navigate to Demo login webpage
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //Enter Username
    loginPage.enterUsername('aadmin')
    //Enter Password
    loginPage.enterPassword('admin1923')
    //Click login Button
    loginPage.clickLogin()
    //Assert invalid Login Error Appears
    loginPage.testInvaidPasswordError()

})
})