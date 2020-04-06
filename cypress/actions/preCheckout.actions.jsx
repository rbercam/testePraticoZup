export function verifyMessage(message){
    cy.get('#huc-v2-order-row-confirm-text').should('have.contain.text', message)
    cy.screenshot('itemIntoTheCart.png')
}