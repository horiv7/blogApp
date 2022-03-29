import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ArticleListStateInterface } from '../types/articleListState.interface';

export const articleListFeatureSelector = (state: AppStateInterface) =>
  state.articleList;

export const isLoadingSelector = createSelector(
  articleListFeatureSelector,
  (articleListState: ArticleListStateInterface) => articleListState.isLoading
);

export const errorsSelector = createSelector(
  articleListFeatureSelector,
  (articleListState: ArticleListStateInterface) => articleListState.error
);

export const articleListSelector = createSelector(
  articleListFeatureSelector,
  (articleListState: ArticleListStateInterface) => articleListState.data
);
