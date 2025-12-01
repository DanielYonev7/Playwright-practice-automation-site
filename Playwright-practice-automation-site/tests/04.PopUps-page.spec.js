import {test, expect} from '../Application/baseFixture'


test.describe("Popups Page", ()=>{

    test.beforeEach(async ({page, app})=>{
        await page.goto(process.env.baseURL);
        await page.click(`text=${app.landingPage.main_buttons.popups}`)
})

    test("01.element visibility", async({page, app})=>{

        await expect(page.locator(app.popUpsPage.button_alert_popup)).toBeVisible();
        await expect(page.locator(app.popUpsPage.button_confirm_popup)).toBeVisible();
        await expect(page.locator(app.popUpsPage.button_prompt_popup)).toBeVisible();
        await expect(page.locator(app.popUpsPage.tooltip)).toBeVisible();
        await expect(page.locator(app.popUpsPage.tooltip_cool_button)).not.toBeVisible();
})

    test("02. 'Cool text' button visibility", async({page, app})=>{

        await page.click(app.popUpsPage.tooltip);
        await expect(page.locator(app.popUpsPage.tooltip_cool_button)).toBeVisible();

        await page.click(app.popUpsPage.tooltip_cool_button);
        await expect(page.locator(app.popUpsPage.tooltip_cool_button)).not.toBeVisible();
    
    })

    test("03. Alert Popup", async ({page, app})=>{
        await app.popUpsPage.acceptDialogMessage('Hi there, pal!')

        await page.click(app.popUpsPage.button_alert_popup);
    })

    test("04. Confirm Popup", async({page, app})=>{

        await app.popUpsPage.acceptDialogMessage('OK or Cancel, which will it be?');

        await page.click(app.popUpsPage.button_confirm_popup);
        const confirmation_text = await page.locator("//p[@id='confirmResult']").textContent();
        expect(confirmation_text).toContain("OK it is!")
    })

    test("05. Prompt Popup", async({page, app})=>{
        
        page.on('dialog', async dialog => {
                    await dialog.accept(process.env.name);
                })

        await page.click(app.popUpsPage.button_prompt_popup);
        const prompt_text = await page.locator("//p[@id='promptResult']").textContent();
        expect(prompt_text).toContain(`Nice to meet you, ${process.env.name}`);
    })
})
