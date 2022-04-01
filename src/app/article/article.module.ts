import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

 
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from './services/article.service';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { reducers } from './store/reducer';

const route = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    RouterModule.forChild(route),
  ],
  declarations: [ArticleComponent],
  exports: [],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
