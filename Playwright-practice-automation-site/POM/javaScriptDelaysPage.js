
export class JavaScriptDelays{

    constructor(page){
        this.page = page;

        this.header_text = "//h1[@itemprop='headline'][text()='JavaScript Delays']";
        this.start_button = "//button[@id='start']";
        this.lift_off_message = "//div[@id='delay'][text()='Liftoff!']"

    }
}