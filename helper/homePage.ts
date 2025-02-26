import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchField: Locator
    readonly countriesList: Locator
    readonly buyNowButton: Locator
    readonly eSimPackageDetails: Locator



    constructor(page: Page) {
        this.page = page;
        this.searchField = page.getByTestId('search-input');
        this.countriesList = page.locator('.countries-list')
        this.buyNowButton = page.getByRole('button', { name: 'BUY NOW' })
        this.eSimPackageDetails = page.getByTestId('sim-detail-header')

    }

    async searchCountry(countryName: string) {
        await this.searchField.fill(countryName);
        await this.countriesList.waitFor({state:'visible'})
        await this.countriesList.getByText(countryName).click()
    }


    async clickBuyNowButton() {
        await this.buyNowButton.first().click()
    }

    async checkPackageDetails() {
        await this.eSimPackageDetails.waitFor({state:'visible'});
        await expect(this.eSimPackageDetails).toHaveScreenshot();
    }
}