import { CartPagesElements } from "./cartPages.elements";


export class CartPagesMethods {
    static clickOnPlaceOrderButton() {
        CartPagesElements.buttons.placeOrder.click()
    }
    
    static clickOnDelete(product) {
        CartPagesElements.links.delete(product).click()
    }
}