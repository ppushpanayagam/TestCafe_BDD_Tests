const { Selector, t, ClientFunction} = require('testcafe');


module.exports = {
    onHomepage: async function () {

        await t
            .navigateTo('https://www.directferries.co.uk')
            .maximizeWindow()
            .takeScreenshot('DirectFerries-HomePage.png')
    },

    navigateToSpecialOfferPage: async function () {

        await t
            .click('#specialOffers')
            .takeScreenshot('DirectFerries-SpecialOfferPage.png')
    },

    clickOnLanguageDropDown: async function () {

        const languageDropDown = Selector('.user-actions');
        await t
            .click(languageDropDown, {
                offsetX:            108,
                offsetY:            16
            })
    },

    clickOnGivenLanguageFromTheList: async function (language) {

        const languageList = await Selector('#langDropdown > ul > li >a').count;
        let countryList = "#langDropdown > ul > li:nth-child(**) > a";

        for( var i = 1; i <= languageList; i++){
        const country =  await Selector('#langDropdown > ul > li:nth-child('+i+') > a').textContent;
            if(country === language){
                await t.click(Selector(countryList.replace('**', i)));
                break;
            }
        }
    },

    verifyCurrentCountryUrl: async function(country){

        const url = await ClientFunction(() => window.location.href)();
        await t
            .expect(url).contains(country);
    },

    navigateToMyAccountPage: async function (myAccountPage) {

        await t
            .navigateTo(myAccountPage)
            .takeScreenshot('DirectFerries-MyAccountPage.png')
    },
    clickOnOutBoundSailing: async function () {

        await t
            .click('[data-qa="outbound-sailing"]')
            .takeScreenshot('DirectFerries-OutBoundSailingPage.png')
    },
    loginToMyBookingPage: async function (userName, password) {

        await t
            .typeText('#Email', userName)
            .typeText('#BookingReference', password)
            .takeScreenshot('DirectFerries-MyBookingLoginScreen.png')
            .click('#manage-booking-button')
    },
   
    verifyOutboundBookingDetails: async function(passengers, vehicles) {

        const passengersDetails = await Selector('[id="outbound-details"]')
            .find('ul')
            .child('li')
            .nth(0)
            .child('span').innerText;
        const vehicleDetails = await Selector('[id="outbound-details"]')
            .find('ul')
            .child('li')
            .nth(1)
            .child('span').innerText;
        await t.takeScreenshot('DirectFerries-BookingDetailsPage.png')
        await t
            .expect(passengersDetails).contains(passengers)
            .expect(vehicleDetails).contains(vehicles);

    },

    verifyInboundBookingDetails: async function(passengers, vehicles) {

        const passengersDetails = await Selector('[id="return-details"]')
            .find('ul')
            .child('li')
            .nth(0)
            .child('span').innerText;
        const vehicleDetails = await Selector('[id="return-details"]')
            .find('ul')
            .child('li')
            .nth(1)
            .child('span').innerText;
        
        await t
            .expect(passengersDetails).contains(passengers)
            .expect(vehicleDetails).contains(vehicles);
    },

    verifyOutBoundSailingPassengerDetails: async function(leadPassengers, otherPassengers) {

        const leadPassenerDetails = await Selector('.description')
            .withText('Lead Passenger')
            .sibling('div').innerText;
        const otherPassengersDetails = await Selector('.description')
            .withText('Child Passenger')
            .sibling('div').innerText;
        await t.takeScreenshot('DirectFerries-OutBoundSailingBookingDetailsPage.png')
        await t.expect(leadPassenerDetails).contains(leadPassengers);
        await t.expect(otherPassengersDetails).contains(otherPassengers);
    },
    verifyOutBoundSailingVehicleDetails: async function(vehicles) {

        const vehicleDetails = await Selector('.description')
            .withText('Make & Model')
            .sibling('div').innerText;
        
            await t.expect(vehicleDetails).contains(vehicles);
    }

}