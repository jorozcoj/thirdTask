class CartPage {

    addToCart() {
        cy.get('[data-test="add-to-cart"]').should('be.visible').and('not.be.disabled').click()
    }

    verifyCart() {
        cy.get('[data-test="cart-quantity"]').should('not.have.text', '0')
        cy.get('[data-test="product-name"]').should('be.visible')
    }

    addToFavorites() {
        cy.get('[data-test="add-to-favorites"]').click()
    }

    verifyFavorites() {
        cy.get('[data-test="favorites-link"]').click()
        cy.get('[data-test="product-title"]').should('be.visible')
    }

}

export default new CartPage();