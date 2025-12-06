import {test, expect} from '../Application/baseFixture'
import { decrypt } from '../config/cryptoHelper.js';

test.describe("Form Fields", ()=>{
    
    test.beforeEach(async ({page, app})=>{
        await page.goto(decrypt(process.env.baseURL));
        await page.click(`text=${app.landingPage.main_buttons.form_fields}`)
    })

    test("01.Successful navigation", async ({page, app})=>{
        await expect(page.locator(app.formFieldsPage.header_text)).toBeVisible()
    })

    test("02.Elements visible on screen", async({page, app})=>{
        await expect(page.locator(app.formFieldsPage.name_input_field)).toBeVisible();
        await expect(page.locator(app.formFieldsPage.password_input_field)).toBeVisible();

        for(const drink_options of Object.values(app.formFieldsPage.drink_option)){
            await expect(page.locator(drink_options)).toBeVisible();
        }

        for(const color_options of Object.values(app.formFieldsPage.color_option)){
            await expect(page.locator(color_options)).toBeVisible();
        }

        await expect(page.locator(app.formFieldsPage.automation_dropDown)).toBeVisible()
        await expect(page.locator(app.formFieldsPage.email_input_field)).toBeVisible();
        await expect(page.locator(app.formFieldsPage.message_input_field)).toBeVisible();
        await expect(page.locator(app.formFieldsPage.button_submit)).toBeVisible();
    })

    test("03.Submit complete data", async ({page, app})=>{

        //handle dialot at the end of the form
        page.on('dialog', async dialog => {
            const dialogMessage = dialog.message();
            expect(dialogMessage).toContain('Message received!');
            await dialog.accept();

        })

        await page.fill(app.formFieldsPage.name_input_field, decrypt(process.env.name));
        await page.fill(app.formFieldsPage.password_input_field, decrypt(process.env.password));
        await page.click(app.formFieldsPage.drink_option.water);
        await page.click(app.formFieldsPage.color_option.red);
        await page.click(app.formFieldsPage.automation_dropDown);
        await page.locator(app.formFieldsPage.automation_dropDown).selectOption('yes')
        await page.fill(app.formFieldsPage.email_input_field, decrypt(process.env.email));
        await page.fill(app.formFieldsPage.message_input_field, decrypt(process.env.message));
        await page.click(app.formFieldsPage.button_submit);
    })
})