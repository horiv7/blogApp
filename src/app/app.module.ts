import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedModule } from './feed/feed.module';
import { NavbarModule } from './shared/modules/navbar/navbar.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { ArticleListModule } from './shared/modules/articleList/articleList.module';
import { AuthModule } from './auth/auth.module';
import { LocalStorageService } from './shared/services/localStorage.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/services/auth.interceptor';
import { MyPostsModule } from './myPosts/myPosts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    AuthModule,
    FeedModule,
    StoreModule.forRoot({ router: routerReducer }, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    ArticleListModule,
    MyPostsModule,
  ],
  providers: [
    LocalStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
