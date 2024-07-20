import HomePage from "../../pages/homePage";
import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I navigate to the computer database page', () => {
  cy.visit('/computers');
});

Then('I see correct title on the home page', () => {
  const homePage = new HomePage();

  homePage.checkHomePageTitle();
});