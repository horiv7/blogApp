import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';

import { getArticleListAction } from 'src/app/shared/modules/articleList/store/actions/getArticleList.action';
import { LocalStorageService } from 'src/app/shared/services/localStorage.service';
import { logoutAction } from '../actions/logout.action';

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          this.localStorageService.set('accessToken', '');
          this.store.dispatch(getArticleListAction({ url: '/articles' }));
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private store: Store
  ) {}
}
