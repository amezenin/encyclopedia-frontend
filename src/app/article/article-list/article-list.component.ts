import { Component, OnInit } from '@angular/core';
import {Article} from '../article'
import { ArticleService } from '../article.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];
  clonedArticles: { [s: string]: Article; } = {};

  constructor(private articleService: ArticleService,
    private router: Router) { }

  ngOnInit(): void {
    this.getArticles();
  }

  private getArticles(){
    this.articleService.getArticleList().subscribe(data => {
      this.articles = data; 
    });
  }

  updateArticle(id: number){
    this.router.navigate(['update-article', id])
  }

}
