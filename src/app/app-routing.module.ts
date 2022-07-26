import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { LoginComponent } from './security/login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { RegisterComponent } from './security/register/register.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RoleListComponent } from './role/role-list/role-list.component';
import { CommentUpdateComponent } from './comment/comment-update/comment-update.component';


const routes: Routes = [
  {path: 'articles', component: ArticleListComponent},
  {path:'create-article', component: CreateArticleComponent},
  {path:'update-article/:id', component:UpdateArticleComponent},
  {path: 'article-details/:id', component: ArticleDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'users', component: UserListComponent},
  {path: 'user-update/:id', component: UserUpdateComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'roles', component:RoleListComponent},
  {path: 'comment-update/:id', component: CommentUpdateComponent },
  {path: '', redirectTo: 'login', pathMatch: 'full'} // empty link redirect to articleList
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
