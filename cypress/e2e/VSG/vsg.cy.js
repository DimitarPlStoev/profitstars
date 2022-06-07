const outdoorsy = require("../../support/vsg");

describe('Open source CMS test', () => {
    before(() => {
    });

    beforeEach(() => {
    });

    context('Interaction with Web Elements', () => {

        it('Should have the correct page title', function () {
            cy.visit('https://qafour.profitstarsfps.com/')

        });

        // it('Should see Dashboard after login,negative testing for wrong credentials', function () {
        //     outdoorsy.checkLogInInputValues()
        //     outdoorsy.logInWrongCredentials('King', 'Kong')
        //     outdoorsy.logInWhitCredentials('opensourcecms', 'opensourcecms')
        // });
        
        // it('Should be able to add New Content as Content manager', function () {
        //     outdoorsy.addNewContentAsManager()
        // });
    });
});