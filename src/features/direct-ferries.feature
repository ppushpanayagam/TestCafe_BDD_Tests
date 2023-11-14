Feature: Direct Ferries Tests

    Background: Direct ferries home page
        Given I am on the homepage

    Scenario: Successfully change the language to French
        Given I navigate to special offer page
        When I change the language to French
        Then I should see the language changed to French

    Scenario: Successfully change the language to Italia
        Given I navigate to special offer page
        When I change the language to Italia
        Then I should see the language changed to Italia
        
    Scenario: Successfully verify Outbound sailing details
        Given I navigage to the UK my account page
        And I login into my account with valid credentials
        And I should see Outbound and return booking details as expected
        When I navigate to outbound sailing page
        Then I should see vehicle details as expected
        And I should see lead and other passengers details as expected
        
