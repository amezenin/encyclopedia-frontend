import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';

const routes: Routes = [
  {path: 'articles', component: ArticleListComponent},
  {path:'create-article', component: CreateArticleComponent},
  {path:'update-article/:id', component:UpdateArticleComponent},
  {path: 'article-details/:id', component: ArticleDetailsComponent},
  {path: '', redirectTo: 'articles', pathMatch: 'full'} // empty link redirect to articleList
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
