import {test, expect} from '../Application/baseFixture'
import { decrypt } from '../config/cryptoHelper.js';

test.describe("Slider", ()=>{

    test.beforeEach(async ({page, app})=>{
        await page.goto(decrypt(process.env.baseURL));
        await page.click(`text=${app.landingPage.main_buttons.sliders}`)
    })


    test("01. Navigation", async ({page, app})=>{
        await expect(page.locator(app.sliderPage.header_text)).toBeVisible()
    })


    test("02. Elements visible on screen", async({page, app})=>{
        await expect(page.locator(app.sliderPage.slider)).toBeVisible();
        const value_of_slider = await page.locator(app.sliderPage.slider_value).innerText()
        const numericValue = Number(value_of_slider)
        expect(numericValue).toBe(25);
    })


    test("03. Highest slider value - 100", async ({page, app})=>{
        await app.sliderPage.assertSliderLimit("Right", 100)
    })


    test("04. Lowest slider value - 0", async ({page, app})=>{
        await app.sliderPage.assertSliderLimit("Left", 0)
    })
})
