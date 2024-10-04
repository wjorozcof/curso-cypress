import { HomeElements } from "./home.elements";

export class HomeMethods {

    static clickOnPhones() {
        HomeElements.categoyMenu.phones.click();
    }
    static clickOnLaptops() {
        HomeElements.categoyMenu.phones.click();
    }
    static clickOnMonitors() {
        HomeElements.categoyMenu.monitors.click();
    }
    static clicOnProductLink(product){
        HomeElements.product(product).click();
    }

}