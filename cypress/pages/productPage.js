class ProductPage {

    search(product) {
        cy.get('#search-query').type(product)
        cy.get('[data-test="search-submit"]').click()
    }

    filterHandTools() {
        cy.get('[data-test="category-01"]').check()
    }

    selectFirstProduct() {
        cy.get('[data-test="product-name"]').first().click()
    }

    verifyProductList() {
        cy.get('[data-test="product-name"]').should('be.visible')
        cy.get('[data-test="product-price"]').should('be.visible')
    }

    verifySearchResult(product) {
        cy.contains(product).should('be.visible')
    }
}

export default new ProductPage()