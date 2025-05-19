describe('Navigasjonstester', () => {
    it('Naviger til kontakt-siden', () => {
      cy.visit('/');
      cy.get('[href="/test-hovedside"]').click();  // Klikk på lenken til "hovedside" siden
      cy.url().should('include', 'test-hovedside');  // Bekreft at URL-en inkluderer text 'test-hovedside'
    });
  });
 