const locators = require('../support/locators');

// //Visit LogIn page and verify that the LogIn page title is visible and it is the right title
// export function logInTitleCheck() {
//     cy.url().should('include', '/cms_madesimple/admin/login.php')
//         .get(locators.LOGIN_PAGE_TITLE).should('be.visible').contains('Login to CMS Made Simple™')
// };

// //Checking if needed inputs are clear and no values in
// export function checkLogInInputValues() {
//     cy.get(locators.LOGIN_BOX).then(logIn => {
//         const EMAIL_LABLE = logIn.find(locators.USERNAME_INPUT).text()
//         const PASSWORD_LABLE = logIn.find(locators.PASSWORD_INPUT).text()
//         expect(EMAIL_LABLE).to.be.empty
//         expect(PASSWORD_LABLE).to.be.empty
//     })
// };

// //LogIn using wrong credentials. Part of a negative testing for tha LogIn.After error message all input fields should be empty
// export function logInWrongCredentials(user, pass) {
//     cy.get(locators.USERNAME_INPUT).type(user)
//     cy.get(locators.PASSWORD_INPUT).type(pass).then(() => {
//         const EMAIL_LABLE_VAL = Cypress.$(locators.USERNAME_INPUT).val()
//         const PASSWORD_LABLE_VAL = Cypress.$(locators.PASSWORD_INPUT).val()
//         expect(EMAIL_LABLE_VAL).to.equal(user)
//         expect(PASSWORD_LABLE_VAL).to.equal(pass)
//     })
//     cy.get(locators.SUBMIT_BUTTON).contains('Submit')
//         .click()
//         .get(locators.MESSAGE_ERROR).should('be.visible').contains('User name or password incorrect')
//     cy.get(locators.LOGIN_BOX).then(logIn => {
//         const EMAIL_LABLE = logIn.find(locators.USERNAME_INPUT).text()
//         const PASSWORD_LABLE = logIn.find(locators.PASSWORD_INPUT).text()
//         expect(EMAIL_LABLE).to.be.empty
//         expect(PASSWORD_LABLE).to.be.empty
//     })
// };

// //LogIn whit the right credentials and checking if the page is loaded and the content on the dashboard is visible 
// export function logInWhitCredentials(username, password) {
//     cy.get(locators.USERNAME_INPUT).type(username)
//         .get(locators.PASSWORD_INPUT).type(password)
//         .get(locators.SUBMIT_BUTTON).contains('Submit')
//         .click()
//         .get(locators.DASHBOARD_BOX).contains('Content Manager').should('be.visible')
// };


// //Adding new content as manager and checking if the new content is on the table 
// export function addNewContentAsManager() {
//     cy.get(locators.DASHBOARD_BOX).contains('Content Manager').should('be.visible')
//         .click()
//         .get(locators.ADD_NEW_CONTENT_LINK).contains('Add New Content').should('be.visible')
//         .click()
//         .get(locators.MAIN_TAB_SELECTOR).select('Error Page').should('have.value', 'errorpage')
//     cy.intercept('/cms_madesimple/admin/moduleinterface.php').as('page')
//         .wait('@page')
//         .get(locators.PAGE_CONTENT_TITLE).type('Error page')
//         .get(locators.CONTENT_SUMIT_BUTTON).contains('Submit')
//         .click()
//         .get(locators.PAGE_MESSAGE_CONTAINER).should('contain', 'Content Updated').and('be.visible')
//         .get(locators.TABLE_ROW).last().contains(locators.TABLE_DATA, 'Error Pag').should('be.visible')
// };