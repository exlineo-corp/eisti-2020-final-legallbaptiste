import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  templateUrl: "./login.component.html",
  styles: [``],
})
export class LoginComponent implements OnInit {
  invalidCredentialMsg: string = "";
  username: string = "";
  password: string = "";
  retUrl: string = "login";

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.retUrl = "login";
    this.activatedRoute.queryParamMap.subscribe((params) => {
      console.log("LoginComponent/ngOnInit " + this.retUrl);
    });
  }

  onFormSubmit(loginForm) {
    console.log(loginForm.value);
    this.authService
      .login(loginForm.value.username, loginForm.value.password)
      .subscribe((data) => {
        console.log(data);
        console.log("return to " + this.retUrl);
        if (!data) {
          alert(
            "Mauvais contenu pour l'email ou le mot de passe ne doit pas être vide"
          );
          this.router.navigate([this.retUrl]);
        } else {
          this.router.navigate(["/accueil"]);
        }
      });
  }
}
