class ProfilePage {

    goToProfile() {
        cy.get('[data-test="nav-profile"]').click()
        cy.get('[data-test="first-name"]').should('be.visible');
    }

    updateProfile(firstName, lastName) {
        cy.get('[data-test="first-name"]').
            should('not.have.value', '').
            clear().
            type(firstName)

        cy.get('[data-test="last-name"]').
            should('not.have.value', '').
            clear().type(lastName)

        cy.get('[data-test="update-profile-submit"]').click()
    }

    verifyUpdate() {
        cy.contains('success').should('be.visible')
    }
}

export default new ProfilePage();
