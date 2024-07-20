import { computerData } from "../../fixtures/data";
import HomePage from "../../pages/homePage";
import EditComputerPage from "../../pages/editComputerPage";
import { Then, When } from '@badeball/cypress-cucumber-preprocessor';
import { generateRandomString } from '../utils';

const editComputerPage = new EditComputerPage();
const homePage = new HomePage();
const newComputerName = generateRandomString();

When('I click on computer name', () => {
    homePage.clickOnComputerName(computerData.name);
});

Then('I see Edit computor page', () => {
    editComputerPage.checkEditComputerPageTitle();
});

When('I edit computer data and save it', () => {
    editComputerPage.editComputerData(newComputerName);
});

Then('I see comfirmation message', () => {
    homePage.checkEditConfirmationMessage(newComputerName);
});