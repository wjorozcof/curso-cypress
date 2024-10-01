export class signupElements {
    static get textboxes(){
        return{
            get username(){
                return cy.get('input#sign-username')
            },
            get password(){
                return cy.get('input#sign-password')
            }
        }
    }
    
    static get buttons(){
        return{
            get signup(){
                return cy.contains('button', 'Sign up')
            },
            get close(){
                return cy.contains('button', 'Close').eq(1)
            }
        }
    }
}