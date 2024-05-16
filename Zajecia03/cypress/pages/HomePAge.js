export class HomePage {
    logout() {
        cy.get('#open-navigation-menu-mobile').click();
        cy.contains('Log out').click();
        cy.url().should('eq', 'https://www.edu.goit.global/account/login');
    };
}