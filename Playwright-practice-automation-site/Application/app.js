import { JavaScriptDelays } from "../POM/javaScriptDelaysPage";
import { LandingPage } from "../POM/landingPage";

    export class Application {

        constructor(page){
            this.page = page;
            this.landingPage = new LandingPage(this.page);
            this.javaScriptDelaysPage = new JavaScriptDelays(this.page)
        }
    }   