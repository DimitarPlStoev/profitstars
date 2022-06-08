const locators = require('../support/locators');

// Verify that the Log in page is opening and the inputs are visible  
export function logIn() {
    cy.visit('https://qafour.profitstarsfps.com/')
      .get(locators.USERNAME_INPUT).should('be.visible')
      .get(locators.USERNAME_INPUT).should('be.visible')
      .get(locators.SIGN_IN_BUTTON).contains('Sign in').should('be.visible')

      
};

// Checking if the inputs are empty from the start and there is no text in them 
export function checkLogInInputValues() {
    cy.get('.localAccount').last().then(logIn => {
        const EMAIL_LABLE = logIn.find(locators.USERNAME_INPUT).text()
        const PASSWORD_LABLE = logIn.find(locators.PASSWORD_INPUT).last().text()
        expect(EMAIL_LABLE).to.be.empty
        expect(PASSWORD_LABLE).to.be.empty
    })
};

 // Log in with wrong credentials and to check if an alert appears 
export function logInWrongCredentials(user, pass) {
    cy.get(locators.USERNAME_INPUT).type(user)
    cy.get(locators.PASSWORD_INPUT).type(pass).then(() => {
        const EMAIL_LABLE_VAL = Cypress.$(locators.USERNAME_INPUT).val()
        const PASSWORD_LABLE_VAL = Cypress.$(locators.PASSWORD_INPUT).val()
        expect(EMAIL_LABLE_VAL).to.equal(user)
        expect(PASSWORD_LABLE_VAL).to.equal(pass)
    })
    cy.get(locators.SIGN_IN_BUTTON).contains('Sign in')
        .click()
        .get(locators.ERROR_ALERT).first().should('be.visible').contains('The username or password provided in the request are invalid.')
};

// Log in with the right credentials 
export function logInWhitCredentials(username, password) {
    cy.get(locators.USERNAME_INPUT).type(username)
        .get(locators.PASSWORD_INPUT).type(password)
        .get(locators.SIGN_IN_BUTTON).contains('Sign in')
        .click()
};