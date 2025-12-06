import {test, expect} from '../Application//baseFixture'
import { decrypt } from '../config/cryptoHelper.js';

test.describe("Modals Page", ()=>{

    test.beforeEach(async ({page, app})=>{
        await page.goto(decrypt(process.env.baseURL));
        await page.click(`text=${app.landingPage.main_buttons.modals}`)
    })

    test("01. Elements visible on screen", async({page, app})=>{
        await expect(page.locator(app.modalsPage.header_text)).toBeVisible();
        await expect(page.locator(app.modalsPage.simple_modal_button)).toBeVisible();
        await expect(page.locator(app.modalsPage.form_modal_button)).toBeVisible();
    })

    test("02. Simple Modal - button functionality", async ({page, app})=>{
        await page.click(app.modalsPage.simple_modal_button);
        await expect(page.locator(app.modalsPage.simple_modal)).toBeVisible();
    })

    test("03. Simple Modal - Title visibility", async ({page, app})=>{
        await page.click(app.modalsPage.simple_modal_button);
        await expect(page.locator(app.modalsPage.simple_modal_title)).toBeVisible();
    })

    test("04. Simple Modal - Text visibility", async ({page, app})=>{
        await page.click(app.modalsPage.simple_modal_button);
        await expect(page.locator(app.modalsPage.simple_modal_text)).toBeVisible();
    })

    test("05. Form Modal - form visibility", async ({page, app})=>{
        await page.click(app.modalsPage.form_modal_button);
        await expect(page.locator(app.modalsPage.form_modal)).toBeVisible();
    })

    test("06. Successful form completion", async ({page, app})=>{
        await page.click(app.modalsPage.form_modal_button);
        await page.fill(app.modalsPage.form_modal_name, decrypt(process.env.name));
        await page.fill(app.modalsPage.form_modal_email, decrypt(process.env.email));
        await page.fill(app.modalsPage.form_modal_message, decrypt(process.env.message));
        await page.click(app.modalsPage.form_modal_button_submit);

        await expect(page.locator(app.modalsPage.form_modal_successful_details)).toBeVisible()
    })

    test("07. Form modal - close button functionality", async ({page, app})=>{
        await page.click(app.modalsPage.form_modal_button);
        await page.click(app.modalsPage.form_modal_close_button);
        await expect(page.locator(app.modalsPage.form_modal)).not.toBeVisible();
    })

    test("08. Form Modal - Error message: name required", async ({page, app})=>{
        await page.click(app.modalsPage.form_modal_button);
        await page.click(app.modalsPage.form_modal_button_submit);
        await expect(page.locator(app.modalsPage.form_modal_errorMessage_missingName)).toBeVisible();
    })

    test("09. Form Modal - Error message: invalid email", async ({page, app})=>{
        await page.click(app.modalsPage.form_modal_button);
        await page.fill(app.modalsPage.form_modal_email, decrypt(process.env.message));
        await expect(page.locator(app.modalsPage.form_modal_errorMessage_invalidEmail)).toBeVisible()
    })

    test("10. Form Modal - 'Go back' button functionality", async ({page, app})=>{
        await page.click(app.modalsPage.form_modal_button);
        await page.click(app.modalsPage.form_modal_goBack_button);
        await expect(page.locator(app.modalsPage.form_modal_button_submit)).toBeVisible();
    })
})