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
  cy.get('div.CountDown_main__4rPJL')
  .should('contain.text', 'You are currently on your Free Trial, subscribe now to get one extra month free.')
});

Then(/^The following on the sidebar of the dashboard$/, (datatable) => {
  datatable.hashes().forEach((row)=>{
    cy.get('.Sidebar_sb_nav_item__OJG2Q').contains(row.side_item).should('exist').and('contain.text', row.side_item)
  })
});



When(/^User clicks the "([^"]*)" button$/, (button_text) => {
	cy.clickButton(button_text)
});

When(/^User inserts the "([^"]*)"$/, (field) => {
	cy.insertInfo(field)
});


When(/^User selects "([^"]*)" as info source$/, (media_source) => {
	cy.infoSource(media_source)
});

