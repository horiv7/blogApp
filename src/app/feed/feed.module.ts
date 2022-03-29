import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleListModule } from '../shared/modules/articleList/articleList.module';

import { FeedComponent } from './components/feed/feed.component';

const routes = [{ path: '', component: FeedComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ArticleListModule],
  declarations: [FeedComponent],
  exports: [],
})
export class FeedModule {}
