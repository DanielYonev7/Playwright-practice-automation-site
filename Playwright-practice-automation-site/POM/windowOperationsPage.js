
export class WindowOperationsPage {
    constructor(page){

        this.page = page;
        this.header_text = "//h1[@itemprop='headline'][text()='Window Operations']";

        this.button_new_tab = "//button[@onclick='newTab()']";
        this.button_replace_window = "//button[@onclick='newWindowSelf()']";
        this.button_new_window = "//button[@onclick='newWindow()']";

    }

    
}