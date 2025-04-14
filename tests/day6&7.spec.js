import{test,expect} from '@playwright/test'
test("datepicker fill",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.locator('//input[@id="datepicker"]').fill("12/05/2025")
    //await page.pause()

    await page.locator('//input[@id="datepicker"]').click()
    const date="5"
    const month="November"
    const year="2022"
    while(true){
        const currentmonth=await page.locator('//span[@class="ui-datepicker-month"]').textContent()
        const currentyear=await page.locator('//span[@class="ui-datepicker-year"]').textContent()

        if(currentmonth==month&&currentyear==year){
            break
        }
        await page.locator('//a[@title="Prev"]').click()
    }
    await page.locator(`//a[@class="ui-state-default"][text()=${date}]`).click()
    await page.pause()
})