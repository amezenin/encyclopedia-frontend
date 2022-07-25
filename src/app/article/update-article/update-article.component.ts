import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  id: number = 1;
  article = {} as Article;
  constructor(private articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.articleService.getArticleById(this.id).subscribe({
      next: data => {
        this.article = data;
        }, 
      error: error => console.log(error)
    });
  }

  onSubmit(){
    this.articleService.updateArticle(this.id, this.article).subscribe( data =>{
      this.goToArticleList();
    }, error => console.log(error));
  }

  goToArticleList(){
    this.router.navigate(['/articles']);
  }

}
