# __Teste Prático Zup__

CI | Status
---| ------
CircleCI | [![CircleCI](https://circleci.com/gh/rbercam/testePraticoZup.svg?style=svg)](https://circleci.com/gh/rbercam/testePraticoZup)

## __Pré-requisitos__
1. Instalar o [Node](https://nodejs.org/pt-br/)
1. Ter o Chrome instalado

## __Instalando Dependências__
1. Rodar o comando 
```
npm install
```
2. Para abrir o Cypress Application usar o comando
```
npm run cypress:open
````

3. Para rodar o Cypress Headless usar o comando
```
npm run cypress:run
````

## __Configuração do Projeto__

O projeto esta dividido da seguinte maneira:




    [cypress]
       [actions] -> Arquivos que contem actions do cypress para os arquivos de testes.
       [fixtures]
       [integration] -> Arquivos de testes com Mocha e Chai.
       [plugins] -> Configurações de plugins.
       [support]
    cypress.json -> Configurações de variáveis de ambiente.
    package.json -> Arquivo de controle de dependências.

### __Actions__
As actions são funções que representam de maneira isolada uma ação do Cypress dentro de uma Page específica.

Exemplo:

``` jsx
export function checkPlaceHolder(text){
    cy.get('.new-todo').should('have.attr','placeholder',text)
}
```
Considerado o principal padrão de projeto. Mais info no [link](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)

Este trecho valida se o texto passado por parâmetro é igual ao texto do atributo `palceholder` do campo mapeado pela classe `.new-todo`


### __Integration__
Nessa pasta fica os arquivos de teste usando a estrutura do Mocha e do Chai.

Exemplo:

```js
    it('validar placeholder', ()=>{
        checkPlaceHolder('What needs to be done?')
    })
```
Perceba que foi usado uma action para validar o placeholder de um campo.

### __cypress.json__

Este arquivo serve para configiurar variáveis de ambiente, configuração, comportamento do Cypress

exemplo:

```json
{
    "baseUrl": "http://todomvc.com/examples/angular2/",
    "watchForFileChanges" : false
}
```

Temos uma `baseUrl` configurado, assim no momento de realizar um `cy.visit('/')` é necessário apenas passar uma barra para o cypress acessar a pagina desejada.



