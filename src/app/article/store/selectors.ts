import {createSelector} from '@ngrx/store';
import {AppStateInterface} from 'src/app/shared/types/appState.interface';
import {ArticleStateInterface} from '../types/articleState.interface';

export const articleFeatureSelector = (state: AppStateInterface) =>
  state.article;

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
);

export const errorsSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
);