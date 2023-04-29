export class DashboardPage {

    dashboardPage_profile_dropdown_button = '.oxd-userdropdown-tab > .oxd-icon'
    dashboardPage_logoutbutton = ':nth-child(4) > .oxd-userdropdown-link'

    clickProfileDropdown(){
        cy.get(this.dashboardPage_profile_dropdown_button).click()
    }

    clickLogout(){
        cy.get(this.dashboardPage_logoutbutton).click()
    }
}