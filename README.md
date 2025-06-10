# AI-EGE-Fase3

This project contains automated tests for the Ing. Yngve Ege AS web page using Cypress.

## Project Structure

```
AI-EGE-Fase3/
│
├── cypress/
│   ├── e2e/         # End-to-end test files
│   │   ├── ege.cy.js
│   │   ├── Menu.cy.js
│   │   ├── navigation.cy.js
│   │   └── visores.cy.js
│   ├── fixtures/    # Test data files
│   │   └── example.json
│   └── support/     # Support files
│       ├── commands.js
│       └── e2e.js
│
└── cypress.config.js # Cypress configuration file
```

## Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Cypress**:
   - The `cypress.config.js` file contains the base URL and viewport settings.
   - Adjust the `baseUrl` if needed.

## Running Tests

- **Open Cypress**:
  ```bash
  npx cypress open
  ```

- **Run Tests Headlessly**:
  ```bash
  npx cypress run
  ```

## Test Files

- **ege.cy.js**: Tests for the main page of Ing. Yngve Ege AS.
- **Menu.cy.js**: Tests for the navigation menu.
- **navigation.cy.js**: Tests for navigation functionality.
- **visores.cy.js**: Tests for specific visual elements.

## Support Files

- **commands.js**: Custom Cypress commands.
- **e2e.js**: End-to-end test setup.

## Fixtures

- **example.json**: Sample test data.

For questions or feedback: ignacio.tejera@outlook.com