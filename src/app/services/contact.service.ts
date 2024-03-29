import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contact } from "src/app/models/contact.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class ContactService {
  private mailApi = "http://localhost:3000/sendmail";

  constructor(private http: HttpClient) {}

  PostMessage(input: any) {
    return this.http.post(this.mailApi, input, { responseType: "text" }).pipe(
      map(
        (response: any) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }
}
