import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { ArticleListService } from '../../services/articleList.service';
import { GetArticleListResponseInterface } from '../../types/getArticleListResponse.interface';

import {
  getArticleListAction,
  getArticleListFailureAction,
  getArticleListSuccessAction,
} from '../actions/getArticleList.action';

@Injectable()
export class GetArticleListEffect {
  getArticleList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleListAction),
      switchMap(({ url }) => {
        return this.articleListService.getArticleList(url).pipe(
          map((articleList: GetArticleListResponseInterface) => {
            return getArticleListSuccessAction({ articleList });
          }),
          catchError(() => {
            return of(getArticleListFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private articleListService: ArticleListService
  ) {}
}
