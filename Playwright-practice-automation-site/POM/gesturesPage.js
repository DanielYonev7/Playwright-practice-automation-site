
export class GesturesPage{
    constructor(page){
        this.page = page;

        this.header_text = "//h1[@itemprop='headline'][text()='Gestures']";

        //draggable elements
        this.dragDrop_box = "//div[@id='moveMeHeader']";
        this.automate_now_box = "//img[@src='https://i0.wp.com/practice-automation.com/wp-content/uploads/2022/11/automateNow-logo-4054694486-e1668696475321.png?resize=88%2C56&ssl=1']";
        this.automate_now_dropLocation = "//div[@id='div2']";
        this.map_element = "//div[@class='mk-controls-container mk-text-zoom']";

    }
}