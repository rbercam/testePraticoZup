export function visit(){
    cy.visit('')
}

export function searchItem(item){
    cy.get('#twotabsearchtextbox').type(item + '{enter}')
}