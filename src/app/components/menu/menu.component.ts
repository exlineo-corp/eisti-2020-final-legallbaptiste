import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  login: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.login = true;
  }

  ngOnInit(): void {}

  islogin() {
    return this.authService.isUserLoggedIn();
  }
  logout() {
    this.authService.logoutUser();
    this.router.navigate(["/accueil"]);
  }
}
