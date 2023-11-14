const { Given, When, Then } = require("cucumber");
const supportMethods = require("../methods/support.js");

Given('I am on the homepage', async function () {
    
    await supportMethods
        .onHomepage();
});

Given('I navigate to special offer page', async function () {
    
    await supportMethods
        .navigateToSpecialOfferPage();
    await supportMethods
        .verifySpecialOfferPage();
});

When('I change the language to French', async function () {
    
    await supportMethods
        .clickOnLanguageDropDown();
    await supportMethods
        .clickOnGivenLanguageFromTheList("France");
});

When('I change the language to Italia', async function () {
    
    await supportMethods
        .clickOnLanguageDropDown();
    await supportMethods
        .clickOnGivenLanguageFromTheList("Italia");
});

Then('I should see the language changed to French', async function () {
    
    await supportMethods
        .verifyCurrentCountryUrl('directferries.fr')
});

Then('I should see the language changed to Italia', async function () {
    
    await supportMethods
        .verifyCurrentCountryUrl('directferries.it')
});

Given('I navigage to the UK my account page', async function () {
    
    await supportMethods
        .navigateToMyAccountPage('https://account.directferries.com/?culture=en-GB');
});

Given('I login into my account with valid credentials', async function () {
    
    await supportMethods
        .loginToMyBookingPage('qatesting@directferries.com', 'DFP164826683');

});

Given('I should see Outbound and return booking details as expected', async function () {
    
    await supportMethods
        .verifyOutboundBookingDetails(2, 1);
    await supportMethods
        .verifyInboundBookingDetails(1, 1);

});

When('I navigate to outbound sailing page', async function () {
    
    await supportMethods
        .clickOnOutBoundSailing();
});

Then('I should see vehicle details as expected', async function () {
    
    await supportMethods
        .verifyOutBoundSailingPassengerDetails('TestOne TestRD', 'TestTwo TestRD');
});

Then('I should see lead and other passengers details as expected', async function () {
    await supportMethods
        .verifyOutBoundSailingVehicleDetails('Abarth 500 (Car)');

});
