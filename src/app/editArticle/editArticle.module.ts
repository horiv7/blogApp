import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';

import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { EditArticleComponent } from './components/editArticle/editArticle.component';
import { EditArticleService } from './services/editArticle.service';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { UpdateArticleEffect } from './store/effects/updateArticle.effect';
import { reducers } from './store/reducer';

const routes = [
  { path: 'articles/:slug/edit', component: EditArticleComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    HttpClientModule,
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
  ],
  declarations: [EditArticleComponent],
  exports: [],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
