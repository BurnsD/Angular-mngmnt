import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  inputUserName:string = "admin"; dbUserName:string = "admin"
  inputPassword:string = "admin123"; dbPassword:string = "admin123"
  
  ifUserLoggedIn(){
    if(this.inputUserName === this.dbUserName && this.inputPassword === this.dbPassword)
      return true
  }
}
