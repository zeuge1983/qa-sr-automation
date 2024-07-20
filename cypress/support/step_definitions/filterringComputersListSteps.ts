import HomePage from "../../pages/homePage";
import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

const homePage = new HomePage();

When('I filter by computer name', () => {
    homePage.filterByComputerName();
});

Then('I see filtered computers list', () => {
    homePage.checkComputersListIsFiltered()
});
