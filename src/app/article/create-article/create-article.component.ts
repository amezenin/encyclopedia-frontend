import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../security/token-storage.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article = {} as Article;
  constructor(private articleService: ArticleService,
  private router: Router,
  private token: TokenStorageService) { }

  ngOnInit(): void {
  }

  saveArticle(){
    this.articleService.createArcticle(this.article).subscribe( data => {
      console.log(data);
      this.goToArticleList();
    },
  error => console.log(error));
  }

  goToArticleList(){
    this.router.navigate(['/articles']);
  }

  onSubmit(){
    console.log(this.article);
    this.article.userId = this.token.getUser().id;
    this.saveArticle();
  }

}
