const{test,expect}=require('@playwright/test');

test("1st",async ({page}) => {
    await page.goto("https://www.google.com/")
    await page.waitForTimeout(3000)
})