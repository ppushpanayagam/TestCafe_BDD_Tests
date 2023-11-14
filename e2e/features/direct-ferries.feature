Feature: Direct Ferries Tests

    Background: Direct ferries home page
        Given I am on the homepage

    Scenario Outline: Successfully change the language
        Given I navigate to special offer page
        When I change the language to "<language>"
        Then I page language should change to "<language>"
        Examples:
            | language | 
            | France   | 
            | Italia   |

    # Scenario: Successfully verify Outbound sailing details
    #     Given I navigage to the UK my account page
    #     And I login into my account with valid credentials
    #     And I should see Outbound and return booking details as expected
    #     When I navigate to outbound sailing page
    #     Then I should see vehicle details as expected
    #     And I should see lead and other passengers details as expected
        
