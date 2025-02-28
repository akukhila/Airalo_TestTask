import { test } from '../fixtures'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState("load");

})


const testCases = [
    { country: 'Japan', title: 'Moshi Moshi', coverage: 'Japan', data:'1 GB',  validity: '7 Days', price: '4.50 €' }
];

//Please note that currency in this test is in euro, please change it to dollars, if you have this currency by default on site. 

testCases.forEach(({ country, title, coverage, data, validity, price }) => {
    test('Select first eSIM package for ${country}', async ({ pageManager }) => {
        await pageManager.homePage.searchCountry(country);
        await pageManager.homePage.clickBuyNowButton();
        await pageManager.homePage.checkPackageDetails(title, coverage, data, validity, price);
    });
});