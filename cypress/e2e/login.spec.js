/// <reference types="Cypress" />
import * as LoginPage from '../component/login_page'
import * as Header from '../component/header'
import * as Course from '../component/course'


describe('Test all login functionalities', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it("Login with valid email and password for a normal user", ()=>{
    LoginPage.performLogin({ email: "user", password: "user" })
    Header.coursesLink().should("be.visible")
    Header.coursesLink().click()
    cy.url().should("contain", "/courses")
    Header.signoutBtn().should("be.visible")
  })

  it('should login correctly using admin', function() {
    LoginPage.performLogin({ email: "admin", password: "admin" })
    Header.coursesLink().should("be.visible")
    Header.coursesLink().click()
    cy.url().should("contain", "/courses")
    Header.signoutBtn().should("be.visible")
    Course.deleteBtn().should("be.visible")


  });
});
