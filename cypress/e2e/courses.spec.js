import * as Course from '../component/course';
import * as Utils from '../support/utils';

describe('Check courses functionality', () => {
    context('Check the functionality for an admin user', () => {
        beforeEach(() => {
            Utils.loginWithAPI('admin', 'admin');
            Utils.visitPage('courses');
        });

        it('admin user should see the delete buttons', () => {
            Course.deleteBtn().should('be.visible');
        });

        it('should be able to add a new course correctly', () => {
            Course.newCourseInput().type('Learn Selenium');
            Course.newCourseButton().click();
            Course.deleteBtn().should('have.length', 6);
        });

        it('should be abel to delete a course', () => {
            Course.deleteBtn().last().click();
            Course.deleteBtn().should('have.length', 5);
        });
    });

    context('Check the functionality for regular user', () => {
        beforeEach(() => {
            Utils.loginWithAPI('user', 'user');
            Utils.visitPage('courses');
        });

        it('normal user should be able to see all the courses', () => {
            Course.courseName().should('have.length', 5);
        });
    });
});
