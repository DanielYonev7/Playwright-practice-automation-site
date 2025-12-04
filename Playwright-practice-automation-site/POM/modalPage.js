
export class ModalsPage {

    constructor(page){
        this.page = page;

        this.header_text = "//h1[@itemprop='headline'][text()='Modals']";

        //buttons on the page
        this.simple_modal_button = "//button[@id='simpleModal']";
        this.form_modal_button = "//button[@id='formModal']";

        //Simple modal details
        this.simple_modal = "//div[@id='popmake-1318']";
        this.simple_modal_title = "//div[@id='pum_popup_title_1318']";
        this.simple_modal_text = "//div[@class='pum-content popmake-content']//p[contains(text(),'Hi, I’m a simple modal.')]"
        
        //Form modal details
        this.form_modal = "//div[@id='popmake-674']";
        this.form_modal_name = "//input[@id='g1051-name']";
        this.form_modal_email = "//input[@id='g1051-email']";
        this.form_modal_message = "//textarea[@id='contact-form-comment-g1051-message']";
        this.form_modal_button_submit = "//button[@class='pushbutton-wide']";
        this.form_modal_close_button = "//div[@id='popmake-674']//button[@aria-label='Close']";
        this.form_modal_goBack_button = "//a[@role='button']";
        this.form_modal_successful_details = "//div[@class='jetpack_forms_contact-form-success-summary']//div[@class='field-name'][contains(text(), 'Name')]";

        //error messages
        this.form_modal_errorMessage_missingName = "//span[@id='g1051-name-text-error-message']";
        this.form_modal_errorMessage_invalidEmail = "//span[@id='g1051-email-email-error-message']";
    }
}