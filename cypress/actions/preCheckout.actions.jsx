export function viewCart(){
    cy.get('#nav-cart-count').click();
    cy.wait(1000);
    cy.get('#nav-cart-count').click();
}