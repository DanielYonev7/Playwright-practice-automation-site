import {test, expect} from '../Application/baseFixture';



test.describe('Landing Page', ()=>{

  test.beforeEach(async ({page})=>{
    await page.goto(process.env.baseURL)

  })

  test("01. Landing page - successful navigation", async({page, app})=>{
    await expect(page.locator(app.landingPage.header_text)).toBeVisible()
  })

  test("02. Button visibility", async ({app})=>{
    await app.landingPage.checkButtonVisibility(app.landingPage.main_buttons);

  })

  test("03. Header button visibility", async ({app})=>{
    await app.landingPage.checkButtonVisibility(app.landingPage.header_buttons);
  })

})
