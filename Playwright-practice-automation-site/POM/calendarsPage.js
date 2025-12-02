
export class CalendarsPage {

    constructor(page){
        this.page = page;

        this.header_text = "//h1[@itemprop='headline'][text()='Calendars']";
        this.button_submit = "//form[@id='jp-form-d789f525b512b8c992166cfbd9a18204964b4777']//button[@class='pushbutton-wide']";
        
        //calendar elements
        this.calendar = "//input[@id='g1065-1-selectorenteradate']"
        this.calendarMonth = "//header[@class='dp-cal-header']//button[@class='dp-focusable dp-cal-month dp-cal-dropdown']"
        this.calendarYear = "//header[@class='dp-cal-header']//button[@class='dp-focusable dp-cal-year dp-cal-dropdown']";
        this.calendarLeftArrow = "//header[@class='dp-cal-header']//button[@class='dp-focusable dp-prev dp-cal-nav']"
        this.calendarRightArrow = "//header[@class='dp-cal-header']//button[@class='dp-focusable dp-next dp-cal-nav']"

        this.error_message = "//div[@class='contact-form__error show-errors']//span[contains(text(), 'Please fill out the form correctly.')]"
    }

    async selectCalendarDate(day, month, year){
            const calendarMonthText = await this.page.locator(this.calendarMonth).textContent();
            const calendarYearText = await this.page.locator(this.calendarYear).textContent();

            if(calendarMonthText == month && calendarYearText == year){
                await this.page.click(`//button[@class='dp-day ' and text()='${day}']`)
                return;       
            }

            if(!calendarMonthText){
                await this.page.click(this.calendarMonth)
                await this.page.click(`//div[@class='dp-months']//button[contains(text(), '${month}')]`)
            }

            else{
                await this.page.click(this.calendarMonth)
                await this.page.click(`//div[@class='dp-months']//button[contains(text(), '${month}')]`)

                await this.page.click(this.calendarYear);
                await this.page.click(`//div[@class='dp-years']//button[contains(text(), '${year}')]`)
            }

            await this.page.click(`//button[@class='dp-day ' and text()='${day}']`) 
    
    }
}