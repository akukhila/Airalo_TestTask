import { test } from '../fixtures'

test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState("load");

})

test('Select first eSIM package for Japan',async({pageManager})=>{
    await pageManager.homePage.searchCountry('Japan');
    await pageManager.homePage.clickBuyNowButton();
    await pageManager.homePage.checkPackageDetails();
})