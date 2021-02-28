import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "src/app/models/article.model";
import { ArticleService } from "src/app/services/article.service";
import { Tools } from "src/app/tools/tools";
import { Router } from "@angular/router";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute,
    private articleService: ArticleService
  ) {
    this.article = this.initArticle();
  }

  ngOnInit(): void {}

  initArticle(): Article {
    return this.articleService.getCurrentArticle();
  }

  getTitleCurrentArticle(): string {
    return this.articleService.getCurrentArticle().title;
  }

  getImageCurrentArticle(): string {
    return this.articleService.getCurrentArticle().image;
  }

  getDescriptionCurrentArticle(): string {
    return this.articleService.getCurrentArticle().description;
  }

  navigateToEditArticle(articleId: number): void {
    this.router.navigate(["/editArticle", articleId]);
  }
}
