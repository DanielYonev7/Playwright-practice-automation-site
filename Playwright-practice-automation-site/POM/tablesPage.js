
import { expect } from "../Application/baseFixture";

export class TablesPage {

    constructor(page){
        this.page = page;
        this.header_text = "//h1[@itemprop='headline'][text()='Tables']";

        this.simple_table_element = {
            Oranges: "//table//tr//td[contains(text(), 'Oranges')]",
            Laptop: "//table//tr//td[contains(text(), 'Laptop')]",
            Marbles: "//table//tr//td[contains(text(), 'Marbles')]"
        }

        this.simple_table_elementPrice = {
            Oranges: "//table//tr//td[contains(text(), 'Oranges')]/following-sibling::td",
            Laptop: "//table//tr//td[contains(text(), 'Laptop')]/following-sibling::td",
            Marbles: "//table//tr//td[contains(text(), 'Marbles')]/following-sibling::td"
        }

        this.sortable_table_searchField = "//input[@id='dt-search-0']";
    }

    getSimpleTableItemPriceLocator(itemName) {
    return this.page.locator(`//table//tr//td[contains(text(), '${itemName}')]/following-sibling::td`);
}

      async searchSortableTable(country){
        await this.page.fill(this.sortable_table_searchField, country);
      }
}