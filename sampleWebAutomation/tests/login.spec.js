
const {test,expect} = require('@playwright/test');

test("1st",async ({page}) => {
    await page.goto("https://www.google.com/")
    await page.waitForTimeout(3000)
    const url = await page.url()
    console.log(url)
    expect(url).toBe("https://www.google.com/")
    const title = await page.title()
    console.log(title)
    expect(title).toBe("Google")
})
