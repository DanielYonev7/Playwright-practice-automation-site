
export class CalendarsPage {
    constructor(page){
        this.page = page;

        this.header_text = "//h1[@itemprop='headline'][text()='Calendars']";
        this.button_submit = "//form[@id='jp-form-d789f525b512b8c992166cfbd9a18204964b4777']//button[@class='pushbutton-wide']"
        //button[@class='dp-day ' and text()='23']
    }

}