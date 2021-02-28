import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { MenuComponent } from "./components/menu/menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { ArticleViewComponent } from "./components/article-view/article-view.component";
import { ArticleComponent } from "./components/article/article.component";
import { EditArticleComponent } from "./components/edit-article/edit-article.component";
import { AddArticleComponent } from "./components/add-article/add-article.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ContactComponent } from "./components/contact/contact.component";
import { MyHttpInterceptor } from "./my-http-interceptor";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuardService } from "./services/auth-guard.service";
import { AuthService } from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    MenuComponent,
    ArticleViewComponent,
    ArticleComponent,
    EditArticleComponent,
    AddArticleComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuardService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
