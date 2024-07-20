import AddNewComputer from "./addNewComputerPage";

class editComputerPage {

    private addNewComputerPage = new AddNewComputer();

    elements = {
        editComputerPageTitle : () => cy.get('section#main h1'),
        deleteComputerButton : () => cy.get('input[type="submit"][value="Delete this computer"]'),
        saveComputerButton : () => cy.get('input[type="submit"][value="Save this computer"]'),
    }

    checkEditComputerPageTitle() {
        this.elements.editComputerPageTitle().should('have.text', 'Edit computer');
    }

    editComputerData(newComputerName: string) {
        this.addNewComputerPage.elements.computerName().clear();
        this.addNewComputerPage.elements.computerName().type(newComputerName);
        this.elements.saveComputerButton().click();
    }
}

export default editComputerPage;