import { Component, Input, OnInit } from "@angular/core";
import { Article } from "src/app/models/article.model";
@Component({
  selector: "app-article-preview",
  templateUrl: "./article-view.component.html",
  styleUrls: ["./article-view.component.css"],
})
export class ArticleViewComponent implements OnInit {
  @Input() article: Article = new Article();
  constructor() {}

  ngOnInit(): void {}

  displayDescription(): string {
    return this.article.description.split("\n").join(" ").slice(0, 70);
  }
}
