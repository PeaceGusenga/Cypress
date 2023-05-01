import { LoginPage } from "./pages/login_page"
import { DashboardPage } from "./pages/dashboard_page"

var loginPage = new LoginPage() 
var dashboardPage = new DashboardPage()

describe('All Login Tests for OrangeHRM Website', () => {
    //Run before every test
    beforeEach(() => {
         //Navigate to Orangehrm login webpage
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    } )
it('Login Test 1', () => {
    //Enter Username
    loginPage.enterUsername('Admin')
    //Enter Password
    loginPage.enterPassword('admin123')
    //Click login Button
    loginPage.clickLogin()
    //Click Profile Drop-down
    dashboardPage.clickProfileDropdown()
    // wait 3 seconds
    cy.wait(3000)
    //Click Logout
    dashboardPage.clickLogout()

})

it('Login Test 2', () => {
    //Enter Username
    loginPage.enterUsername('aadmin')
    //Enter Password
    loginPage.enterPassword('admin1923')
    //Click login Button
    loginPage.clickLogin()
    //Click Profile Drop-down
    cy.wait(2000)
    //Click Logout
    dashboardPage.clickProfileDropdown()
     // wait 3 seconds
     cy.wait(3000)
    //Click Logout
    dashboardPage.clickLogout()

})

it('Login Test 3', () => {
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