Feature: Verify login and signin account Functionality

#Background:
#
#Given user launch browser
#When user enters URL
#
#Scenario: verify myntra logo and title name as
#
#And verify myntra logo
#Then verify home page title name as "Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra"
 
 
#Scenario Outline: verify user login scenario
#Given user launch browser
#When user enters URL
#And user click on login link
#Then user enter email addres as "<emailAddress>"
#And user enter password as "<password>"
#Then user click on login button
#Examples:
#|emailAddress        |password     |
#|nareshan23@gmail.com|nani6652	   |

#Scenario: verify user login scenario
#And user click on login link

@sanity
Scenario: search scenario
Given demo step 1
When demo step 2
And demo step 3
Then demo step 4

@sanity
Scenario: create account scenario
Given demo step 5
When demo step 6
And demo step 7
Then demo step 8

@Regressinon
Scenario Outline: login to account scenario
Given demo step 9
When demo user "<name>" , "<email>" and "<password>" is step 10
And demo step 11
Then demo step 12
Examples:
|name		|email						|password		|
|harish		|harish123@gmail.com		|darish123		|
|martin		|martin123@gmail.com		|martin123		|
|steev		|steev123@gmail.com			|steev123		|
|scott		|scott123@gmail.com		   	|scott123		|

@regression
Scenario: add to cart scenario
Given demo step 13
When demo step 14
And demo step 15
Then demo step 16