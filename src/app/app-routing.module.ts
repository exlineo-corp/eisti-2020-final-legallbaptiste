import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccueilComponent } from "./components/accueil/accueil.component";
import { ArticleComponent } from "./components/article/article.component";
import { EditArticleComponent } from "./components/edit-article/edit-article.component";
import { AddArticleComponent } from "./components/add-article/add-article.component";
import { ContactComponent } from "./components/contact/contact.component";

import { AuthGuardService } from "./services/auth-guard.service";
import { LoginComponent } from "./components/login/login.component";

const routes: Routes = [
  { path: "accueil", component: AccueilComponent },
  { path: "", component: AccueilComponent },
  { path: "login", component: LoginComponent },
  { path: "article/:articleId", component: ArticleComponent },
  { path: "editArticle/:articleId", component: EditArticleComponent },
  {
    path: "addArticle",
    component: AddArticleComponent,
    canActivate: [AuthGuardService],
  },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
