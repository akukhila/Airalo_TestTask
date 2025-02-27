import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchField: Locator
    readonly countriesList: Locator
    readonly buyNowButton: Locator
    readonly eSimPackageDetails: Locator
    readonly packageTitle: Locator
    readonly coverageRow: Locator
    readonly coverageValue: Locator
    readonly dataRow: Locator
    readonly dataValue: Locator
    readonly validityRow: Locator
    readonly validityValue: Locator
    readonly priceRow: Locator
    readonly priceValue: Locator



    constructor(page: Page) {
        this.page = page;
        this.searchField = page.getByTestId('search-input');
        this.countriesList = page.locator('.countries-list')
        this.buyNowButton = page.getByRole('button', { name: 'BUY NOW' })
        this.eSimPackageDetails = page.getByTestId('sim-detail-header')
        this.packageTitle = page.getByTestId('sim-detail-operator-title')
        this.coverageRow = this.eSimPackageDetails.getByTestId('COVERAGE-row');
        this.coverageValue = this.eSimPackageDetails.getByTestId('COVERAGE-value')
        this.dataRow = this.eSimPackageDetails.getByTestId('DATA-row');
        this.dataValue = this.eSimPackageDetails.getByTestId('DATA-value')
        this.validityRow = this.eSimPackageDetails.getByTestId('VALIDITY-row');
        this.validityValue = this.eSimPackageDetails.getByTestId('VALIDITY-value')
        this.priceRow = this.eSimPackageDetails.getByTestId('PRICE-row');
        this.priceValue = this.eSimPackageDetails.getByTestId('PRICE-value')

    }

    async searchCountry(countryName: string) {
        await this.searchField.fill(countryName);
        await this.countriesList.waitFor({ state: 'visible' })
        await this.countriesList.getByText(countryName).click()
    }


    async clickBuyNowButton() {
        await this.buyNowButton.first().click()
    }

    async checkPackageDetails(title: string, coverage: string, data: string, validity: string, price: string) {
        await this.eSimPackageDetails.waitFor({ state: 'visible' });
        await expect(this.packageTitle).toHaveText(title);
        await expect(this.coverageRow).toHaveText('COVERAGE');
        await expect(this.coverageValue).toHaveText(coverage);
        await expect(this.dataRow).toHaveText('DATA');
        await expect(this.dataValue).toHaveText(data);
        await expect(this.validityRow).toHaveText('VALIDITY');
        await expect(this.validityValue).toHaveText(validity);
        await expect(this.priceRow).toHaveText('PRICE');
        await expect(this.priceValue).toHaveText(price);

    }
}