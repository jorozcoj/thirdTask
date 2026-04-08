class AuthPage {
    visit() {
        cy.visit('/');
    }

    goToRegister() {
        cy.get('[data-test="nav-sign-in"]').click();
        cy.get('[data-test="register-link"]').click();
    }

    register(user) {
        cy.get('[data-test="first-name"]').type(user.firstName);
        cy.get('[data-test="last-name"]').type(user.lastName);
        cy.get('[data-test="dob"]').type(user.dob);
        cy.get('[data-test="street"]').type(user.street);
        cy.get('[data-test="postal_code"]').type(user.postalCode);
        cy.get('[data-test="city"]').type(user.city);
        cy.get('[data-test="state"]').type(user.state);
        cy.get('[data-test="country"]').type(user.country);
        cy.get('[data-test="country"]').select(user.country);
        cy.get('[data-test="phone"]').type(user.phone);
        cy.get('[data-test="email"]').type(user.email);
        cy.get('[data-test="password"]').type(user.password);

        cy.get('[data-test="register-submit"]').click();
    }

    login(email, password) {
        cy.get('[data-test="email"]').type(email);
        cy.get('[data-test="password"]').type(password);
        cy.get('[data-test="login-submit"]').click();
    }

    verifyLoginSuccess() {
        cy.get('[data-test="nav-menu"]').should('be.visible')
    }

}

export default AuthPage;