import { signupElements } from "./signup.elements";

export class signupMethods{
    static insertUser(username){
        signupElements.textboxes.username.invoke('val', username)
    }
    static insertPassword(password){
        signupElements.textboxes.password.invoke('val', password)
    }
    static ClickOnSignupButton(){
        signupElements.buttons.signup.click()
    }
    static signup(username, password){
        this.insertUser(username)
        this.insertPassword(password)
        this.ClickOnSignupButton
    }
}