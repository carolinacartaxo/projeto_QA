import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que estou na página inicial do IBGE", () => {
  cy.acessarPortalIbge();
});

When("clico no menu toggle", () => {
  cy.get("#nav-toggle", { timeout: 20000 })
    .first()
    .click({ force: true });
});

When("clico em {string}", (itemMenu) => {
  cy.contains("a", itemMenu, { timeout: 20000 })
    .click({ force: true });
});

Then("devo visualizar {string}", (texto) => {
  cy.location("pathname", { timeout: 30000 }).should("include", "/indicadores");
  cy.contains("h1, h2, h3", new RegExp(texto, "i"), { timeout: 30000 }).should("be.visible");
});
