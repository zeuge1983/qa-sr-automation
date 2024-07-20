Feature: Add, filter and manage computers in the system

  As an inventory manager
  I want to be able to add a computer to the system
  To filter it by it's name 
  And to edit existing computer records

  Background: Test setup
  Given I navigate to the computer database page

  Scenario: Successfully add a new computer to the system
    When I click on the "Add a new computer" button
    Then I add new computer to the data base
    Then I see confirmation message

  Scenario: Successfully filter computers by their names
    When I filter by computer name
    Then I see filtered computers list

  Scenario: Successfully edit the details of a specific computer
    When I filter by computer name
    Then I see filtered computers list
    When I click on computer name
    Then I see Edit computor page
    When I edit computer data and save it
    Then I see comfirmation message