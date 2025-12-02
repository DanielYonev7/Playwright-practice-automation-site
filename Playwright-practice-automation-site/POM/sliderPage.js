
import {expect} from '../Application/baseFixture'

export class SliderPage {
    
    constructor(page){
        this.page = page;

        this.header_text = "//h1[@itemprop='headline'][text()='Slider']";
        this.slider = "//input[@id='slideMe']";
        this.slider_value = "//span[@id='value']";
    }

    async assertSliderLimit(side, number){
        
        await this.page.click(this.slider);
                let current_value = 25;
        
                    while(true){
        
                        await this.page.keyboard.press(`Arrow${side}`)
                        const value_of_slider = Number(await this.page.locator(this.slider_value).innerText())
                        current_value = value_of_slider;
        
                        if(current_value === number) break
                    }
        
                await this.page.keyboard.press(`Arrow${side}`);
                current_value = Number(await this.page.locator(this.slider_value).innerText())
                
                expect(current_value).toBe(number);
    }
}