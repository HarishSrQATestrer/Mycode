import { test, expect } from '@playwright/test';

///Built-In Assertion (Auto Assertion) ---> Day 3
test("assertion", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com") 
    await expect(page).toHaveTitle("Automation Testing Practice")
    await expect(page.locator("//h1[@class='title']")).toBeVisible()
    await expect(page.locator("//h1[@class='title']")).toHaveText("Automation Testing Practice")
    await expect(page.locator("//h1[@class='title']")).toContainText("Automation Testing Practice")
    await expect(page.locator("//input[@id='name']")).toBeEmpty()
    await expect(page.locator("//input[@id='name']")).toBeEnabled()
    await page.fill("//input[@id='name']","playwright")
    await expect(page.locator("//input[@id='name']")).toHaveValue("playwright")
    await expect(page.locator("//input[@id='name']")).toBeEditable()
})

//Select Radio Button
test ('radiobutton', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")
    await page.locator("//input[@id='male']").check()
    await expect(page.locator("//input[@id='male']")).toBeEnabled()
   // await expect(page.locator("//input[@id='female']")).toBeDisabled()
})

///Select Checkbox 
test ('checkbox', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")
    await page.locator("//input[@id='sunday']").check()
    await expect(page.locator("//input[@id='sunday']")).toBeChecked()
})

//Multiple checkbox  selection in loop 
test ('loop-checkbox', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")

    const locators = [
        "//input[@id='sunday']",
        "//input[@id='wednesday']",
        "//input[@id='monday']",
        "//input[@id='tuesday']" 
    ]
    for(const select of locators){
        await page.locator(select).check()
    }
    for(const uncheck of locators){
        await page.locator(uncheck).uncheck()
        await expect(page.locator(uncheck)).not.toBeChecked()
    }
})

////////// --------------Rahulshetty Practice page--------------- ////////////////////////////////////
test ('radio-rahulshetty',async ({page})=>{
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
  await page.locator("//input[@value='radio1']").check()
  await expect(page.locator("//input[@value='radio2']")).not.toBeChecked()
})

test ('checkbox-rahulshetty',async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("//input[@name='checkBoxOption1']").check()
    await expect(page.locator("//input[@name='checkBoxOption2']" , "//input[@name='checkBoxOption3']")).not.toBeChecked()
  })