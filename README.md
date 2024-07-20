# Smart Reporting QA task

App to support computers inventory management

The following functionalities are available:
- add new computer to the system
- filter computer list by name
- edit existing computer records in the sustem
- deleting computer from the system

In order to run the app, you need to have nodejs installed.

# Solution:
Test task implemented by using **Cypress framework** and **TypeScript**

To install Cypress and TypeScriptexecute following commands:

```bash
npm install cypress --save-dev
npm install --save-dev typescript
```

Update tsconfig.json:
```bash
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["es6", "dom"],
    "module": "commonjs",
    "strict": true,
    "types": ["cypress", "node"],
    "esModuleInterop": true,
  },
  "include": ["cypress/**/*.ts"]
}
```

# Solution uses POM
Page objects are intended to make end-to-end tests readable and easy to maintain. Instead of ad-hoc interactions with a page, a test controls the page using an instance that represents the page user interface.

**Page objects** have two main benefits:

- They keep all page element selectors in one place
- They standardize how tests interact with the Page

# Solution uses Gherkin Syntax
Gherkin syntax is a structured way to write test cases, which is often used in Behavior Driven Development (BDD). It allows to write tests in a natural language format that non-technical stakeholders can understand. When used with Cypress, a popular JavaScript testing framework, Gherkin syntax helps define the behavior of web applications in a clear and concise manner

# Integrating Gherkin with Cypress
To use Gherkin syntax in Cypress, you typically need the cypress-cucumber-preprocessor plugin. Here’s how you can set it up and use it:

1. Install the necessary packages:
```bash
npm install @badeball/cypress-cucumber-preprocessor --save-dev
npm install @bahmutov/cypress-esbuild-preprocessor
npm install @cucumber/cucumber --save-dev
```

2. Update cypress.config.ts file to include the preprocessor configuration and define the placement of the feature files:
```bash
import { defineConfig } from "cypress";

export default defineConfig({
  defaultCommandTimeout: 5000,
  e2e: {
    async setupNodeEvents(on, config) {
      const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
      const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')

      // await here
      await require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin(on, config)

      on('file:preprocessor',   createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      // return any mods to Cypress
      return config
    },
    specPattern: 'cypress/e2e/**/*.feature',
    baseUrl: 'https://computer-database.gatling.io',
    supportFile: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    testIsolation: true,
  },
});
```

3. Create your .feature files in the cypress/e2e directory
4. Create step definition files corresponding to your feature files. For example in the support/step_definitions directory
5. Run the Tests: to lauch Cypress UI, execute in the command line:
```bash
npm run cypress:open
```
To execute Cypress spec file in headed mode, execute in the command line first add the corresponding command 
```bash
cypress run --browser chrome
```
to the scripts object in your package.json file and use the name e2e:chrome to identify it. Running the script e2e:chrome as follows will run the command you defined:
```bash
npm run e2e:chrome
```

# Best practisies
Of course, there are many improvements that can be made to this solution when viewed as a potential product. Here are some of them:
 * using Application Actions instead of Page Objects
 * choosing best-suited locators
 * using closures and aliases
 * cleaning up the state before running the tests
 * programmatically log into your application, and take control of your application's state
 * introfucing data-* attributes to the project to provide context to the selectors and isolate them from CSS or JS changes