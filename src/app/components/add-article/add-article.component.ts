import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Article } from "src/app/models/article.model";

import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-add-article",
  templateUrl: "./add-article.component.html",
  styleUrls: ["./add-article.component.css"],
})
export class AddArticleComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  article: Article;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService
  ) {
    this.article = this.initArticle();
    this.form = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    // password not required in edit mode

    this.form = this.formBuilder.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      image: ["", Validators.required],
    });
  }

  initArticle(): Article {
    return this.articleService.getCurrentArticle();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    const article = new Article();
    const lastArticle = this.articleService.getLastArticle();
    article.id = lastArticle.id + 1;
    article.title = this.form.value.title;
    article.description = this.form.value.description;
    article.image = this.form.value.image;
    this.articleService.setCurrentArticle(article);
    this.articleService.addArticle(article);
    this.router.navigate(["/article", article.id]);
  }
}
