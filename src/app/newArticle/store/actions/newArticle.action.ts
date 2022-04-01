import { createAction, props } from '@ngrx/store';

import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { ServerErrorsInterface } from 'src/app/shared/types/serverErrors.interface';
import { ActionTypes } from '../actionTypes';

export const NewArticleAction = createAction(
  ActionTypes.NEW_ARTICLE,
  props<{ articleInput: ArticleInputInterface }>()
);
export const NewArticleSuccessAction = createAction(
  ActionTypes.NEW_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);
export const NewArticleFailureAction = createAction(
  ActionTypes.NEW_ARTICLE_FAILURE,
  props<{ errors: ServerErrorsInterface }>()
);
