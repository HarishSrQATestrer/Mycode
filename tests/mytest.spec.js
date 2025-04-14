import{test, expect} from '@playwright/test'

//Basic test using locators   --> Day 2
test('sample', async ({page})=>{ 
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").fill("Admin")
    await page.locator("//input[@name='password']").fill("admin123")
    await page.locator("//button[normalize-space(text()=' Login ')]").click()
}) 

//Test using Built-in locator 
test('builtin',async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const logo = await page.getByAltText("company-branding") // Condition inside the variable 
    await expect(logo).toBeVisible()
    await page.getByPlaceholder("Username").fill("Admin")
    await expect().toBeVisible
    await page.getByPlaceholder("Password").fill("admin123")
    await expect().toBeVisible

    // await page.getByText(" Login ").click()

})
