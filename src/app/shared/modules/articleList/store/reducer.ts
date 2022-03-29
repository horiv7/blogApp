import { routerNavigationAction } from '@ngrx/router-store';
import { Action, createReducer, on } from '@ngrx/store';

import { ArticleListStateInterface } from '../types/articleListState.interface';

import {
  getArticleListAction,
  getArticleListFailureAction,
  getArticleListSuccessAction,
} from './actions/getArticleList.action';

const initialState: ArticleListStateInterface = {
  data: null,
  isLoading: false,
  error: null,
};

const articleListReducer = createReducer(
  initialState,
  on(
    getArticleListAction,
    (state): ArticleListStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleListSuccessAction,
    (state, action): ArticleListStateInterface => ({
      ...state,
      isLoading: false,
      data: action.articleList,
    })
  ),
  on(
    getArticleListFailureAction,
    (state): ArticleListStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): ArticleListStateInterface => initialState)
);
export function reducers(state: ArticleListStateInterface, action: Action) {
  return articleListReducer(state, action);
}
