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
$ npm install cypress --save-dev
$ npm install --save-dev typescript
```

To lauch Cypress UI, execute in the command line:
```bash
$ npm run cypress:open
```
To execute Cypress spec file in headed mode, execute in the command line:
```bash
$ npm run cypress:run --browser chrome
```

# Solution uses POM
Page objects are intended to make end-to-end tests readable and easy to maintain. Instead of ad-hoc interactions with a page, a test controls the page using an instance that represents the page user interface.

**Page objects** have two main benefits:

- They keep all page element selectors in one place
- They standardize how tests interact with the Page

# Best practisies
Of course, there are many improvements that can be made to this solution when viewed as a potential product. Here are some of them:
 * using Application Actions instead of Page Objects
 * choosing best-suited locators
 * using closures and aliases
 * cleaning up the state before running the tests
 * programmatically log into your application, and take control of your application's state
 * introfucing data-* attributes to the project to provide context to the selectors and isolate them from CSS or JS changes