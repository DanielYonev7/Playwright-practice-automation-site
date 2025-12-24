import { CalendarsPage } from "../POM/calendarsPage";
import { FormFieldsPage } from "../POM/formFieldsPage";
import { JavaScriptDelays } from "../POM/javaScriptDelaysPage";
import { LandingPage } from "../POM/landingPage";
import { ModalsPage } from "../POM/modalPage";
import {PopUpsPage} from "../POM/popups"
import { SliderPage } from "../POM/sliderPage";
import { TablesPage } from "../POM/tablesPage";
import { WindowOperationsPage } from "../POM/windowOperationsPage";

    export class Application {

        constructor(page){
            this.page = page;
            this.landingPage = new LandingPage(this.page);
            this.javaScriptDelaysPage = new JavaScriptDelays(this.page);
            this.formFieldsPage = new FormFieldsPage(this.page);
            this.popUpsPage = new PopUpsPage(this.page);
            this.sliderPage = new SliderPage(this.page);
            this.calendarPage = new CalendarsPage(this.page);
            this.modalsPage = new ModalsPage(this.page);
            this.tablesPage = new TablesPage(this.page);
            this.windowOperationsPage = new WindowOperationsPage(this.page);
        }
    }   