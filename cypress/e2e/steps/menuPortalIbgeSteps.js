import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que consulto o menu principal do IBGE", () => {
  cy.acessarPortalIbge();
});

When("clico no item {string}", (item) => {
  cy.contains("a", item, { timeout: 20000 })
    .first()
    .click({ force: true });
});

Then("devo ser direcionado para {string}", (destino) => {
  cy.location("pathname", { timeout: 20000 }).should("include", destino);
});
