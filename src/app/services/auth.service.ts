import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import { of } from "rxjs";

@Injectable()
export class AuthService {
  private isloggedIn: boolean;
  private userName: string;

  constructor() {
    this.isloggedIn = false;
    this.userName = "";
  }

  login(username: string, password: string) {
    const goodEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (goodEmail.test(String(username).toLowerCase()) && password != null) {
      this.isloggedIn = true;
    }
    this.userName = username;
    return of(this.isloggedIn);
  }

  isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }

  isAdminUser(): boolean {
    if (this.userName == "Admin") {
      return true;
    }
    return false;
  }

  logoutUser(): void {
    this.isloggedIn = false;
  }
}
