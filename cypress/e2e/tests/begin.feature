Feature: SignUp Journey on Mima web app
    As a user, I should be able to sign up
    And have access to the web app

    Scenario: User should be able to sign up with all fields inserted
        Given User is on trymima page
        When User clicks the Sign up button
        And User inserts the fullname
        And User inserts the business name
        And User inserts the business email
        And User inserts the business phone number
        And User inserts the business registration number
        And User clicks the Next button
