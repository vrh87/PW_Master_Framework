import{test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import users from '../test-data/users.json'

test.describe('Login functionality',() => {

    let loginPage: LoginPage;

    test.beforeEach(async({page})=>{
      loginPage  =new LoginPage(page)
     await loginPage.navigateToLoginPage()
    })

test("Verify Successful login with valid credentials",async({page})=>{
  await loginPage.login(
  users.validUser.userName,
  users.validUser.password
  )
  await loginPage.verifySuccessfullogin()
})

test("Verify error message for invalid login",async({page})=>{
    await loginPage.login(
   users.invalidUser.userName,
   users.invalidUser.password
        );

await loginPage.verifyInvalidLogin(
    'Epic sadface: Username and password do not match any user in this service'
    );
await loginPage.verifyLoginPageLoaded()
})
})





