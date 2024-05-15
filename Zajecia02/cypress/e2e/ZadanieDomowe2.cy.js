describe("ZadanieDomowe2@GoIT QAA", () => {
    it("LMS - TEST 1: logowanie przez email user888@gmail.com, oraz wyjście z aplikacji", () => {
      cy.visit("https://www.edu.goit.global/account/login");
      cy.login("user888@gmail.com", "1234567890");
      cy.get('#open-navigation-menu-mobile').click();
      cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView().should("be.visible").click();
      cy.url().should('eq', 'https://www.edu.goit.global/account/login');
    });
    it("LMS - TEST 2: logowanie przez email testowyqa@qa.team, oraz wyjście z aplikacji", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.login("testowyqa@qa.team", "QA!automation-1");
    cy.get('#open-navigation-menu-mobile').click();
    cy.get(':nth-child(9) > .next-bve2vl').scrollIntoView().should("be.visible").click();
    cy.url().should('eq', 'https://www.edu.goit.global/account/login');
  });
});