import { decrypt } from '../config/cryptoHelper'
import {test, expect} from '../Application/baseFixture'

test.describe("Hover Page", ()=>{

    test.beforeEach(async ({page, app})=>{
        await page.goto(decrypt(process.env.baseURL));
        await page.click(`text=${app.landingPage.main_buttons.hover}`);
    })

    test("01. Navigation", async ({page, app})=>{
        await expect(page.locator(app.hoverPage.page_element)).toBeVisible();
    })

    test("02. Hover functionality", async ({page, app})=>{
        await page.locator(app.hoverPage.page_element).hover();
        
        const elementText = await page.locator(app.hoverPage.page_element).textContent();
        expect(elementText).toBe('You did it!');
    })
})
