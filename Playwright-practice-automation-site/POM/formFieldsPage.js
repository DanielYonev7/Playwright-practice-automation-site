
export class FormFieldsPage {

    constructor(page){

        this.page = page;
        this.header_text = "//h1[@itemprop='headline'][text()='Form Fields']";
        this.name_input_field = "//input[@id='name-input']";
        this.password_input_field = "//input[@type='password']"

    }
}