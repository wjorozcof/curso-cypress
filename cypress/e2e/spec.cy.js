import { CartMethods } from "./pages/productDetails/cart.methods"
import { HomeElements } from "./pages/home/home.elements"
import { HomeMethods } from "./pages/home/home.methods"
import { CartPagesMethods } from "./pages/cart/cartPages.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com/')
    HomeMethods.clicOnProductLink('Nokia lumia 1520')
    CartMethods.addToCart()
    cy.contains('a', 'Cart').click()
    CartPagesMethods.clickOnDelete('Nokia lumia 1520')
    cy.wait(20000)
    //cy.wait(30000)

  })
})