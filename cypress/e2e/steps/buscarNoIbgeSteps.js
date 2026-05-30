import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que abro o portal do IBGE para pesquisar", () => {
  cy.acessarPortalIbge();
});

When("faço uma busca pelo termo {string}", (termo) => {
  cy.get('input[name="searchword"]', { timeout: 20000 })
    .filter(":visible")
    .first()
    .type(`${termo}{enter}`);
});

Then("devo ser direcionado para a página de resultados da busca", () => {
  cy.location("pathname", { timeout: 20000 }).should("include", "/busca.html");
});

Then("a busca deve manter o termo {string} na URL", (termo) => {
  cy.location("search").then((search) => {
    expect(decodeURIComponent(search)).to.include(`searchword=${termo}`);
  });
});
