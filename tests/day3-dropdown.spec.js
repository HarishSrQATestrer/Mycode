import {test, expect} from'@playwright/test'

////select drop-down
test('select-dropdown', async({page})=>{
    await page.goto ("https://testautomationpractice.blogspot.com/")
    await page.locator("").selectOption()
    await page.waitForTimeout(3000)
   })




///Dropdown ,multi select
test('multi-select-dropdown', async({page})=>{
 await page.goto ("https://testautomationpractice.blogspot.com/")
 await page.locator("//select[@id='colors']").selectOption(["Red","Blue","Green"])
 await page.waitForTimeout(3000)
})
