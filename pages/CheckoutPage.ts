import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {

    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly checkoutTitle: Locator;
    readonly overviewTitle: Locator;
    readonly completeHeader: Locator;
    readonly completeText: Locator;
    readonly backHomeButton: Locator;

    constructor(page: Page) {

        super(page);

        this.firstName = this.page.locator('#first-name');
        this.lastName = this.page.locator('#last-name');
        this.postalCode = this.page.locator('#postal-code');
        this.continueButton = this.page.locator('#continue');
        this.finishButton = this.page.locator('#finish');

        this.checkoutTitle = this.page.locator('.title');
        this.overviewTitle = this.page.locator('.title');

        this.completeHeader = this.page.locator('.complete-header');
        this.completeText = this.page.locator('.complete-text');
        this.backHomeButton = this.page.locator('#back-to-products');
    }

    async verifyCheckoutInformationPage() {

        await expect(this.checkoutTitle).toHaveText('Checkout: Your Information');

    }

    async enterFirstName(firstName: string) {

        await this.firstName.fill(firstName);

    }

    async enterLastName(lastName: string) {

        await this.lastName.fill(lastName);

    }

    async enterPostalCode(postalCode: string) {

        await this.postalCode.fill(postalCode);

    }

    async clickContinue() {

        await this.continueButton.click();

    }

    async enterCheckoutDetails(first: string, last: string, zip: string) {

        await this.enterFirstName(first);

        await this.enterLastName(last);

        await this.enterPostalCode(zip);

    }

    async continueCheckout(first: string, last: string, zip: string) {

        await this.enterCheckoutDetails(first, last, zip);
        await this.clickContinue()
    }

    async verifyCheckoutOverview() {

        await expect(this.overviewTitle).toHaveText('Checkout: Overview');

    }

    async clickFinish() {

        await this.finishButton.click();

    }

    async verifyOrderCompleted() {

        await expect(this.completeHeader).toHaveText('Thank you for your order!');

        await expect(this.completeText).toContainText('Your order has been dispatched');

    }

    async clickBackHome() {

        await this.backHomeButton.click();

    }

}