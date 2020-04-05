export function selectItem(item){
    cy.contains(item).first().click()
}

export function addToCart(){
    cy.get('#add-to-cart-button').click()
}