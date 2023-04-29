import { LoginPage } from "./pages/login_page"
import { DashboardPage } from "./pages/dashboard_page"

var loginPage = new LoginPage() 
var dashboardPage = new DashboardPage()

it('Page Object Model Example', () => {
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