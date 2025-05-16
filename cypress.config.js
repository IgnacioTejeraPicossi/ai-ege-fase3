module.exports = {
  e2e: {
    //baseUrl: 'https://www.ege.no',  // Angi URL for lokal installasjon
    //baseUrl: 'http://localhost:8080/site/default/master/no',  // Angi URL for lokal installasjon
    baseUrl: 'http://localhost:8080',  // Angi URL for lokal installasjon
    viewportWidth: 1280,                  // Sett skjermstørrelse (bredde)
    viewportHeight: 720,                  // Sett skjermstørrelse (høyde)
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
