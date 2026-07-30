import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { CartPage } from '../pages/Cartpage'
import users from '../test-data/users.json'

test.describe('Cart functionality',()=>{
    let loginPage:LoginPage
    let inventoryPage:InventoryPage
    let cartPage:CartPage


test.beforeEach(async({page})=>{
    loginPage=new LoginPage(page)
   inventoryPage =new InventoryPage(page)
   cartPage=new CartPage(page)

   await loginPage.navigateToLoginPage()
   await loginPage.login(
    users.validUser.userName,
    users.validUser.password
   )

   await inventoryPage.verifyInventoryPage()
})

test("Verify user can add product to cart",async({page})=>{
    await inventoryPage.addBackpackToCart()
    await inventoryPage.openCart()
    await cartPage.verifyCartPage()
})


})