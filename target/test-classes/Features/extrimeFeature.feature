Feature: Verify login and signin account Functionality

Background:
Given user launch browser
When user enters URL

@sanity
Scenario: verify myntra logo and title name
And verify myntra logo
Then verify home page title name as "Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra"
 
 
Scenario Outline: verify user login functionalit
And user click on login link
Then user enter email addres as "<emailAddress>"
And user enter password as "<password>"
Then user click on login button
Examples:
|emailAddress        |password     |
|nareshan23@gmail.com|nani6652	   |
|nareshan23@gmail.com|null	   |

Scenario: verify men jeans page
And click on jeans link
Then user should should see all jeans products

Scenario Outline: verify search button
When user ente product name as "<productItemName>"
And click search button
Then verify displyed the products related search 
Examples:
|productItemName|
|jeans			|
|nokia			|
|samsung		|
