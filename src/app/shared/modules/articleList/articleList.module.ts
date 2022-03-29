import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store/reducer';
import { ArticleListComponent } from './components/articleList/articleList.component';
import { GetArticleListEffect } from './store/effects/getFeed.effect';
import { ArticleListService } from './services/articleList.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('articleList', reducers),
    EffectsModule.forFeature([GetArticleListEffect]),
    RouterModule,
  ],
  declarations: [ArticleListComponent],
  exports: [ArticleListComponent],
  providers: [ArticleListService],
})
export class ArticleListModule {}
