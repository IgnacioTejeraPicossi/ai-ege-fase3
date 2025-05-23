
  describe('Responsivitetstester', () => {
    it('Test på iPhone X', () => {
      cy.viewport('iphone-x');
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
    
    it('Test på iPhone 15', () => {
      cy.viewport(1179, 2556); // Øppløsning de iPhone 15
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
  
    it('Test på Samsung Galaxy S22', () => {
      c.viewport(1080, 2340); // Øppløsning Galaxy S22
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
  
    it('Test i skrivebordsoppløsning', () => {
      cy.viewport(1280, 720);  // Skrivebordsoppløsning
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
    
    it('Test på iPad', () => {
      cy.viewport('ipad-2'); 
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
  
    it('Test på iPad', () => {
      cy.viewport('ipad-mini');
      cy.visit('/');
      cy.get('nav').should('be.visible');
    });
  
    it('Test på Google Pixel 5, Legger til tester for en populær Android-enhet med standardoppløsning', () => {
      cy.viewport(1080, 2340); // Oppløsning for Pixel 5
      cy.visit('/');
      cy.get('nav').should('be.visible');
  });
  
  it('Test på Surface Duo - Enheten har et unikt skjermforhold, nyttig for å teste oppdeling og tilpasning', () => {
      cy.viewport(1350, 1800); // Oppløsning for Surface Duo
      cy.visit('/');
      cy.get('nav').should('be.visible');
  });
  
  it('Test på stor skrivebordsoppløsning (1920x1080), dekker en større skjermstandard for skrivebordsbruk.', () => {
      cy.viewport(1920, 1080); // Full HD skrivebordsoppløsning
      cy.visit('/');
      cy.get('nav').should('be.visible');
  });
  
  it('Test på ultrabred skjerm (2560x1440), for å teste oppsett på store skjermer eller monitorer med høy oppløsning.', () => {
      cy.viewport(2560, 1440); // WQHD oppløsning
      cy.visit('/');
      cy.get('nav').should('be.visible');
  });
  
  });