class LanguageSelector {

    changeLanguage(lang) {
        cy.get('[data-test="language-select"]').click();
        cy.get('[data-test="lang-es"]').click();
    }

    verifyLanguageChanged() {
        cy.get('[data-test="nav-home"]').should('have.text', 'Inicio');
    }

}

export default new LanguageSelector()