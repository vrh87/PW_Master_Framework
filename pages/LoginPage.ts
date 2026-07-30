import { Page,Locator,expect } from '@playwright/test';
import { BasePage } from './BasePage';
import {URLs} from '../constants1/urls'

export class LoginPage extends BasePage{
   
 //Locators
    readonly usernameInput:Locator
    readonly passwordInput:Locator
    readonly loginButton:Locator
    readonly errorMessage:Locator
    readonly appLogo:Locator
    readonly menuButton:Locator

    //constructor
    constructor(page:Page){
        super(page)
        this.usernameInput =this.page.locator("#user-name")
        this.passwordInput =this.page.locator("#password")
        this.loginButton=this.page.locator("#login-button")
        this.errorMessage=this.page.locator('[data-test="error"]')
        this.appLogo=this.page.locator(".app_logo")
        this.menuButton=this.page.locator("#react-burger-menu-btn")
    }


    // Navigate to Login Page
    async navigateToLoginPage(){
        await this.page.goto(URLs.BASE_URL)
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
    async clickLoginButton(){
        await this.loginButton.click()
    }

    //Complete Login
    async login(username:string,password:string){
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickLoginButton()
    }

    //Verify Successful Login
    async verifySuccessfullogin(){
        await expect(this.page).toHaveURL(/inventory/)
        await expect (this.appLogo).toBeVisible()
    }

    //Verify Invalid Login
    async verifyInvalidLogin(errorText:string){
        await expect(this.errorMessage).toHaveText(errorText)
    }

    //Get Error Message
    async getErrorMessage(){
        return await this.errorMessage.textContent()
    }

    //Verify the Login button
    async verifyLoginButtonVisible(){
        await expect(this.loginButton).toBeVisible()
    }

    //Verify Login Page Loaded
    async verifyLoginPageLoaded(){
        await expect(this.usernameInput).toBeVisible()
        await expect(this.passwordInput).toBeVisible()
        await expect(this.loginButton).toBeVisible()
    }
}

