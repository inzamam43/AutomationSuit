// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('getPageData', (filePath) => {
    cy.readFile('cypress/pages/1-CreatingQuotePage/PageData.json').then((pageData)=>{
       
        return pageData
    })
    })
Cypress.Commands.add('getPageLocator', (filePath) => {
        cy.readFile('cypress/pages/1-CreatingQuotePage/PageData.json').then((pagelocator)=>{
            return pagelocator
        })
        })
// cypress/support/commands.js

Cypress.Commands.add('loadDataFromFiles', (dataFiles) => {
    const loadedData = {};
  
    return Cypress.Promise.all(
      dataFiles.map((filePath) => {
        return cy.fixture(filePath).then((data) => {
          const key = Cypress._.last(filePath.split('/')).replace('.json', '');
          loadedData[key] = data;
        });
      })
    ).then(() => loadedData);
  });
  