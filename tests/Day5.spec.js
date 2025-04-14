import {test,expect} from '@playwright/test'

///Drag and Drop
test('dragadndrop', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const drag = await page.locator("//div[@id='draggable']")
    const drop =  await page.locator("//div[@id='droppable']")

///1st way  mouse hover method
    await drag.hover()
    await page.mouse.down()  /// --> down means press by click to drag
    await drop.hover()
    await page.mouse.up()   /// --> up means press by click and dropping
    await page.pause()

})
//2nd way  --> Keyboard method
    test('dragadndrop-way2', async ({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")
        const drag = await page.locator("//div[@id='draggable']")
        const drop =  await page.locator("//div[@id='droppable']")

    await drag.dragTo(drop)
    await page.pause()
})

///upload a file
test('file-upload', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//input[@id='singleFileInput']").setInputFiles("tests/file-upload-folder/Screenshot 2025-04-04 at 10.00.28 PM.png")
    await page.click("//button[text()='Upload Single File']")
    await page.pause()
})

//multiple file selection
test('Multiple- file-upload', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    let imagepath =
    [ 
        "tests/file-upload-folder/Screenshot 2025-04-04 at 10.00.28 PM.png",
        "tests/file-upload-folder/Screenshot 2025-04-04 at 10.00.34 PM.png" 
    ]  
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles([imagepath])
    await page.click("//button[text()='Upload Multiple Files']")
    await page.pause()
})

/alert 
 test('alert', async ({page})=>{
     await page.goto("https://testautomationpractice.blogspot.com/")

     page.on('dialog', async dialog=>{
        expect (dialog.type()).toContain('alert')
        expect(dialog.message("I am an alert box!"))
        await dialog.accept()
     })

    await page.click("//button[@id='alertBtn']")
    await page.waitForTimeout(3000)
 })

 test('alert', async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async dialog=>{
       expect (dialog.type()).toContain('confirm')
       expect(dialog.message("I am an alert Press a button!box!"))
       await dialog.accept()
    })

   await page.click("//button[@id='confirmBtn']")
   await page.waitForTimeout(3000)
})