import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {

  constructor(private user:User) { }
  loggedIn = false;

  login(user:User):boolean{
    if(user.userName=="vildan"&&user.password=="12345"){
      return true;
      this.loggedIn = true;
      localStorage.setItem("isLogged", user.userName)
    } 
    return false; 

  }

  isLoggendIn(){
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}
