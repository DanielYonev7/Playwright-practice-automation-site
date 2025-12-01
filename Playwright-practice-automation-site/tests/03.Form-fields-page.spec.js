import {test, expect} from '../Application/baseFixture'

test.describe("Form Fields", ()=>{
    
    test.beforeEach(async ({page, app})=>{
        await page.goto(process.env.baseURL);
        await page.click(`text=${app.landingPage.main_buttons.form_fields}`)
    })

    test("Form Fields - successful navigation", async ({page})=>{
    
    })
})