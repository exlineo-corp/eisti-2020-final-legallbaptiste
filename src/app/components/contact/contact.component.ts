import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  NgForm,
} from "@angular/forms";
import { Router } from "@angular/router";

import { ContactService } from "src/app/services/contact.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;
  constructor(
    private builder: FormBuilder,
    private contact: ContactService,
    private router: Router
  ) {
    this.FormData = this.builder.group({
      Fullname: new FormControl("", [Validators.required]),
      Email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
      Comment: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl("", [Validators.required]),
      Email: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"),
        ])
      ),
      Comment: new FormControl("", [Validators.required]),
    });
  }

  onSubmit(FormData: any) {
    console.log(FormData);
    this.contact.PostMessage(FormData).subscribe(
      (response) => {
        this.router.navigate(["/accueil"]);
        console.log(response);
      },
      (error) => {
        console.warn(error.responseText);
        console.log({ error });
      }
    );
  }
}
