import { expect } from "../Application//baseFixture";

export class PopUpsPage {

    constructor(page){

        this.page = page;
        this.header_text = "//h1[@itemprop='headline'][text()='Popups']";

        this.button_alert_popup = "//button[@id='alert']";
        this.button_confirm_popup = "//button[@id='confirm']";
        this.button_prompt_popup = "//button[@id='prompt']";

        this.tooltip = "//div[@class='tooltip_1']";
        this.tooltip_cool_button = "//span[@class='tooltip_text show']"
    }

    async acceptDialogMessage(text){
        this.page.on('dialog', async dialog => {
                    const dialogMessage = dialog.message();
                    expect(dialogMessage).toContain(text);
                    await dialog.accept();
                })
    }
}