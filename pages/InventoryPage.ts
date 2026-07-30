import{Page,Locator,expect} from '@playwright/test'
import { BasePage } from './BasePage'

export class InventoryPage extends BasePage{
    readonly appLogo:Locator
    readonly shoppingCart:Locator
    readonly inventoryItems:Locator
    readonly shoppingCartBadge:Locator
    readonly menuButton:Locator
    readonly backpackAddToCartButton: Locator
    readonly removeFromCart:Locator

    constructor(page:Page){
        super(page)
        this.appLogo=this.page.locator(".app_logo")
        this.shoppingCart=this.page.locator(".shopping_cart_link")
        this.shoppingCartBadge=this.page.locator(".shopping_cart_badge")
        this.inventoryItems = this.page.locator(".inventory_item")
        this.menuButton=this.page.locator('#react-burger-menu-btn')
        this.backpackAddToCartButton = this.page.locator("#add-to-cart-sauce-labs-backpack")
        this.removeFromCart=this.page.locator("#remove-sauce-labs-backpack")
    }

    async verifyInventoryPage(){
        await expect(this.appLogo).toBeVisible()
        await expect (this.shoppingCart).toBeVisible()
        await expect(this.inventoryItems.first()).toBeVisible()
    }

      // Add Backpack to Cart
    async addBackpackToCart() {
        await this.backpackAddToCartButton.click();
    }

    //Remove Backpack from Cart
    async removeBackpackFromCart(){
        await this.removeFromCart.click()
    }
    async openCart(){
        await this.shoppingCart.click()
    }

    async verifyProductsDisplayed(){
        await expect(this.inventoryItems.first()).toBeVisible()
    }

    async verifyproductCount(){
        await expect(this.inventoryItems).toHaveCount(6)
    
    }
    //Verify Cart Badge
    async VerifyCartBadge(){
        await expect(this.shoppingCartBadge).toHaveText("1")
    }
}