import HomePage from "../../pages/homePage";
import AddNewComputer from "../../pages/addNewComputerPage";
import { Then, When } from '@badeball/cypress-cucumber-preprocessor';

When('I click on the "Add a new computer" button', () => {
    const homePage = new HomePage();
    
    homePage.addNewComputer();
});

Then('I add new computer to the data base', () => {
    const addNewComputer = new AddNewComputer();

    addNewComputer.checkAddNewComputerPageTitle();
    addNewComputer.createNewComputer();
});

Then('I see confirmation message', () => {
    const homePage = new HomePage();

    homePage.checkCreationConfirmationMessage();
});