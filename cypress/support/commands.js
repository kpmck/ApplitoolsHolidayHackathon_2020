import "@applitools/eyes-cypress/commands";

function getFilterInput(label, value) {
  return cy
    .get("h4")
    .find("a")
    .contains(label)
    .parent()
    .siblings("div")
    .find("label")
    .contains(value)
    .find("input");
}

function getGridProduct(productName) {
  return cy.get(".grid_item").find("h3").contains(productName);
}

Cypress.Commands.add("addFilter", function (label, value) {
  cy.get(".ti-filter").then($element =>{
      if($element.is(":visible")){
          $element.click();
      }
  })
  getFilterInput(label, value).check();
});

Cypress.Commands.add("removeFilter", function (label, value) {
  getFilterInput(label, value).uncheck();
});

Cypress.Commands.add("openProductPage", function (productName) {
  getGridProduct(productName).click();
});
