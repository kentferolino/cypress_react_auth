
export const emailField = () => cy.get('[data-cy="email-field"]')
export const passwordField = () => cy.get('[data-cy="password-field"]')
export const loginBtn = () => cy.get('[data-cy="login-btn"]')

// actions
export const performLogin = ({ email, password }) => {
  emailField().type(email)
  passwordField().type(password)
  loginBtn().click()
}