import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article = {} as Article;
  constructor(private articleService: ArticleService,
  private router: Router) { }

  ngOnInit(): void {
  }

  saveArticle(){
    this.articleService.createArcticle(this.article).subscribe( data => {
      console.log(data);
    },
  error => console.log(error));
  }

  goToArticleList(){
    this.router.navigate(['/articles']);
  }

  onSubmit(){
    console.log(this.article);
    this.saveArticle();
  }

}
