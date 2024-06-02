import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";


let home
let basic
let social
let otpPage
Before(() => {
  cy.fixture('identifiers').then((ele) => {
    home = ele.homePage
    basic = ele.baseDetails
    social = ele.socialDetails
    otpPage = ele.otpPage
  })
});

Given(/^User is on trymima page$/, () => {
  cy.visit('/')
});

Then(/^User sees the OTP page$/, () => {
  cy.verifyOTPPage()
});

When(/^User inserts OTP code$/, () => {
  cy.insertOTP()
});

Then(/^User sees the Dashboard$/, () => {
  return true;
});

Then(/^The following on the sidebar$/, () => {
  return true;
});

// When(/^User selects an info source$/, () => {
//   cy.clickAnyElement(social.infoSourceField)
//   cy.clickAnyElement(social.infoOptionDropdown)
// });


When(/^User clicks the "([^"]*)" button$/, (button_text) => {
	cy.clickButton(button_text)
});

When(/^User inserts the "([^"]*)"$/, (field) => {
	cy.insertInfo(field)
});


When(/^User selects "([^"]*)" as info source$/, (media_source) => {
	cy.infoSource(media_source)
});

