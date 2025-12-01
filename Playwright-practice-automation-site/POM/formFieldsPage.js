
export class FormFieldsPage {

    constructor(page){

        this.page = page;

        this.header_text = "//h1[@itemprop='headline'][text()='Form Fields']";
        
        //submit
        this.button_submit = "//button[@id='submit-btn']";
        
        //input fields
        this.name_input_field = "//input[@id='name-input']";
        this.password_input_field = "//input[@type='password']";
        this.email_input_field = "//input[@id='email']";
        this.message_input_field = "//textarea[@id='message']";


        //checkbox options
        this.drink_option = {
            water: "//input[contains(@type, 'checkbox') and @id='drink1']",
            milk: "//input[contains(@type, 'checkbox') and @id='drink2']",
            coffee: "//input[contains(@type, 'checkbox') and @id='drink3']",
            wine: "//input[contains(@type, 'checkbox') and @id='drink4']",
            ctrl_alt_delight: "//input[contains(@type, 'checkbox') and @id='drink5']"
        }

        //radio options
        this.color_option = {
            red: "//input[contains(@type, 'radio') and @id='color1']",
            blue: "//input[contains(@type, 'radio') and @id='color2']",
            yellow: "//input[contains(@type, 'radio') and @id='color3']",
            green: "//input[contains(@type, 'radio') and @id='color4']",
            FFC0CB: "//input[contains(@type, 'radio') and @id='color5']"
        }

        //dropdown
        this.automation_dropDown = "//select[@id='automation']";
        this.automation_dropDown_option = {
            default: "//select[@id='automation']//option[contains(@value, 'default')]",
            yes: "//select[@id='automation']//option[contains(@value, 'yes')]",
            no: "//select[@id='automation']//option[contains(@value, 'no')]",
            undecided: "//select[@id='automation']//option[contains(@value, 'undecided')]"
        }
    }
}