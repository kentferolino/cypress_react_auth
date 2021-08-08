import * as Utils from '../support/utils';
import * as Header from '../component/header';

describe('Test logout Functionality', () => {
    it('admin user should be able to logout correctly', () => {
        Utils.loginWithAPI('admin', 'admin');
        Utils.visitPage('courses');
        Header.logoutButton().click();
        Utils.checkURL().should('contain', '/notloggedin');
    });

    it('normal user should be able to logout correctly', () => {
        Utils.loginWithAPI('user', 'user');
        Utils.visitPage('courses');
        Header.logoutButton().click();
        Utils.checkURL().should('contain', '/notloggedin');
    });
});
