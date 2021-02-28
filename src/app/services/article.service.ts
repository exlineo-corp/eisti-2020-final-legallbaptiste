import { Injectable } from "@angular/core";
import { Article } from "../models/article.model";
import { HttpClient } from "@angular/common/http";
import { Tools } from "../tools/tools";
@Injectable({
  providedIn: "root",
})
export class ArticleService {
  articles: Array<Article>;

  currentArticle: Article;

  constructor(private httpClient: HttpClient) {
    this.articles = this.initArticles();
    this.currentArticle = new Article(Tools.generateRandomId());
  }

  initArticles(): Array<Article> {
    const res: Array<Article> = [];

    this.httpClient.get("assets/data.json").subscribe((data) => {
      console.log(data);
      let res2 = [];
      res2 = Object.values(data);
      console.log(res2);
      res2.forEach((article) => {
        res.push(
          new Article(
            article.id,
            article.title,
            article.description,
            article.image
          )
        );
      });
    });

    return res;
  }

  getArticles(): Array<Article> {
    return this.articles;
  }

  getLastArticle(): Article {
    return this.articles[this.articles.length - 1];
  }

  getArticle(articleId: number): Article {
    const index = this.articles.findIndex(
      (article: Article) => article.id === articleId
    );
    return this.articles[index];
  }

  addArticle(article: Article): void {
    this.articles.push(article);
  }

  updateArticle(articleUpdate: Article): void {
    const removeIndex = this.articles
      .map(function (item) {
        return item.id;
      })
      .indexOf(articleUpdate.id);
    this.articles.splice(removeIndex, 1, articleUpdate);
  }

  setCurrentArticle(article: Article): void {
    this.currentArticle = article;
  }

  getCurrentArticle(): Article {
    return this.currentArticle;
  }
}
