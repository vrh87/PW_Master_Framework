import{Page,Locator,expect} from '@playwright/test'
import { BasePage } from './BasePage'
import { Logger } from '../utils/logger'

export class InventoryPage extends BasePage{
    readonly appLogo:Locator
    readonly shoppingCart:Locator
    readonly inventoryItems:Locator
    readonly shoppingCartBadge:Locator
    readonly menuButton:Locator
    readonly backpackAddToCartButton: Locator
    readonly removeBackpackButton:Locator

    constructor(page:Page){
        super(page)
        this.appLogo=this.page.locator(".app_logo")
        this.shoppingCart=this.page.locator(".shopping_cart_link")
        this.shoppingCartBadge=this.page.locator(".shopping_cart_badge")
        this.inventoryItems = this.page.locator(".inventory_item")
        this.menuButton=this.page.locator('#react-burger-menu-btn')
        this.backpackAddToCartButton = this.page.locator("#add-to-cart-sauce-labs-backpack")
        this.removeBackpackButton=this.page.locator("#remove-sauce-labs-backpack")
    }

    async verifyInventoryPage(){
        await expect(this.appLogo).toBeVisible()
        await expect (this.shoppingCart).toBeVisible()
        await expect(this.inventoryItems.first()).toBeVisible()
    }

      // Add Backpack to Cart
    async addBackpackToCart() {
        Logger.info("Adding Backpack to Cart")
        await this.backpackAddToCartButton.click();
    }

    async verifyBackpackAddedToCart() {
    await expect(this.removeBackpackButton).toBeVisible();
    }

    //Remove Backpack from Cart
    async removeBackpackFromCart(){
        Logger.info("Removing Backpack from Cart");
        await this.removeBackpackButton.click()
    }


    async openCart(){
        await this.shoppingCart.click()
    }

    async verifyProductsDisplayed(){
        await expect(this.inventoryItems.first()).toBeVisible()
    }

    async verifyProductCount(){
        await expect(this.inventoryItems).toHaveCount(6)
    
    }
    //Verify Cart Badge
    async verifyCartBadge(){
        await expect(this.shoppingCartBadge).toHaveText("1")
    }
}