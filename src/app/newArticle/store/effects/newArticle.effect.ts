import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';

import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { NewArticleService } from '../../services/newArticle.service';
import {
  NewArticleAction,
  NewArticleFailureAction,
  NewArticleSuccessAction,
} from '../actions/newArticle.action';

@Injectable()
export class newArticleEffect {
  newArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(NewArticleAction),
      switchMap(({ articleInput }) => {
        return this.newArticleService.newArticle(articleInput).pipe(
          map((article: ArticleInterface | any) => {
            return NewArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              NewArticleFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(NewArticleSuccessAction),
        tap(({ article }) => {
          this.router.navigate(['/articles', article.slug]);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private newArticleService: NewArticleService,
    private router: Router
  ) {}
}
