import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test.describe('Login functionality',() => {
    test.beforeEach(async({page})=>{
        await page.goto("https://www.saucedemo.com/")
    })

test("Verify Successful login with valid credentials",async({page})=>{

  const loginPage  =new LoginPage(page)
  await loginPage.login(
    'standard_user',
    'secret_sauce'
  )
  await loginPage.VerifySuccessfullogin()
})

test("Verify error message for invalid login",async({page})=>{
    const loginPage=new LoginPage(page)
    await loginPage.login(
            'wrong_user',
            'wrong_password'
        );

await loginPage.verifyInvalidLogin(
    'Epic sadface: Username and password do not match any user in this service'
    );
await loginPage.VerifyLoginPageLoaded()
})
})





