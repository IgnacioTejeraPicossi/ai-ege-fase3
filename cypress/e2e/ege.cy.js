// Sample Cypress test for Ing. Yngve Ege AS web page

describe('Ing. Yngve Ege AS - Main Page', () => {
  it('should load the main page and display key sections', () => {
    // Visit the web page
    cy.visit('/');

    // Check for the main heading
    cy.contains('Løsninger som optimaliserer dine industrielle prosesser').should('be.visible');

    // Check for the "Våre produkter" section
    cy.contains('Våre produkter').should('be.visible');

    // Check for the contact email
    cy.contains('ege@ege.no').should('have.attr', 'href', 'mailto:ege@ege.no');
  });

  it('should display the navigation menu with all main links', () => {
    cy.visit('/');
    cy.contains('Produkter').should('be.visible');
    cy.contains('Leverandører').should('be.visible');
    cy.contains('Om oss').should('be.visible');
    cy.contains('Kontakt').should('be.visible');
    cy.contains('Min side').should('be.visible');
  });

  it('should display the contact phone number with correct link', () => {
    cy.visit('/');
    cy.contains('23 24 10 00').should('have.attr', 'href', 'tel:23 24 10 00');
  });

  it('should display at least three product images or illustrations', () => {
    cy.visit('/');
    cy.get('section').contains('Våre produkter').parent().find('img, svg').should('have.length.at.least', 3);
  });

  it('should display the footer', () => {
    cy.visit('/');
    cy.get('footer').should('exist').and('be.visible');
  });
}); 