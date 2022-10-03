import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  loggedIn: boolean = false;

  constructor(private location: Location) {}

  public isLoggedIn(): boolean {
    if (this.location.path() === '/login') {
      return true;
    } else {
      return false;
    }
  }

  checkIfAuthenticated(): boolean {
    return this.loggedIn;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
