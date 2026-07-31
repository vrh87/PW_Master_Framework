import { Page } from "@playwright/test";
export class BasePage{

    protected readonly page:Page;

    constructor(page:Page){
        this.page=page
    }

    // Navigate to URL
    async navigate(url:string){
        await this.page.goto(url)
    }
    
    // Get Page Title
    async getTitle(){
        return await this.page.title()
    }

    async getCurrentURL(){
        return await this.page.url()
    }

    async refreshPage(){
        await this.page.reload()
    }
    async takeScreenshot(fileName:string){
        await this.page.screenshot({
            path:`screenshots/${fileName}.png`,
            fullPage:true
                })
                
    }

    async waitForPageLoad(){
        await this.page.waitForLoadState('networkidle')
    }
    async goBack(){
        await this.page.goBack();
    }
    async goForward(){
        await this.page.goForward()
    }

    async closePage(){
        await this.page.close()
    }
}