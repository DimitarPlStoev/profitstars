const vsg = require("../../support/vsg");

describe('Checkint log in process', () => {
    before(() => {
        cy.setCookie("x-ms-cpim-trans","eyJUX0RJQyI6W3siSSI6ImYzYzU3YjgwLTRiYzgtNDFjYy05OTI3LTU2MzcxYTI0NDIyOCIsIlQiOiJwcm9maXRzdGFyc2Zwc2Rldi5vbm1pY3Jvc29mdC5jb20iLCJQIjoiYjJjXzFhX211bHRpdGVuYW50YWFkX3NpZ251cF9zaWduaW4iLCJDIjoiYTliMzEzY2YtZjlmNi00NmU0LTgyNjMtZGQyYTA5NGRjYWJmIiwiUyI6MSwiTSI6e30sIkQiOjB9XSwiQ19JRCI6ImYzYzU3YjgwLTRiYzgtNDFjYy05OTI3LTU2MzcxYTI0NDIyOCJ9");
        cy.setCookie("x-ms-cpim-csrf","SWxydE9jZGFNckcrZytPMWhyUHFBS1J0NzU0aDBuYUFDcXBkSkZERkhYVTBPYzBWZzg4a0ZkdzllT2grWjNiMXhmcnZId1E3UE90SUdMTXY1SEUybWc9PTsyMDIyLTA2LTA3VDEzOjExOjQ5LjEyMzcwODdaO3dSK1BiVVlrSlRXNUdDamRzSFROMEE9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==");
    });

    context('Checkint log in process', () => {

        it('Shoul Log in with wrong credentials and then try to log in with the right credentials', function () {
            vsg.logIn()
            vsg.checkLogInInputValues()
            vsg.logInWrongCredentials('King', 'Kong')
            vsg.logInWhitCredentials('testuser128', '7$8,Qd;uBL')
        });
    });
});