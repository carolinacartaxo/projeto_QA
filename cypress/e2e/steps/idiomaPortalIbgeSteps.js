import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que estou na página inicial do IBGE", () => {
  cy.acessarPortalIbge();
});

When("abro a lista de outros idiomas", () => {
  cy.get(".gt_switcher .gt_selected a", { timeout: 20000 })
    .filter(":visible")
    .first()
    .click({ force: true });
});

When("seleciono o idioma {string}", (idioma) => {
  cy.contains(".gt_option a", idioma, { timeout: 20000 })
    .click({ force: true });
});

When("retorno para o idioma {string}", (idioma) => {
  cy.get(".gt_switcher .gt_selected a", { timeout: 20000 })
    .filter(":visible")
    .first()
    .click({ force: true });

  cy.contains(".gt_option a", idioma, { timeout: 20000 })
    .click({ force: true });
});

Then("devo visualizar o portal em espanhol", () => {
  cy.get(".gt_switcher .gt_selected a", { timeout: 30000 })
    .should("contain.text", "Español");
});


