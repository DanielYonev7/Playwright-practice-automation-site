import {test, expect} from '../Application/baseFixture'
import { decrypt } from '../config/cryptoHelper.js';

test.describe("JavaScript Delays Page", ()=>{

    test.beforeEach(async({page, app})=>{
        await page.goto(decrypt(process.env.baseURL));
        await page.click(`text=${app.landingPage.main_buttons.javaScript_delays}`)

    })

    test("01. Successful navigation", async({page, app})=>{
        await expect(page.locator(app.javaScriptDelaysPage.header_text)).toBeVisible()
    })

    test("02. Assert text visibility 'Liftoff!'", async ({page, app})=>{
        await page.click(app.javaScriptDelaysPage.start_button);
        await expect(page.locator(app.javaScriptDelaysPage.lift_off_message)).toBeVisible({timeout: 30000})
    })
})