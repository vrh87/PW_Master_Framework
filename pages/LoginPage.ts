import { Page,Locator,expect } from '@playwright/test';

export class LoginPage{
    //Page object
    private readonly page:Page

    //Locators
    readonly usernameInput:Locator
    readonly passwordInput:Locator
    readonly loginButton:Locator
    readonly errorMessage:Locator
    readonly appLogo:Locator
    readonly menuButton:Locator

    //constructor
    constructor(page:Page){
        this.page=page
        this.usernameInput =page.locator("#user-name")
        this.passwordInput =page.locator("#password")
        this.loginButton=page.locator("#login-button")
        this.errorMessage=page.locator('[data-test="error"]')
        this.appLogo=page.locator(".app_logo")
        this.menuButton=page.locator("#react-burger-menu-btn")
    }


    // Navigate to Login Page
    async NavigateToLoginPage(){
        await this.page.goto('https://www.saucedemo.com/')
    }

    // Enter Username
    async enterUsername(username:string){
        await this.usernameInput.fill(username)
    }

    //Enter Password
    async enterPassword(password:string){
        await this.passwordInput.fill(password)
    }

    //Click Login Button
    async ClickLoginButton(){
        await this.loginButton.click()
    }

    //Complete Login
    async login(username:string,password:string){
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.ClickLoginButton()
    }

    //Verify Successful Login
    async VerifySuccessfullogin(){
        await expect(this.page).toHaveURL(/inventory/)
        await expect (this.appLogo).toBeVisible()
    }

    //Verify Invalid Login
    async verifyInvalidLogin(errorText:string){
        await expect(this.errorMessage).toHaveText(errorText)
    }

    //Get Error Message
    async getErrormessage(){
        return await this.errorMessage.textContent()
    }

    //Verify the Login button
    async VerifyLoginButtonVisible(){
        await expect(this.loginButton).toBeVisible()
    }

    //Get Page Title
    async getPageTitle(){
        return await this.page.title()
    }
    //Get Current URL
    async getCurrentURL(){
        return this.page.url()
    }
    //Verify Login Page Loaded
    async VerifyLoginPageLoaded(){
        await expect(this.usernameInput).toBeVisible()
        await expect(this.passwordInput).toBeVisible()
        await expect(this.loginButton).toBeVisible()
    }
}

