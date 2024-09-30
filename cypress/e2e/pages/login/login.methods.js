import { LoginElements } from "./login.elements";

export class LoginMethods{
     static login(username, pass){
        LoginElements.textboxes.username.type(username) //llamado a la clase y propiedad
        LoginElements.textboxes.password.type(pass)
        LoginElements.buttons.login.click()
    

    }
}