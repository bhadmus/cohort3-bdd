Feature: SignUp Journey on Mima web app
        As a user, I should be able to sign up
        And have access to the web app

    Background: User is on the site
        Given User is on trymima page

    Scenario Outline: User should be able to sign up with <source> as info source
        When User clicks the "Sign up" button
        And User inserts the "fullname"
        And User inserts the "business name"
        And User inserts the "business email"
        And User inserts the "business phone number"
        And User inserts the "business registration number"
        And User clicks the "Next" button
        And User inserts the "website"
        And User inserts the "instagram handle"
        And User inserts the "twitter handle"
        And User selects "<source>" as info source
        And User inserts the "password"
        And User clicks the "Sign Up" button
        Then User sees the OTP page
        When User inserts OTP code
        Then User sees the Dashboard
        And The following on the sidebar of the dashboard
            | side_item            |
            | Customer             |
            | Invoice & Accounting |
            | Orders               |
            | Payment Link         |
            | Booking              |
            | Paybills             |
            | Stock                |
            | Split Payments       |
            | Employees            |

        Examples:
            | source          |
            | Webinar/Seminar |
            # | Instagram       |
            # | Facebook        |
            # | Twitter         |
            # | Google Search   |
