// ***********************************************
// Este arquivo commands.js mostra como criar
// comandos customizados no Cypress.
//
// Comandos customizados ajudam a reaproveitar ações
// que aparecem em vários testes, deixando os steps
// mais simples e fáceis de ler.
//
// Documentação:
// https://on.cypress.io/custom-commands
// ***********************************************
//
// -- Exemplo de comando pai --
// Cypress.Commands.add("login", (email, password) => {
//   // implementação do login
// });
//
// -- Exemplo de comando filho --
// Cypress.Commands.add("drag", { prevSubject: "element" }, (subject, options) => {
//   // implementação do drag
// });
//
// -- Exemplo de comando dual --
// Cypress.Commands.add("dismiss", { prevSubject: "optional" }, (subject, options) => {
//   // implementação do dismiss
// });
//
// -- Exemplo sobrescrevendo um comando existente --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => {
//   return originalFn(url, options);
// });

Cypress.Commands.add("acessarPortalIbge", () => {
  cy.intercept("https://www.googletagmanager.com/**", {
    statusCode: 204,
    body: ""
  });

  cy.intercept("https://www.google-analytics.com/**", {
    statusCode: 204,
    body: ""
  });

  cy.intercept("https://servicodados.ibge.gov.br/api/v3/agregados/portal?view=object", {
    statusCode: 200,
    body: {}
  });

  cy.visit("/", { timeout: 30000 });
});
