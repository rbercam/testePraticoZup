export function verifyTitle(title){
    cy.contains(title)
}

export function verifyItemInCart(item){
    cy.get('.a-list-item').should('include.text', item)
    cy.screenshot('itemIntoTheCart.png')
}