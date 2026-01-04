import {test, expect} from '../Application/baseFixture'
import { decrypt } from '../config/cryptoHelper'

test.describe("Ads Page", ()=>{

    test.beforeEach(async ({page, app})=>{
        await page.goto(decrypt(process.env.baseURL));
        await page.click(`text=${app.landingPage.main_buttons.ads}`);
})

    test("01. Navigation", async({page, app})=>{
        await expect(page.locator(app.adsPage.header_text)).toBeVisible()
    })

    test("02. Ad - visibility", async({page, app})=>{
        await page.waitForSelector(app.adsPage.header_text);
        await expect(page.locator(app.adsPage.page_ad)).toBeVisible({timeout: 6000})
    })

})
