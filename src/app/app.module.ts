import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { FormsModule } from '@angular/forms';
import { UpdateArticleComponent } from './article/update-article/update-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    CreateArticleComponent,
    UpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
