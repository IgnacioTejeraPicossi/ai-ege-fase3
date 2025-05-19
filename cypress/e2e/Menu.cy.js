describe('Hjemmeside tester no', () => {
    it('Test NO menu', () => {
        cy.visit('/');
        cy.contains('Produkter').should('be.visible');  // Sjekk at teksten "Fiskeridirektoratet" er synlig
        cy.contains('Leverandører').should('be.visible'); 
        cy.contains('Omm oss').should('be.visible'); 
        cy.contains('Kontak').should('be.visible'); 
        cy.contains('Min side').should('be.visible'); 
             
    });
});
