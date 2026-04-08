class ProfilePage {
    goToProfile() {
        cy.get('[data-test="nav-menu"]').click()
        cy.get('[data-test="my-account"]').click()
        cy.get('[data-test="profile-link"]').click()
    }

    updateProfile(firstName, lastName) {
        cy.get('[data-test="first-name"]').clear().type(firstName)
        cy.get('[data-test="last-name"]').clear().type(lastName)
        cy.get('[data-test="update-profile"]').click()
    }

    verifyUpdate() {
        cy.contains('success').should('be.visible')
    }
}

export default new ProfilePage;
