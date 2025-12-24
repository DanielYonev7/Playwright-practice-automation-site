import { decrypt } from '../config/cryptoHelper.js';
import {test, expect} from '../Application/baseFixture'
const newTabUrl = 'https://automatenow.io/' 


test.describe("Window Operations", ()=>{

    test.beforeEach(async ({page, app})=>{
        await page.goto(decrypt(process.env.baseURL));
        await page.click(`text=${app.landingPage.main_buttons.window_operations}`)
    })

    test("01. Navigation", async ({page, app})=>{
        await expect(page.locator(app.windowOperationsPage.header_text)).toBeVisible();
    })

    test("02. Button visibility - 'New Tab'", async ({page, app})=>{
        await expect(page.locator(app.windowOperationsPage.button_new_tab)).toBeVisible();
    })
    
    test("03. Button visibility - 'Replace Window'", async({page, app})=>{
        await expect(page.locator(app.windowOperationsPage.button_replace_window)).toBeVisible();
    })
    
    test("04. Button visibility - 'New Window'", async({page, app})=>{
        await expect(page.locator(app.windowOperationsPage.button_new_window)).toBeVisible();
    })

    test("05. 'New Tab' functionality", async ({page, app})=>{

        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.click(app.windowOperationsPage.button_new_tab)
        ])

        const url = newPage.url();
        expect(url).toBe(newTabUrl);
    })

    test("06. 'Replace Window' functionality", async ({page, app})=>{

        await page.click(app.windowOperationsPage.button_replace_window);

        const url = page.url();
        expect(url).toBe(newTabUrl);
    })

    test("07. 'New Window' functionality", async ({page, context, app})=>{

        const[newBrowserPage] = await Promise.all([
            context.waitForEvent('page'),
            page.click(app.windowOperationsPage.button_new_window),
        ])

        const url = newBrowserPage.url();
        expect(url).toBe(newTabUrl);
    })
})
