import {test, expect} from '../Application/baseFixture'

test.describe("Slider", ()=>{

    test.beforeEach(async ({page, app})=>{
        await page.goto(process.env.baseURL);
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
        await page.click(app.sliderPage.slider);
        let current_value = 25;

            while(true){

                await page.keyboard.press("ArrowRight")
                const value_of_slider = Number(await page.locator(app.sliderPage.slider_value).innerText());
                current_value = value_of_slider;

                if(current_value === 100) break
            }
            
        await page.keyboard.press("ArrowRight");
        current_value = Number(await page.locator(app.sliderPage.slider_value).innerText())
        
        expect(current_value).toBe(100);
    })


    test("04. Lowest slider value - 0", async ({page, app})=>{

        await page.click(app.sliderPage.slider);
        let current_value = 25;

            while(true){

                await page.keyboard.press("ArrowLeft")
                    const value_of_slider = Number(await page.locator(app.sliderPage.slider_value).innerText())
                    current_value = value_of_slider;

                    if(current_value === 0) break
            }

        await page.keyboard.press("ArrowLeft");
        current_value = Number(await page.locator(app.sliderPage.slider_value).innerText())
        
        expect(current_value).toBe(0);
    })
})