import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ArticleListModule } from '../shared/modules/articleList/articleList.module';
import { MyPostsComponent } from './components/myPosts/myPosts.component';

const routes = [{ path: 'my-posts/:slug', component: MyPostsComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ArticleListModule],
  declarations: [MyPostsComponent],
  exports: [],
})
export class MyPostsModule {}
