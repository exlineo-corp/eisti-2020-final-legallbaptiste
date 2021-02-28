import { Component, OnInit } from "@angular/core";
import { Article } from "src/app/models/article.model";
import { Router } from "@angular/router";
import { ArticleService } from "src/app/services/article.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-accueil",
  templateUrl: "./accueil.component.html",
  styleUrls: ["./accueil.component.css"],
})
export class AccueilComponent implements OnInit {
  articles: Array<Article>;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private httpClient: HttpClient
  ) {
    this.articles = this.getArticles();
  }

  ngOnInit(): void {}

  validMethod(): void {
    this.httpClient
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((success) => {
        console.log("Successfully Completed");
        console.log(success);
      });
  }
  failMethod(): void {
    this.httpClient
      .get("https://jsonplaceholder.typicode.com/user12")
      .subscribe((success) => {
        console.log("Successfully Completed");
        console.log(success);
      });
  }

  getArticles(): Array<Article> {
    return this.articleService.getArticles();
  }

  openArticle(article: Article): void {
    this.articleService.setCurrentArticle(article);
    this.router.navigate(["/article", article.id]);
  }

  navigateToAddArticle(): void {
    this.router.navigate(["/addArticle"]);
  }
}
