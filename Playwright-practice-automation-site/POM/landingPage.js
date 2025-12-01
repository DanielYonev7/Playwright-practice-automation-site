import { expect } from "../Application/baseFixture";

export class LandingPage{

    constructor(page){
        this.page = page;

        this.header_text = "//h1[@class='wp-block-heading']"
        
        this.main_buttons = {

            javaScript_delays: "JavaScript Delays",
            form_fields:"Form Fields",
            popups: "Popups",
            sliders: "Sliders",
            calendars: "Calendars",
            modals: "Modals",
            tables: "Tables",
            window_operations: "Window Operations",
            hover: "Hover",
            ads: "Ads",
            gestures: "Gestures",
            flie_download: "File Download",
            click_events: "Click Events",
            spinners: "Spinners",
            file_upload: "File Upload",
            iframes: "Iframes",
            broken_images: "Broken Images",
            broken_links: "Broken Links",
            accordions: "Accordions"
        }

        this.header_buttons = {
            courses: "Courses",
            blog: "Blog"
        }
    }

        //check if all buttons on the home page are visible

        async checkButtonVisibility(buttons){
            for(const value of Object.values(buttons)){
                if(!value){
                    console.log(`button ${value} could not be located`)
                }
                await expect(this.page.locator(`text='${value}'`)).toBeVisible()
            }
        }
    }
