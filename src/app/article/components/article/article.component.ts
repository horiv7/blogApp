import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { combineLatest, map, Observable, Subscription, tap } from 'rxjs';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { deleteArticleAction } from '../../store/actions/deleteArticle.action';

import { getArticleAction } from '../../store/actions/getArticle.action';
import {
  articleSelector,
  errorsSelector,
  isLoadingSelector,
} from '../../store/selectors';

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug!: string;
  article!: ArticleInterface | null;
  articleSubscription!: Subscription;
  error$!: Observable<string | null>;
  isLoading$!: Observable<boolean>;
  isAuthor$!: Observable<boolean>;

  constructor(
    private store: Store<AppStateInterface>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initialValues();
    this.initialListeners();
    this.fetchFeed();
  }
  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  initialListeners() {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article;
      });
  }

  initialValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    this.error$ = this.store.pipe(select(errorsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector)),
    ]).pipe(
      map(
        ([article, currentUser]: [
          ArticleInterface | null,
          CurrentUserInterface | null
        ]) => {
          if (!article || !currentUser) {
            return false;
          }
          return currentUser.username === article.author.username;
        }
      )
    );
  }
  fetchFeed() {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  deleteArticle() {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }
}
