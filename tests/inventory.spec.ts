import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import users from '../test-data/users.json'

test.describe("Inventory Page Tests",()=>{

test("Verify inventory page is displayed after login",async({page})=>{
    //Create page object
const loginPage=new LoginPage(page)

//Navigate to login page
await loginPage.navigateToLoginPage()

//Login
 await loginPage.login(
    users.validUser.userName,
    users.validUser.password
)

  // Create Inventory Page Object
    const inventoryPage = new InventoryPage(page);

// Verify inventory page
    await inventoryPage.verifyInventoryPage();
    await inventoryPage.verifyProductsDisplayed()

//Verify product count
await inventoryPage.verifyProductCount()



})

})

