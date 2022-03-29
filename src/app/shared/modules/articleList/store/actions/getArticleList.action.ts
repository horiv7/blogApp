import { createAction, props } from '@ngrx/store';
import { GetArticleListResponseInterface } from '../../types/getArticleListResponse.interface';
import { ActionTypes } from '../actionTypes';

export const getArticleListAction = createAction(
  ActionTypes.GET_ARTICLE_LIST,
  props<{ url: string }>()
);
export const getArticleListSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_LIST_SUCCESS,
  props<{ articleList: GetArticleListResponseInterface }>()
);
export const getArticleListFailureAction = createAction(
  ActionTypes.GET_ARTICLE_LIST_FAILURE
);
