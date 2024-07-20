import { computerData } from '../fixtures/data';

class addNewComputer {
    elements = {
        addNewComputerPageTitle : () => cy.get('section#main h1'),
        createThisComputerButton : () => cy.get('input[type="submit"][value="Create this computer"]'),
        computerName : () => cy.get('#name'),
        computerIntroduced : () => cy.get('#introduced'),
        computerDiscontinued : () => cy.get('#discontinued'),
        computerBrand : () => cy.get('#company')
    }

    checkAddNewComputerPageTitle() {
        this.elements.addNewComputerPageTitle().should('have.text', 'Add a computer');
    }

    createNewComputer() {
        this.elements.computerName().type(computerData.name);
        this.elements.computerIntroduced().type(computerData.introduced);
        this.elements.computerDiscontinued().type(computerData.discontinued);
        this.elements.computerBrand().select(computerData.brand);
        this.elements.createThisComputerButton().click();
    }
}

export default addNewComputer;