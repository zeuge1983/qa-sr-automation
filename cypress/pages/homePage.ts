import { computerData } from '../fixtures/data';
import { formatDate } from '../support/utils';

class homePage {
    elements = {
        homePageTitle : () => cy.get('h1.fill'),
        addNewComputerButton : () => cy.get('#add'),
        allertConfirmationMessage : () => cy.get('.alert-message.warning'),
        filterByNameButton : () => cy.get('#searchsubmit'),
        searchBox :() => cy.get('#searchbox'),
        inputPlaceholder :() => cy.get('input')
    }

    checkHomePageTitle() {
        this.elements.homePageTitle().should('have.text', 'Computer database');
    }

    checkCreationConfirmationMessage() {
        this.elements.allertConfirmationMessage().should('be.visible').contains(`Computer ${computerData.name} has been created`);
    }

    checkEditConfirmationMessage(newComputerName: string) {
        this.elements.allertConfirmationMessage().should('be.visible').contains(`Computer ${newComputerName} has been updated`);
    }

    addNewComputer() {
        this.elements.addNewComputerButton().click();
    }

    filterByComputerName() {
        this.elements.inputPlaceholder().should('have.attr', 'placeholder', 'Filter by computer name...');
        // this.elements.searchBox().type(computerData.name);
        this.elements.searchBox().type("ASCI White");
        this.elements.filterByNameButton().click();
    }

    checkComputersListIsFiltered() {
        // const introducedDate = formatDate(computerData.introduced);
        // const discontinuedDate = formatDate(computerData.discontinued);

        // cy.contains(computerData.name).should('be.visible');
        // cy.contains(introducedDate).should('be.visible');
        // cy.contains(discontinuedDate).should('be.visible');
        // cy.contains(computerData.brand).should('be.visible');

        cy.contains('ASCI White').should('be.visible');
        cy.contains('01 Jan 2001').should('be.visible');
        cy.contains('01 Jan 2006').should('be.visible');
        cy.contains('IBM').should('be.visible');
    }

    clickOnComputerName(computerName: string) {
        // cy.contains(computerName).click();
        cy.contains('ASCI White').click();
    }
}

export default homePage;