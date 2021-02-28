import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Article } from "src/app/models/article.model";

import { ArticleService } from "src/app/services/article.service";

@Component({
  selector: "app-edit-article",
  templateUrl: "./edit-article.component.html",
  styleUrls: ["./edit-article.component.css"],
})
export class EditArticleComponent implements OnInit {
  form: FormGroup;

  submitted = false;
  article: Article;
  constructor(
    private formBuilder: FormBuilder,
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
    this.article.title = this.form.value.title;
    this.article.description = this.form.value.description;
    this.article.image = this.form.value.image;
    this.articleService.setCurrentArticle(this.article);
    this.articleService.updateArticle(this.article);
    this.router.navigate(["/article", this.article.id]);
  }
}
