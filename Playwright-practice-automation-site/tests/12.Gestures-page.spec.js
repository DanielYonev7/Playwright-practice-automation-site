import {test, expect} from '../Application/baseFixture';
import { decrypt } from '../config/cryptoHelper';

test.describe("Gestures Page", ()=>{

    test.beforeEach(async ({page, app})=>{
        await page.goto(decrypt(process.env.baseURL));
        await page.click(`text=${app.landingPage.main_buttons.gestures}`);
})
    test("01. Navigation", async ({page, app})=>{
        await expect(page.locator(app.gesturesPage.header_text)).toBeVisible();

    })    

    test.fail("02. Check if element is draggable - Drag&Drop box", async({page, app})=>{
        const element = page.locator(app.gesturesPage.dragDrop_box);
        const box = await element.boundingBox();

        // Move to center of element and grab
        await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
        await page.mouse.down();

        // Drag to viewport coordinates
        await page.mouse.move(220, 360, { steps: 10 });
        await page.mouse.up();

        const elementCoordinates = await element.boundingBox();
        expect(elementCoordinates.x).toBeCloseTo(220, 1);
        expect(elementCoordinates.y).toBeCloseTo(360,1);

    })

    test("03. Check if element is draggable - automate now box", async ({page, app})=>{
        const element = page.locator(app.gesturesPage.automate_now_box);
        await element.dragTo(page.locator(app.gesturesPage.automate_now_dropLocation));
    })

})

