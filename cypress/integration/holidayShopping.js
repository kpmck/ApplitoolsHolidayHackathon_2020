///<reference types="cypress"/>

beforeEach(() => {
  cy.eyesOpen();
  cy.visit(Cypress.env("gridUrl"));
});

afterEach(() => {
  cy.eyesClose();
});

describe("Holiday Shopping", () => {
  it("Test 1", () => {
    cy.eyesCheckWindow({
      tag: "main page",
      target: "window",
      fully: true,
    });
  });

  it("Test 2", () => {
    cy.addFilter("color", "Black");
    cy.get("#filterBtn").click();
    cy.eyesCheckWindow({
      tag: "filter by color",
      target: "region",
      selector: "#product_grid",
    });
  });

  it("Test 3", () => {
    cy.openProductPage("Appli Air x Night");
    cy.eyesCheckWindow({
      tag: "product details",
      target: "window",
      fully: true,
    });
  });
});
