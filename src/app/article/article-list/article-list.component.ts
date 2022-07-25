import { Component, OnInit } from '@angular/core';
import {Article} from '../article'
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../security/token-storage.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleService: ArticleService,
    private router: Router,
    private token: TokenStorageService) { }

  ngOnInit(): void {
    this.getArticles();
  }



  private getArticles(){
    this.articleService.getArticleList().subscribe(data => {
      this.articles = data; 
    });
  }

  updateArticle(id: number, userId: number){
    if(userId == this.token.getUser().id || this.token.getUser().roles.includes("ROLE_ADMIN") == true ){
      this.router.navigate(['update-article', id]);
    }
    console.log("article did not create by user");
  }

  deleteArticle(id: number, userId:number){
    if(userId == this.token.getUser().id || this.token.getUser().roles.includes("ROLE_ADMIN") == true ){
      this.articleService.deleteArticle(id).subscribe(data => {
        console.log(data);
        this.getArticles();
      });
    }
    console.log("article did not create by user");
  }

  articleDetails(id: number){
    this.router.navigate(['article-details', id])
  }



}
