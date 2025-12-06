import {test, expect} from '../Application/baseFixture'
import { decrypt } from '../config/cryptoHelper.js';

test.describe("Tables", ()=>{

    test.beforeEach(async ({page, app})=>{
        await page.goto(decrypt(process.env.baseURL));
        await page.click(`text=${app.landingPage.main_buttons.tables}`)
    })

    test("01. Successful navigation", async ({page, app})=>{
        await expect(page.locator(app.tablesPage.header_text)).toBeVisible();
    })

    test("02. Simple Table - visible elements", async ({page, app})=>{
        
        for(const item of Object.values(app.tablesPage.simple_table_element)){
            await expect(page.locator(item)).toBeVisible();
        }
    })

    test("03. Simple Table - correct element price", async ({app})=>{

        const priceLocator = app.tablesPage.getSimpleTableItemPriceLocator('Oranges');
        await expect(priceLocator).toHaveText("$3.99");
    })

    test("04. Sortable Table - check entry", async ({page, app})=>{
        await app.tablesPage.searchSortableTable("India")
        await expect(page.locator(`//table[@id='tablepress-1']//td[@class='column-2'][contains(text(), 'India')]`)).toBeVisible();
    })
})