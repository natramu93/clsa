@regression
Feature: Login Feature
This is a feature to test on valid and invalid inputs for username and password
1. Valid input - natarajan.ramanathan93@gmail.com, Welcome123
2. Invalid Input - test@testmail.com, Test123
@smoke @positive
Scenario: Valid Input
Given I get access to the Homepage
And I click on user profile
When I input the username as "natarajan.ramanathan93@gmail.com"
And I input the password as "Welcome123"
And I click on login
Then I should get the ID as "ID: MAG003417822"
@negative
Scenario Outline: Invalid Input
Given I get access to the Homepage
And I click on user profile
When I input the username as "<user>"
And I input the password as "<password>"
And I click on login
Then I should get the error message as "Invalid login or password."
Examples:
|user|password|
|natarajan.ramanathan93@gmail.com|welcome123|
|natarajan@gmail.com|Welcome123|