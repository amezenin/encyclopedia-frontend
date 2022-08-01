import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentService } from '../../comment/comment.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  createCommentForm: FormGroup;
  id: number = 1; 
  article = {} as Article;
  constructor(private route: ActivatedRoute,
    private articleService: ArticleService, private formBuilder: FormBuilder,
  private commentService: CommentService) { 
      this.createCommentForm = formBuilder.group({ // building form by FormBuilder
        content: ['',  [  Validators.required,  
                        Validators.minLength(1), 
                        Validators.maxLength(400)]],  
      })
    }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.article;
    this.articleService.getArticleById(this.id).subscribe(data => {
      this.article = data;
    });

    //can show all changes.  
    this.createCommentForm.valueChanges.subscribe({
      next: data => {
        console.log(data);
      }
    });
  }

  onSubmit(){
    this.articleService.createComment(this.id, this.createCommentForm.value).subscribe({
      next: () =>  {
        window.location.reload();
      }
    });

    console.log(this.createCommentForm.value);
  }

}
