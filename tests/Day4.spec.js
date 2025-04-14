import  {test , expect } from '@playwright/test';

test('keys', async({page})=>{

////Keyboard actions
  await page.goto("https://gotranscript.com/text-compare")
  const locator = await page.locator("//textarea[@name='text1']")
  await locator.click()
  await locator.fill("Hello world, welcome to the Playwright program")
  await page.keyboard.press('Meta+A')
  await page.keyboard.press('Meta+C')
  await page.keyboard.press('Tab')
  await page.keyboard.press('Meta+V')
  await page.waitForTimeout(3000)
})

test('mousehover',async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com")
    const mouse = await page.locator("//button[@class='dropbtn']")
    await mouse.hover()
    await page.waitForTimeout(3000)
})

test('double-click',async ({page})=>{
    let text = 'Playwright'
    await page.goto("https://testautomationpractice.blogspot.com")
    const name = await page.locator("//input[@id='field1']")
    await name.press('Meta+A')
    await name.press('Meta+X')
    await name.fill(text)
    const doublclick = await page.locator("//button[@ondblclick='myFunction1()']")
    await doublclick.dblclick()
    await expect(page.locator("//input[@id='field2']")).toHaveValue(text)
    await page.waitForTimeout(3000)
})

test('right-click', async({page})=>{
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
  const rclick = await page.locator("//span[@class='context-menu-one btn btn-neutral']")
  await rclick.click({button:'right'})
  await page.waitForTimeout(3000)
})