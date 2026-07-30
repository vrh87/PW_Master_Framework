import{Locator,Page,expect} from '@playwright/test'
import { BasePage } from './BasePage'

export class CartPage extends BasePage{
    readonly cartTitle: Locator
    readonly backpackItem: Locator
    readonly checkoutButton:Locator
    readonly cartItems:Locator
    readonly ContinueShopping:Locator
    readonly removeButton: Locator;

    constructor(page:Page){
        super(page)
        this.cartTitle = this.page.locator('.title')
        this.backpackItem = this.page.locator('[data-test="inventory-item-name"]')
        this.checkoutButton=this.page.locator("#checkout")
        this.cartItems=this.page.locator(".cart_item")
        this.ContinueShopping=this.page.locator("#continue-shopping")
        this.removeButton = this.page.locator('#remove-sauce-labs-backpack');
      
    }

    async verifyCartPage(){
        await expect(this.checkoutButton).toBeVisible()
        await expect(this.cartTitle).toHaveText('Your Cart')
    }

    async verifyBackpackAdded(){
        await expect(this.backpackItem).toHaveText("Sauce Labs Backpack")
    }

      async verifyCartItemCount(expectedCount: number) {

        await expect(this.cartItems).toHaveCount(expectedCount);

    }

     async removeBackpack() {

        await this.removeButton.click();

    }

    async verifyContinueShopping(){
        await expect(this.ContinueShopping).toBeVisible()
    }
    
    async clickCheckout(){
        await this.checkoutButton.click()
    }
}

