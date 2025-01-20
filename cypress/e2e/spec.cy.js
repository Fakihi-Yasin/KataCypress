describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("index.html");
  });

  it("check if all champ visible", () => {
    cy.get('[data-test="input-lastName"]').should("be.visible");
    cy.get('[data-test="input-firstName"]').should("be.visible");
    cy.get('[data-test="input-email"]').should("be.visible");
    cy.get('[data-test="input-age"]').should("be.visible");
    cy.get('[data-test="button-submit"]').should("be.visible").click();
  });

  it("display message error ", () => {
    cy.get('[data-test="button-submit"]').click();
    cy.get("#notification").should("have.class", "show");
  });

  it("clicking on button send", () => {
    cy.get('[data-test="input-lastName"]').type("Fakihi");
    cy.get('[data-test="input-firstName"]').type("Yasin");
    cy.get('[data-test="input-email"]').type("yasin23@gmail.com");
    cy.get('[data-test="input-age"]').type("23");
    cy.get('[data-test="button-submit"]').click();
    cy.get("#notification").should("not.have.class", "show");
  });
});
