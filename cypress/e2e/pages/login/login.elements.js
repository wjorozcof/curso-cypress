export class LoginElements {
    static get textboxes() {
        return {
            get username() {
                return cy.get('input#loginusername')
            },
            get password() {
                return cy.get('input#loginpassword')
            }
        }
    }
    static get buttons() {
        return {
            get login() {
                return cy.contains('button', 'Log in')
            },
            get close() {
                return cy.get('div[id="logInModal"] button').eq(1)
            }
        }
    }

}