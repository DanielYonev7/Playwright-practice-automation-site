import {test, expect} from '../Application/baseFixture'
import { decrypt } from '../config/cryptoHelper.js';

test.describe("Calendars Page", ()=>{

    test.beforeEach(async ({page, app})=>{
    await page.goto(decrypt(process.env.baseURL));
    await page.click(`text=${app.landingPage.main_buttons.calendars}`)
})

    test("01. Elements visible on screen", async ({page, app})=>{
        await expect(page.locator(app.calendarPage.header_text)).toBeVisible();
        await expect(page.locator(app.calendarPage.calendar)).toBeVisible();
        await expect(page.locator(app.calendarPage.button_submit)).toBeVisible();
    })

    test("02. Select a calendar date", async({page, app})=>{  

        await page.click(app.calendarPage.calendar)
        await app.calendarPage.selectCalendarDate(23, "February", 1970);
        const value = await page.inputValue(app.calendarPage.calendar);
        await expect(page.locator(app.calendarPage.calendar)).toHaveValue(value)
    })

    test("03.Submit empty form", async ({page, app})=>{
        await page.click(app.calendarPage.button_submit);
        await expect(page.locator(app.calendarPage.error_message)).toBeVisible()
    })
})
