
export class SliderPage {
    
    constructor(page){
        this.page = page;

        this.header_text = "//h1[@itemprop='headline'][text()='Slider']";
        this.slider = "//input[@id='slideMe']";
        this.slider_value = "//span[@id='value']";
    }
}