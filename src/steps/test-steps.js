const { Given, When, Then } = require("cucumber");
const supportMethods = require("../methods/support.js");
const testData = require("../testData/data.json");

testData.forEach(data => {
    
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
            .clickOnGivenLanguageFromTheList(data.frenchLanguage);
    });

    When('I change the language to Italia', async function () {
        
        await supportMethods
            .clickOnLanguageDropDown();
        await supportMethods
            .clickOnGivenLanguageFromTheList(data.italiaLanguage);
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
            .navigateToMyAccountPage(data.myAccountPageUrl);
    });

    Given('I login into my account with valid credentials', async function () {
        
        await supportMethods
            .loginToMyBookingPage(data.userName, data.password);

    });

    Given('I should see Outbound and return booking details as expected', async function () {
        
        await supportMethods
            .verifyOutboundBookingDetails(data.noOfOutBoundPassengers, data.noOfOutBoundVehicles);
        await supportMethods
            .verifyInboundBookingDetails(data.noOfInBoundPassengers, data.noOfInBoundVehicles);

    });

    When('I navigate to outbound sailing page', async function () {
        
        await supportMethods
            .clickOnOutBoundSailing();
    });

    Then('I should see vehicle details as expected', async function () {
        
        await supportMethods
            .verifyOutBoundSailingPassengerDetails(data.leadPassengerDetails, data.otherPassengerDetails);
    });

    Then('I should see lead and other passengers details as expected', async function () {
        
        await supportMethods
            .verifyOutBoundSailingVehicleDetails(data.outSailingVehicleDetails);
    });
});
