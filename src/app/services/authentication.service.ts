import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private route: Router, private location: Location) {}

  public isLoggedIn(): boolean {
    if (this.location.path() === '/login') {
      return true;
    } else {
      return false;
    }
  }
}
