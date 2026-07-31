import { test } from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutPage } from '../pages/CheckoutPage'

import users from '../test-data/users.json'

test.describe('Checkout Functionality', () => {

    let loginPage: LoginPage;
    let inventoryPage: InventoryPage
    let cartPage: CartPage;
    let checkoutPage: CheckoutPage

    test.beforeEach(async ({ page }) => {

        loginPage = new LoginPage(page);
        inventoryPage = new InventoryPage(page)
        cartPage = new CartPage(page)
        checkoutPage = new CheckoutPage(page)

        await loginPage.navigateToLoginPage()

        await loginPage.login(
            users.validUser.userName,
            users.validUser.password
        )

    })

    test('Verify Successful Checkout', async () => {

        await inventoryPage.addBackpackToCart()

        await inventoryPage.openCart()

        await cartPage.clickCheckout()

        await checkoutPage.continueCheckout(
            'Vanitha',
            'Shetty',
            '560003'
        )

        await checkoutPage.verifyCheckoutOverview()

        await checkoutPage.clickFinish()

        await checkoutPage.verifyOrderCompleted()

    })

})