import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { NewArticleComponent } from './components/newArticle/newArticle.component';
import { NewArticleService } from './services/newArticle.service';
import { newArticleEffect } from './store/effects/newArticle.effect';
import { reducers } from './store/reducer';

const routes = [{ path: 'articles/new', component: NewArticleComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    HttpClientModule,
    EffectsModule.forFeature([newArticleEffect]),
    StoreModule.forFeature('newArticle', reducers),
  ],
  declarations: [NewArticleComponent],
  exports: [],
  providers: [NewArticleService],
})
export class NewArticleModule {}
